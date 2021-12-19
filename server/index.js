const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '471Project'
});

db.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Successful");  
    }  
    else{  
        console.log("Db Connection Failed, Error :" + JSON.stringify(err,undefined,2));  
    }  
});  

app.use(cors()); //applying middle ware through .use()
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log("Running on port 3001");
});

//Account Table API commands
app.get('/api/account', (req, res) => {
    const sqlSelect = "SELECT ID, Username, Email, Password FROM Account";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get('/api/account/users', (req, res) => {
    const sqlSelect = "SELECT * FROM Account JOIN User ON Account.ID = User.ID";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get('/api/account/vendors', (req, res) => {
    const sqlSelect = "SELECT * FROM Account JOIN Vendor ON Account.ID = Vendor.ID";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});

//User Table API Commands
app.get('/api/users', (req, res) => {
    const sqlSelect = "SELECT ID, Display_Name, First_Name, Last_Name FROM User";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.post('/api/users', (req, res) => {
    const displayName = req.body.displayName; //will get these from Axios
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlPost = "INSERT INTO Account (Username, Email, Password) VALUES (?, ?, ?)";
    db.query(sqlPost, [userName, email, password], (err, result) => {
        console.log(result);

        const sqlGet = "SELECT MAX(ID) AS maxID FROM Account";
        db.query(sqlGet, (errGet, resultGet) => {
            console.log(resultGet[0].maxID);
            res.send(resultGet);
    
            const sqlInsert = "INSERT INTO User (ID, Display_Name, First_Name, Last_Name) VALUES (?, ?, ?, ?)";
            db.query(sqlInsert, [resultGet[0].maxID, displayName, firstName, lastName], (errN, resultN) => {
                console.log(errN);
                console.log(resultN);
            });
        });
    });    
});

//VENDOR TABLE API COMMANDS
app.get('/api/vendor', (req, res) => {
    const sqlSelect = "SELECT ID, Vendor_Name FROM Vendor";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.post('/api/vendor', (req, res) => {
    const vendorName = req.body.vendorName; //will get these from Axios
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlPost = "INSERT INTO Account (Username, Email, Password) VALUES (?, ?, ?)";
    db.query(sqlPost, [userName, email, password], (err, result) => {
        console.log(result);
        
        const sqlGet = "SELECT MAX(ID) AS maxID FROM Account";
        db.query(sqlGet, (errN, resultN) => {
            console.log(resultN[0].maxID);
            res.send(resultN);
    
            const sqlInsert = "INSERT INTO Vendor (Vendor_Name, ID) VALUES (?, ?)";
            db.query(sqlInsert, [vendorName, resultN[0].maxID], (errN1, resultN1) => {
                console.log(errN1);
                console.log(resultN1);
            });
        });
    });    
});

//TRIP TABLE API COMMANDS
app.get('/api/trips/:accountID', (req, res) => {
    const accountID = req.params.accountID;

    const sqlSelect = "SELECT Trip_ID FROM Trip WHERE Account_ID = ?";
    db.query(sqlSelect, [accountID], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get('/api/trip/:tripID', (req, res) => {
    const tripID = req.params.tripID;

    const sqlSelect = "SELECT Account_ID, Start_Date, End_Date, Start_Location, Destination FROM Trip WHERE Trip_ID = ?";
    db.query(sqlSelect, [tripID], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.post('/api/trip', (req, res) => {
    const accountID = req.body.accountID; //will get these from Axios
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const startLocation = req.body.startLocation;
    const destination = req.body.destination;

    const sqlInsert = "INSERT INTO Trip (Account_ID, Start_Date, End_Date, Start_Location, Destination) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [accountID, startDate, endDate, startLocation, destination], (err, result) => {
        if (!err)
        {
            console.log(result);
            const sqlGet = "SELECT MAX(Trip_ID) AS maxID FROM Trip";
            db.query(sqlGet, (errN, resultN) => {
                console.log(resultN[0].maxID);
                res.send(resultN);
            });
        }
        else
            console.log(err);
    });
});

//TRIP_LOCATIONS TABLE API COMMANDS
app.get('/api/trip/locations/:tripID', (req, res) => {
    const sqlInsert = "SELECT Location FROM Trip_Locations WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/trip/locations/:tripID/:location', (req, res) => {
    const sqlInsert = "INSERT INTO Trip_Locations (Trip_ID, Location) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.tripID, req.params.location], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

//TRIP_EVENT_GROUPS TABLE API COMMANDS
app.get('/api/trip/events/:tripID', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Trip_Event_Groups WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/trip/events/:tripID/:eventID', (req, res) => {
    const sqlInsert = " INSERT INTO Trip_Event_Groups (Event_ID, Trip_ID) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.eventID, req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log(result);
        }
        else
            console.log(err);
    });
});

//EVENT TABLE API COMMANDS
app.get('/api/event', (req, res) => {
    const sqlInsert = "SELECT * FROM Event";
    db.query(sqlInsert, (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/event', (req, res) => {
    const description = req.body.description; //will get these from Axios
    const date = req.body.date;
    const eventName = req.body.eventName;
    const duration = req.body.duration;
    const accountID = req.body.accountID;
    const type = req.body.type;

    const sqlInsert = "INSERT INTO Event (Event_Description, Date, Event_Name, Duration, Account_Creator, Type) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [description, date, eventName, duration, accountID, type], (err, result) => {
        if (!err)
        {
            console.log(result);
            const sqlGET = "SELECT MAX(Event_ID) AS maxID FROM Event";
            db.query(sqlGET, (errN, resultN) => {
                res.send(resultN);
            });
        }
        else
            console.log(err);
    });
});

//EVENT_LOCATIONS TABLE API COMMANDS
app.get('/api/event/locations', (req, res) => {
    const sqlInsert = "SELECT * FROM Event_Locations";
    db.query(sqlInsert, (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/event/locations/:eventID/:locationName', (req, res) => {
    const sqlInsert = "INSERT INTO Event_Locations (Event_ID, Event_Location) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.eventID, req.params.locationName], (err, result) => {
        if (!err)
        {
            console.log(result);
        }
        else
            console.log(err);
    });
});

//USER_INVITES_EVENT TABLE API COMMANDS
app.get('/api/invites/event/', (req, res) => {
    const sqlInsert = "SELECT * FROM User_Invites_Event";
    db.query(sqlInsert, (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/invites/event', (req, res) => {
    const sqlInsert = "INSERT INTO User_Invites_Event (User_ID_sender, User_ID_invited, Event_ID, has_accepted) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [req.body.userSender, req.body.userInvited, req.body.eventID, req.body.hasAccepted], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

//USER_INVITES_TRIP TABLE API COMMANDS
app.get('/api/invites/trip', (req, res) => {
    const sqlInsert = "SELECT * FROM User_Invites_Trip";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/invites/trip', (req, res) => {
    const sqlInsert = "INSERT INTO User_Invites_Trip (User_ID_sender, User_ID_invited, Trip_ID, has_accepted) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [req.body.userSender, req.body.userInvited, req.body.tripID, req.body.hasAccepted], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

//VEHICLE TABLE API COMMANDS

app.get('/api/vehicle', (req, res) => {
    const sqlInsert = "SELECT * FROM Vehicle";
    db.query(sqlInsert, (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/vehicle', (req, res) => {
    const sqlInsert = "INSERT INTO Vehicle (Price_per_passenger, Type, Land, Water, Air) VALUES (?, ?, ?, ?, ?)";
    console.log(req.body);
    db.query(sqlInsert, [req.body.pricePerPassenger, req.body.type, req.body.land, req.body.water, req.body.air], (err, result) => {
        if (!err)
        {
            console.log(result);
            const sqlGet = "SELECT MAX(Vehicle_ID) AS maxID FROM Vehicle"
            db.query(sqlGet, (errN, resultN) => {
                res.send(resultN);
            })
        }
        else
            console.log(err);
    });
});

//VEHICLE_TRIP_USES TABLE API COMMANDS
app.get('/api/trip/vehicle', (req, res) => {
    const sqlInsert = "SELECT * FROM Vehicle_Trip_Uses";
    db.query(sqlInsert, (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/trip/vehicle', (req, res) => {
    const sqlInsert = "INSERT INTO Vehicle_Trip_Uses (Trip_ID, Vehicle_ID, Start_Location, End_Location, Start_Time, End_Time) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [req.body.tripID, req.body.vehicleID, req.body.startLocation, req.body.endLocation, req.body.startTime, req.body.endTime], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});