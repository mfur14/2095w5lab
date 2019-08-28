let express = require('express'); // $npm install express
let app = express();
// let bodyParser = require('body-parser'); // $npm install body-parser // need to parse the html body content 
let db = []; // create database

app.use(express.urlencoded({extended:false})); // express needs to know that we need body-parser
app.engine("html", require('ejs').renderFile); // defines express to use 'ejs' whenever HTML is required <-declaration
app.set("view engine", "html"); // tells express to use 'ejs' whenever HTML is required <- sets

app.use(express.static('images')); // static images directory <-- no installation required just a directory 
app.use(express.static('css'));  // static css directory

let viewsPath =__dirname + "/views/";


app.get('/', function(req, res){
    res.sendFile(viewsPath+"index.html");
});


app.get('/addTaskw5', function(req, res){
    res.sendFile(viewsPath+"newTask.html");
});

app.get('/listTasksw5', function(req, res){ // GET method for /listTasksw5
    //console.log(req.body);
    res.render(viewsPath + "taskList.html",{
        tasks: db
    });
});

app.post('/listTasksw5', function(req, res){ // POST method for /listTasksw5
    //console.log(req.body);
    db.push(req.body);
    res.render(viewsPath + "taskList.html", {
        tasks: db  // defining the database where the data is stored
    });
});

app.listen(8888);
