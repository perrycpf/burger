let express = require("express");
let bodyParser = require("body-parser");
let mysql = require("mysql");
let path = require("path");

let app = express();

let PORT = process.env.PORT || 3000;

// Built-in middleware funciton to server static files such as images and CSS files
app.use(express.static('public'));

// Built-in middelware function for parsing incoming request bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let exphbs = require("express-handlebars");

// Prepare express app to use layout handlerbars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Starts server listening on PORT
app.listen(PORT, ()=> {
    console.log(`Eat Da Burger app is listening on PORT: ${PORT}`);
});
