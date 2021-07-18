const express = require('express');
const app = express();
const path = require('path');
const handlebars  = require("express-handlebars")
const array = require("./routes/tabla-periodica")

app.use(express.static(path.join(__dirname,"public")));
app.engine("hbs",handlebars());
app.set("view engine","hbs")
app.set("views","views");


app.use("/", function (req, res, next) {

    res.render("index",{layout: false, array: array.array});

});

app.listen(5001);