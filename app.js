// ? Importing required libraries
var express = require("express");
var PORT    = process.env.PORT || 3000;

// ? Importing routes
var indexRoutes = require("./routes/index");

// ? Adding required plug ins
var app     = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(indexRoutes);

// ? Run App
app.listen(PORT, () => {
    console.log("Connected!");
})