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
    const sqlSelect = "SELECT ID, Username, Email FROM Account";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get('/api/account/:id', (req, res) => {
    const sqlSelect = "SELECT ID, Username, Email FROM Account WHERE ID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get('/api/account/password/:id', (req, res) => {
    const sqlSelect = "SELECT Password FROM Account WHERE ID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        res.send(result);
        console.log(result);
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
        db.query(sqlGet, (err, result) => {
            console.log(result[0].maxID);
            res.send(result);
    
            const sqlInsert = "INSERT INTO User (ID, Display_Name, First_Name, Last_Name) VALUES (?, ?, ?, ?)";
            db.query(sqlInsert, [result[0].maxID, displayName, firstName, lastName], (err, result) => {
                console.log(err);
                console.log(result);
            });
        });
    });    
});

app.put('/api/users/:id', (req, res) => {
    const displayName = req.body.displayName; //will get these from Axios
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "UPDATE User AS u, Account AS a SET u.Display_Name = ?, u.First_Name = ?, u.Last_Name = ?, a.Username = ?, a.Email = ?, a.Password = ? WHERE u.ID = ? AND a.ID = ?";
    db.query(sqlInsert, [displayName, firstName, lastName, userName, email, password, req.params.id, req.params.id], (err, result) => {
        console.log(err);
        console.log(result);
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
        db.query(sqlGet, (err, result) => {
            console.log(result[0].maxID);
            res.send(result);
    
            const sqlInsert = "INSERT INTO Vendor (Vendor_Name) VALUES (?)";
            db.query(sqlInsert, [vendorName], (err, result) => {
                console.log(err);
                console.log(result);
            });
        });
    });    
});

app.put('/api/vendor/:id', (req, res) => {
    const vendorName = req.body.displayName; //will get these from Axios
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "UPDATE Vendor AS v, Account AS a SET v.Vendor_Name = ?, a.Username = ?, a.Email = ?, a.Password = ? WHERE v.ID = ? AND a.ID = ?";
    db.query(sqlInsert, [vendorName, userName, email, password, req.params.id, req.params.id], (err, result) => {
        console.log(err);
        console.log(result);
    });
});

//ACCOUNT_TRIP_MODERATES TABLE API COMMANDS
app.get('/api/moderator/:tripID', (req, res) => {
    const sqlSelect = "SELECT Account_ID FROM Account_Trip_Moderates WHERE Trip_ID = ?";
    db.query(sqlSelect, [req.params.tripID], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get('/api/moderates/:accountID', (req, res) => {
    const accountID = req.params.accountID;

    const sqlSelect = "SELECT Trip_ID FROM Account_Trip_Moderates WHERE Account_ID = ?";
    db.query(sqlSelect, [accountID], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.post('/api/moderator/:tripID/:accountID', (req, res) => {
    const accountID = req.params.accountID; //will get these from Axios
    const tripID = req.params.tripID;

    const sqlInsert = "INSERT INTO Account_Trip_Moderates (Account_ID, Trip_ID) VALUES (?, ?)";
    db.query(sqlInsert, [accountID, tripID], (err, result) => {
        if (!err)
            console.log("Successfully added moderator");
        else
            console.log(err);
    });
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
            db.query(sqlGet, (err, result) => {
                console.log(result[0].maxID);
                res.send(result);
            });
        }
        else
            console.log(err);
    });
});

app.put('/api/trip/:tripID', (req, res) => {
    const accountID = req.body.accountID; //will get these from Axios
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const startLocation = req.body.startLocation;
    const destination = req.body.destination;

    const sqlInsert = "UPDATE Trip SET Account_ID = ?, Start_Date = ?, End_Date = ?, Start_Location = ?, Destination = ? WHERE Trip_ID = ?";
    db.query(sqlInsert, [accountID, startDate, endDate, startLocation, destination, req.params.tripID], (err, result) => {
        if (!err)
            console.log(result);
        else
            console.log(err);
    });
});

app.delete('/api/trip/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip, Trip_Event_Groups WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
            console.log("Deleted trip successfully");
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

app.delete('/api/trip/locations/:tripID/:location', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Locations WHERE Location = ? AND Trip_ID = ?";
    db.query(sqlInsert, [req.params.location, req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted location");
        }
        else
            console.log(err);
    });
});

app.delete('/api/trip/locations/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Locations WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully all locations from trip");
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

app.delete('/api/trip/events/:tripID/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Event_Groups WHERE Event_ID = ? AND Trip_ID = ?";
    db.query(sqlInsert, [req.params.eventID, req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted event from trip");
        }
        else
            console.log(err);
    });
});

app.delete('/api/trip/events/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM Trip_Event_Groups WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted all events from trip");
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

app.get('/api/event/:eventID', (req, res) => {
    const sqlInsert = "SELECT * FROM Event WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/event/:accountID', (req, res) => {
    const sqlInsert = "SELECT * FROM Event WHERE Account_Creator = ?";
    db.query(sqlInsert, [req.params.accountID], (err, result) => {
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

    const sqlInsert = "INSERT INTO Event (Event_Description, Date, Event_Name, Duration, Account_Creator) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [description, date, eventName, duration, accountID], (err, result) => {
        if (!err)
        {
            console.log(result);
            const sqlGET = "SELECT MAX(Event_ID) FROM Event";
            db.query(sqlGET, (err, result) => {
                res.send(result);
            });
        }
        else
            console.log(err);
    });
});

app.put('/api/event/:eventID', (req, res) => {
    const description = req.body.description; //will get these from Axios
    const date = req.body.date;
    const eventName = req.body.eventName;
    const duration = req.body.duration;

    const sqlInsert = "UPDATE Event SET Event_Description= ?, Date= ?, Event_Name= ?, Duration= ? WHERE Event_ID = ?";
    db.query(sqlInsert, [description, date, eventName, duration, req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Event WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted event");
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/account/:accountID', (req, res) => {
    const sqlInsert = "DELETE FROM Event WHERE Account_Creator = ?";
    db.query(sqlInsert, [req.params.accountID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted all events owned by specified account");
        }
        else
            console.log(err);
    });
});

//EVENT_LOCATIONS TABLE API COMMANDS
app.get('/api/event/locations/:eventID', (req, res) => {
    const sqlInsert = "SELECT Event_Location FROM Event_Locations WHERE Event_ID = ?";
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

app.delete('/api/event/locations/:eventID/:locationName', (req, res) => {
    const sqlInsert = "DELETE FROM Event_Locations WHERE Event_ID = ? AND Event_Location = ?";
    db.query(sqlInsert, [req.params.eventID, req.params.locationName], (err, result) => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/locations/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Event_Locations WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    });
});


//EVENT_VENDOR_CREATES TABLE API COMMANDS
app.get('/api/event/vendor', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Event_Vendor_Creates";
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

app.get('/api/event/vendor/:vendorID', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Event_Vendor_Creates WHERE Vendor_ID = ?";
    db.query(sqlInsert, [req.params.vendorID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/event/:eventID/vendor', (req, res) => {
    const sqlInsert = "SELECT Vendor_ID FROM Event_Vendor_Creates WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/event/vendor/:vendorID/:eventID', (req, res) => {
    const sqlInsert = "INSERT INTO Event_Vendor_Creates(Event_ID, Vendor_ID) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.eventID, req.params.vendorID], (err, result) => {
        if (!err)
        {
            console.log(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/vendor/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Event_Vendor_Creates WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/vendor/:vendorID', (req, res) => {
    const sqlInsert = "DELETE FROM Event_Vendor_Creates WHERE Vendor_ID = ?";
    db.query(sqlInsert, [req.params.vendorID], (err, result) => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    });
});

//PRIVATE_EVENT TABLE API COMMANDS
app.get('/api/event/private', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Private_Event";
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

app.get('/api/event/private/:eventID', (req, res) => {
    const sqlInsert = "SELECT COUNT(*) FROM Private_Event WHERE Event_ID = ?";
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

app.post('/api/event/private', (req, res) => {
    const eventID = req.body.eventID;
    const sqlInsert = "INSERT INTO Private_Event (Event_ID) VALUES (?)";
    db.query(sqlInsert, [eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/private/:eventID', (req, res) => {
    const sqlInsert = " DELETE FROM Private_Event WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Deleted successfully");
        }
        else
            console.log(err);
    });
});

//TRANSACTIONS TABLE API COMMANDS
app.get('/api/transactions', (req, res) => {
    const sqlInsert = "SELECT * FROM Transactions";
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

app.get('/api/transactions/:transactionID', (req, res) => {
    const sqlInsert = "SELECT * FROM Transactions WHERE Transaction_ID = ?";
    db.query(sqlInsert, [req.params.transactionID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/transactions/:payeeID', (req, res) => {
    const sqlInsert = "SELECT * FROM Transactions WHERE Payee_ID = ?";
    db.query(sqlInsert, [req.params.payeeID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/transactions/vendor', (req, res) => {
    const sqlInsert = "SELECT * FROM Transactions WHERE Is_vendor_purchase = 1";
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

app.post('/api/transactions', (req, res) => {
    const payeeID = req.body.payeeID;
    const price = req.body.price;
    const date = req.body.date;
    const time = req.body.time;
    const isVendorPurchase = req.body.isVendorPurchase;

    const sqlInsert = "INSERT INTO Transactions (Payee_ID, Price, Date, Time, Is_vendor_purchase) OUTPUT Inserted.Transaction_ID VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [payeeID, price, date, time, isVendorPurchase], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/transactions/:transactionID', (req, res) => {
    const sqlInsert = "DELETE FROM Transactions WHERE Transaction_ID = ?";
    db.query(sqlInsert, [req.params.transactionID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//PUBLIC_EVENTS_PAID_FOR TABLE API COMMANDS
app.get('/api/event/public', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Public_Events_Paid_For";
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

app.get('/api/event/public/:eventID', (req, res) => {
    const sqlInsert = "SELECT COUNT(*) FROM Public_Events_Paid_For WHERE Event_ID =  ?";
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

app.get('/event/public/user/:userID', (req, res) => {
    const sqlInsert = "SELECT Event_ID FROM Public_Events_Paid_For WHERE Owner_ID = ?";
    db.query(sqlInsert, [req.params.userID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/event/public/:eventID', (req, res) => {
    const eventID = req.params.eventID;
    const transactionID = req.body.transactionID;
    const ownerID = req.body.ownerID;

    const sqlInsert = "INSERT INTO Public_Events_Paid_For (Event_ID, Transaction_ID, Owner_ID) VALUES (?, ?, ?)";
    db.query(sqlInsert, [eventID, transactionID, ownerID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/public/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Public_Events_Paid_For WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

app.delete('/api/event/public/user/:ownerID', (req, res) => {
    const sqlInsert = "DELETE FROM Public_Events_Paid_For WHERE Owner_ID = ?";
    db.query(sqlInsert, [req.params.ownerID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//RECEIPT TABLE API COMMANDS
app.get('/api/receipt/:receiptID', (req, res) => {
    const sqlInsert = "SELECT * FROM Receipt WHERE Receipt_ID = ?";
    db.query(sqlInsert, [req.params.receiptID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/receipt/transaction/:transactionID', (req, res) => {
    const sqlInsert = "SELECT * FROM Receipt WHERE Transaction_ID = ?";
    db.query(sqlInsert, [req.params.transactionID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/receipt/ticket/:ticketID', (req, res) => {
    const sqlInsert = "SELECT * FROM Receipt WHERE Ticket_ID = ?";
    db.query(sqlInsert, [req.params.ticketID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/receipt/account/:accountID', (req, res) => {
    const sqlInsert = "SELECT * FROM Receipt WHERE Account_ID = ?";
    db.query(sqlInsert, [req.params.accountID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/receipt', (req, res) => {
    const message = req.body.message;
    const transactionID = req.body.transactionID;
    const ticketID = req.body.ticketID;
    const accountID = req.body.accountID;

    const sqlInsert = "INSERT INTO Receipt (Message, Transaction_ID, Ticket_ID, Account_ID) OUTPUT Inserted.Receipt_ID VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [message, transactionID, ticketID, accountID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/receipt/:receiptID', (req, res) => {
    const sqlInsert = "DELETE FROM Receipt WHERE Receipt_ID = ?";
    db.query(sqlInsert, [req.params.receiptID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//TICKET TABLE API COMMANDS
app.get('/api/ticket/:ticketID', (req, res) => {
    const sqlInsert = "SELECT * FROM Ticket WHERE Ticket_ID = ?";
    db.query(sqlInsert, [req.params.ticketID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/ticket/owner/:ownerID', (req, res) => {
    const sqlInsert = "SELECT * FROM Ticket WHERE owner_id = ?";
    db.query(sqlInsert, [req.params.ownerID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/ticket/event/:eventID', (req, res) => {
    const sqlInsert = "SELECT * FROM Ticket WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/ticket/tranasction/:transactionID', (req, res) => {
    const sqlInsert = "SELECT * FROM Ticket WHERE Transaction_ID = ?";
    db.query(sqlInsert, [req.params.transactionID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/ticket', (req, res) => {
    const owner_id = req.body.owner_id;
    const eventID = req.body.eventID;
    const eventDate = req.body.eventDate;
    const eventLocation = req.body.eventLocation;
    const transactionID = req.body.transactionID;

    const sqlInsert = "INSERT INTO Ticket (owner_id, Event_ID, Event_Date, Event_Location, Transaction_ID) OUTPUT Inserted.Ticket_ID VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [owner_id, eventID, eventDate, eventLocation, transactionID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/ticket/:ticketID', (req, res) => {
    const sqlInsert = "DELETE FROM Ticket WHERE Ticket_ID  = ?";
    db.query(sqlInsert, [req.params.ticketID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});


//TICKET_AVAILABLE TABLE API COMMANDS
app.get('/api/ticket/info/:eventID', (req, res) => {
    const sqlInsert = "SELECT * FROM Ticket_Available WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/ticket/remaining/:eventID', (req, res) => {
    const sqlInsert = "SELECT Tickets_Remaining FROM Ticket_Available WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/ticket/info', (req, res) => {
    const eventID = req.body.eventID;
    const eventDate = req.body.eventDate;
    const eventLocation = req.body.eventLocation;
    const ticketsRemaining = req.body.ticketsRemaining;

    const sqlInsert = "INSERT INTO Ticket_Available (Event_ID, Event_Date, Event_Location, Tickets_Remaining) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [eventID, eventDate, eventLocation, ticketsRemaining], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.put('/api/ticket/info/:eventID', (req, res) => {
    const eventID = req.params.eventID;
    const eventDate = req.body.eventDate;
    const eventLocation = req.body.eventLocation;
    const ticketsRemaining = req.body.ticketsRemaining;

    const sqlInsert = "UPDATE Ticket_Available SET Event_ID = ?, Event_Date = ?, Event_Location= ?, Tickets_Remaining = ? WHERE Event_ID = ?";
    db.query(sqlInsert, [eventID, eventDate, eventLocation, ticketsRemaining, eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/ticket/info/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM Ticket_Available WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//USER_INVITES TABLE API COMMANDS
app.get('/api/invites/:userID', (req, res) => {
    const sqlInsert = "SELECT ID, Is_trip_invite FROM User_Invites WHERE User_ID1 = ? OR User_ID2 = ?";
    db.query(sqlInsert, [req.params.userID, req.params.userID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/invites/events/:eventID', (req, res) => {
    const sqlInsert = "SELECT User_ID2 FROM User_Invites WHERE ID = ? AND Is_trip_invite = 0";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/invites/trip/:tripID', (req, res) => {
    const sqlInsert = "SELECT User_ID2 FROM User_Invites WHERE ID = ? AND Is_trip_invite = 1";
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

app.post('/api/invites', (req, res) => {
    const userID1 = req.body.userID1;
    const userID2 = req.body.userID2;
    const eventID = req.body.eventID;
    const isTripInvites = req.body.isTripInvites;

    const sqlInsert = "INSERT INTO User_Invites (User_ID1, User_ID2, ID, Is_trip_invites) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [userID1, userID2, eventID, isTripInvites], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/invites/:userID1/:userID2', (req, res) => {
    const sqlInsert = "DELETE FROM User_Invites WHERE User_ID1 = ? AND User_ID2 = ?";
    db.query(sqlInsert, [req.params.userID1, req.params.userID2], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

app.delete('/api/invites/trip/:tripID', (req, res) => {
    const sqlInsert = "DELETE FROM User_Invites WHERE ID = ? AND Is_trip_invite = 1";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

app.delete('/api/invites/event/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM User_Invites WHERE ID = ? AND Is_trip_invite = 0";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//TEMPORARY_USER TABLE API COMMANDS
app.get('/api/tempuser', (req, res) => {
    const sqlInsert = "SELECT * FROM Temporary_User";
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

app.post('/api/tempuser', (req, res) => {
    const displayName = req.body.displayName;

    const sqlInsert = "INSERT INTO Temporary_User (Display_Name) OUTPUT Inserted.User_ID VALUES (?, ?)";
    db.query(sqlInsert, [displayName], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/tempuser/:displayName/:userID', (req, res) => {
    const sqlInsert = "DELETE FROM Temporary_User WHERE Display_Name = ? AND User_ID = ?";
    db.query(sqlInsert, [req.params.displayName, req.params.userID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//TEMORARYUSER_EVENT_CANVIEW TABLE API COMMANDS
app.get('/api/tempuser/view/:eventID', (req, res) => {
    const sqlInsert = "SELECT Display_Name FROM TemporaryUser_Event_CanView WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.post('/api/tempuser/view/:eventID/:displayName', (req, res) => {

    const sqlInsert = "INSERT INTO TemporaryUser_Event_CanView (Display_Name, Event_ID) VALUES (?, ?)";
    db.query(sqlInsert, [req.body.eventID, req.body.displayName], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/tempuser/view/:eventID/:displayName', (req, res) => {
    const sqlInsert = "DELETE FROM TemporaryUser_Event_CanView  WHERE Display_Name = ? AND Event_ID = ?";
    db.query(sqlInsert, [req.params.displayName, req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

app.delete('/api/tempuser/view/:eventID', (req, res) => {
    const sqlInsert = "DELETE FROM TemporaryUser_Event_CanView WHERE Event_ID = ?";
    db.query(sqlInsert, [req.params.eventID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
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

app.get('/api/vehicle/type/:type', (req, res) => {
    const sqlInsert = "SELECT Vehicle_ID FROM Vehicle WHERE Type = ?";
    db.query(sqlInsert, [req.params.type], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.get('/api/vehicle/:vehicleID', (req, res) => {
    const sqlInsert = "SELECT * FROM Vehicle WHERE Vehicle_ID = ?";
    db.query(sqlInsert, [req.params.vehicleID], (err, result) => {
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
    const sqlInsert = "INSERT INTO Vehicle (Price_per_passenger, Type, Start_Location, End_Location, Duration_of_use, Land, Water, Air) OUTPUT Inserted.Vehicle_ID VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [req.body.pricePerPassenger, req.body.type, req.body.startLocation, req.body.endLocation, req.body.durationOfUse, req.body.land, req.body.water, req.body.air], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.put('/api/vehicle/:vehicleID', (req, res) => {
    const sqlInsert = "UPDATE Vehicle SET Price_per_passenger = ?, Type = ?, Start_Location = ?, End_Location = ?, Duration_of_use = ?, Land = ?, Water = ?, Air = ? WHERE Vehicle_ID = ?";
    db.query(sqlInsert, [req.body.pricePerPassenger, req.body.type, req.body.startLocation, req.body.endLocation, req.body.durationOfUse, req.body.land, req.body.water, req.body.air, req.params.vehicleID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/vehicle/:vehicleID', (req, res) => {
    const sqlInsert = "DELETE FROM Vehicle WHERE Vehicle = ?";
    db.query(sqlInsert, [req.params.vehicleID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

//VEHICLE_TRIP_USES TABLE API COMMANDS
app.get('/api/trip/:tripID/vehicle', (req, res) => {
    const sqlInsert = "SELECT Vehicle_ID FROM Vehicle_Trip_Uses WHERE Trip_ID = ?";
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

app.post('/api/trip/:tripID/vehicle/:vehicleID', (req, res) => {
    const sqlInsert = "INSERT INTO Vehicle_Trip_Uses (Vehicle_ID, Trip_ID) VALUES (?, ?)";
    db.query(sqlInsert, [req.params.tripID, req.params.vehicleID], (err, result) => {
        if (!err)
        {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

app.delete('/api/trip/:tripID/vehicle/:vehicleID', (req, res) => {
    const sqlInsert = "DELETE FROM Vehicle_Trip_Uses WHERE Vehicle_ID = ? AND Trip_ID = ?";
    db.query(sqlInsert, [req.params.vehicleID, req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});

app.delete('/api/trip/:tripID/vehicle', (req, res) => {
    const sqlInsert = "DELETE FROM Vehicle_Trip_Uses WHERE Trip_ID = ?";
    db.query(sqlInsert, [req.params.tripID], (err, result) => {
        if (!err)
        {
            console.log("Successfully deleted");
        }
        else
            console.log(err);
    });
});