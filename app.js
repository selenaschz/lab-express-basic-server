// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const port = 5005;


//--CREATE EXPRESS APP--
const app = express();


//--MIDDLEWARE--
// Static files
app.use(express.static("public"))
// Json Middleware
app.use(express.json())
// Request logger (morgan)
app.use(morgan("dev"));




//--ROUTES--
// Iteration 3 - GET - Home Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})


//--START THE SERVER--
app.listen(port, () => {
    console.log(`Run the server. Port: ${port}`);
})
