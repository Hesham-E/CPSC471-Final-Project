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




app.listen(3001, () => {
    console.log("Running on port 3001");
});