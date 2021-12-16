const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '471Project'
});

mysql.connect((err) => {  
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

//Account Table API commands
app.get('/api/account', (req, res) => {
    const sqlSelect = "SELECT ID, Username, Email FROM Account";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.get('/api/account/:id', (req, res) => {
    const sqlSelect = "SELECT ID, Username, Email FROM Account WHERE ID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.get('/api/account/password/:id', (req, res) => {
    const sqlSelect = "SELECT Password FROM Account WHERE ID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.delete('/api/account/:id', (req, res) => {
    const sqlSelect = " DELETE FROM Account WHERE ID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        if (!err)
            console.log("Successfully deleted account: ${req.params.id}");
        else {
            console.log("Error arose while deleting account: ${req.params.id}");
            console.log(err);
        }
    });
});


//User Table API Commands
app.get('/api/users', (req, res) => {
    const sqlSelect = "SELECT ID, Display_Name, First_Name, Last_Name FROM User";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.post('/api/users', (req, res) => {
    const displayName = req.body.displayName; //will get these from Axios
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO User (Display_Name, First_Name, Last_Name) AND INSERT INTO Account (Username, Email, Password) OUTPUT Inserted.a.ID VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [displayName, firstName, lastName, userName, email, password], (err, result => {
        console.log(result);
    }));
});

app.put('/api/users/:id', (req, res) => {
    const displayName = req.body.displayName; //will get these from Axios
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "UPDATE User AS u, Account AS a SET u.Display_Name = ?, u.First_Name, u.Last_Name = ?, u.UserName = ?, a.Email = ?, a.Password = ? WHERE u.ID = ? AND a.ID = ?";
    db.query(sqlInsert, [displayName, firstName, lastName, userName, email, password], (err, result => {
        console.log(result);
    }));
});

//VENDOR TABLE API COMMANDS
app.get('/api/vendor', (req, res) => {
    const sqlSelect = "SELECT ID, Vendor_Name FROM Vendor";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.post('/api/vendor', (req, res) => {
    const vendorName = req.body.displayName; //will get these from Axios
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO Vendor(Vendor _Name) AND INSERT INTO Account(Username, Email, Password) OUTPUT Inserted.ID VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [displayName, firstName, lastName, userName, email, password], (err, result => {
        console.log(result);
    }));
});

app.put('/api/vendor/:id', (req, res) => {
    const vendorName = req.body.displayName; //will get these from Axios
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "UPDATE Vendor AS v, Account AS a SET v.Vender_Name = ?, u.UserName = ?, a.Email = ?, a.Password = ? WHERE u.ID = ? AND a.ID = ?";
    db.query(sqlInsert, [vendorName, userName, email, password], (err, result => {
        console.log(result);
    }));
});

//ACCOUNT_TRIP_MODERATES TABLE API COMMANDS
app.get('/api/moderator', (req, res) => {
    const sqlSelect = "SELECT ID FROM Account_Trip_Moderates";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.get('/api/moderates/:id', (req, res) => {
    const accountID = req.body.accountID;

    const sqlSelect = "SELECT ID FROM Account_Trip_Moderates WHERE Account_ID = ?";
    db.query(sqlSelect, [accountID], (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.post('/api/moderator/:tripID/:accountID', (req, res) => {
    const accountID = req.body.accountID; //will get these from Axios
    const tripID = req.body.tripID;

    const sqlInsert = "UPDATE Account_Trip_Moderates SET Account_ID = ? WHERE Trip_ID = ?";
    db.query(sqlInsert, [accountID, tripID], (err, result => {
        if (!err)
            console.log("Successfully added moderator");
        else
            console.log(err);
    }));
});

app.delete('/api/moderator/:tripID/:accountID', (req, res) => {
    const sqlSelect = "DELETE FROM Account_Trip_Moderates WHERE Account_ID = ? AND Trip_ID = ?";
    db.query(sqlSelect, [req.params.accountID, req.params.tripID], (err, result) => {
        if (!err)
            console.log("Successfully moderator account: ${req.params.accountID}");
        else {
            console.log("Error arose while deleting moderator: ${req.params.accountID}");
            console.log(err);
        }
    });
});

//TRIP TABLE API COMMANDS
app.get('/api/trips/:id', (req, res) => {
    const accountID = req.body.accountID;

    const sqlSelect = "SELECT Trip_ID FROM Trip WHERE Account_ID = ?";
    db.query(sqlSelect, [accountID], (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.get('/api/trip/:id', (req, res) => {
    const tripID = req.body.tripID;

    const sqlSelect = "SELECT Account_ID, Start_Date, End_Date, Start_Location, Destination FROM Trip WHERE Trip_ID = ?";
    db.query(sqlSelect, [tripID], (err, result) => {
        res.send(result);
        console.log(result.data);
    });
});

app.post('/api/trip', (req, res) => {
    const accountID = req.body.accountID; //will get these from Axios
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const startLocation = req.body.startLocation;
    const destination = req.body.destination;

    const sqlInsert = "INSERT INTO Trip (Account_ID, Start_Date, End_Date, Start_Location, Destination) OUTPUT Inserted.Trip_ID VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [accountID, startDate, endDate, startLocation, destination], (err, result => {
        if (!err)
            console.log(result);
        else
            console.log(err);
    }));
});

app.put('/api/trip/:tripID', (req, res) => {
    const accountID = req.body.accountID; //will get these from Axios
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const startLocation = req.body.startLocation;
    const destination = req.body.destination;

    const sqlInsert = "UPDATE Trip SET Account_ID = ?, Start_Date = ?, End_Date = ?, Start_Location = ?, Destination = ? WHERE Trip_ID = ?";
    db.query(sqlInsert, [accountID, startDate, endDate, startLocation, destination, req.params.tripID], (err, result => {
        if (!err)
            console.log(result);
        else
            console.log(err);
    }));
});

app.delete('/api/trip/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip, Trip_Event_Groups WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result => {
        if (!err)
            console.log("Deleted trip successfully");
        else
            console.log(err);
    }));
});


//TRIP_LOCATIONS TABLE API COMMANDS
app.get('/api/trip/locations/:tripID', (req, res) => {
    const sqlInsert = "SELECT Location FROM Trip_Locations WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.post('/api/trip/locations/:tripID/:location', (req, res) => {
    const sqlInsert = "INSERT INTO Trip_Locations (Trip_ID, Location) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.tripID, req.params.location], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.delete('/api/trip/locations/:tripID/:location', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Locations WHERE Location = ? AND Trip_ID = ?";
    db.query(sqlInsert, [req.params.location, req.params.tripID], (err, result => {
        if (!err)
        {
            console.log("Successfully deleted location");
        }
        else
            console.log(err);
    }));
});

app.delete('/api/trip/locations/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Locations WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result => {
        if (!err)
        {
            console.log("Successfully all locations from trip");
        }
        else
            console.log(err);
    }));
});

//TRIP_EVENT_GROUPS TABLE API COMMANDS
app.get('/api/trip/events/:tripID', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Trip_Event_Groups WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.post('/api/trip/events/:tripID/:eventID', (req, res) => {
    const sqlInsert = " INSERT INTO Trip_Event_Groups (Event_ID, Trip_ID) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.eventID, req.params.tripID], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.delete('/api/trip/events/:tripID/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Event_Groups WHERE Event_ID = ? AND Trip_ID = ?";
    db.query(sqlInsert, [req.params.eventID, req.params.tripID], (err, result => {
        if (!err)
        {
            console.log("Successfully deleted event from trip");
        }
        else
            console.log(err);
    }));
});

app.delete('/api/trip/events/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Event_Groups WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result => {
        if (!err)
        {
            console.log("Successfully deleted all events from trip");
        }
        else
            console.log(err);
    }));
});


//EVENT TABLE API COMMANDS
app.get('/api/event', (req, res) => {
    const sqlInsert = "SELECT * FROM Event";
    db.query(sqlInsert, (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.get('/api/event/:eventID', (req, res) => {
    const sqlInsert = "SELECT * FROM Event WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.post('/api/event', (req, res) => {
    const description = req.body.description; //will get these from Axios
    const date = req.body.date;
    const eventName = req.body.eventName;
    const duration = req.body.duration;

    const sqlInsert = "INSERT INTO Event (Event_Description, Date, Event_Name, Duration) OUTPUT Inserted.Event_ID VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [description, date, eventName, duration], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.put('/api/event/:eventID', (req, res) => {
    const description = req.body.description; //will get these from Axios
    const date = req.body.date;
    const eventName = req.body.eventName;
    const duration = req.body.duration;

    const sqlInsert = "UPDATE Event SET Event_Description= ?, Date= ?, Event_Name= ?, Duration= ? WHERE Event_ID = ?";
    db.query(sqlInsert, [description, date, eventName, duration, req.params.eventID], (err, result => {
        if (!err)
        {
            console.log(result);
        }
        else
            console.log(err);
    }));
});

app.delete('/api/event/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Event WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result => {
        if (!err)
        {
            console.log("Successfully deleted event");
        }
        else
            console.log(err);
    }));
});

//TODO: Link account and event
app.delete('/api/event/account/:accountID', (req, res) => {
    const sqlInsert = "DELETE FROM Event WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result => {
        if (!err)
        {
            console.log("Successfully deleted event");
        }
        else
            console.log(err);
    }));
});


//EVENT_LOCATIONS TABLE API COMMANDS
app.get('/api/event/locations/:eventID', (req, res) => {
    const sqlInsert = "SELECT Event_Location FROM Event_Locations WHERE Event_ID = ?";
    db.query(sqlInsert, (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.post('/api/event/locations/:eventID/:locationName', (req, res) => {
    const sqlInsert = "INSERT INTO Event_Location(Event_ID, Event_Location) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.eventID, req.params.locationName], (err, result => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    }));
});

app.delete('/api/event/locations/:eventID/:locationName', (req, res) => {
    const sqlInsert = "DELETE FROM Event_Location WHERE Event_ID = ? AND Event_Location = ?";
    db.query(sqlInsert, [req.params.eventID, req.params.locationName], (err, result => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    }));
});

app.delete('/api/event/locations/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Event_Location WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    }));
});


app.listen(3001, () => {
    console.log("Running on port 3001");
});