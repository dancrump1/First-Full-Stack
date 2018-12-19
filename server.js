var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    database : 'guestbook_db'
  });

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Routing to home page
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "public/guestbook.html"));
    var userName = req.body.
    nameHolder;
    var userMessage = req.body.messageHolder;
    var publicPrivate = req.body.publicPrivate;
    console.log(req.body);
    
    //Adds guest to database
    connection.query('INSERT INTO guestbook(name, message, IsPrivate) VALUES (?,?,?)', [
        userName, userMessage, publicPrivate
    ])
});


app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})

connection.connect();