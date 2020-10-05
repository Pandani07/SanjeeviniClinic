var express = require("express");
var PORT    = process.env.PORT || 3000;

var indexRoutes = require("./routes/index");

var app     = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(indexRoutes);

app.listen(PORT, () => {
    console.log("Connected!");
})