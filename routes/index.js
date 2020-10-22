var express = require('express');
var router  = express.Router();


router.get("/", (req, res) => {
    res.redirect("/index");
})

router.get("/index", (req, res) => {
    res.render("index");
})

router.get("/contacts", (req, res)=>{
    res.render("contacts");
})

router.get("/pricing", (req, res)=>{
    res.render("pricing");
})

router.get("/gallery", (req, res)=>{
    res.render("gallery");
})

module.exports = router;
