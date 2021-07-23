const express = require("express");
const path = require("path");

const app = express();

const expressHbs = require("express-handlebars");

const homeRouter = require("./routes/home");

const modulusHelpers = require("./helpers/hbs/modulus");
const blankSpaceHelpers = require("./helpers/hbs/blank space");
const lineBreakHelpers = require("./helpers/hbs/line break");
const completingHelpers = require("./helpers/hbs/completing");
const validateHelpers = require("./routes/home");
const infoHelpers = require("./routes/home");


app.engine(
  "hbs",
  expressHbs({
    helpers: {
    
      blankSpace: blankSpaceHelpers.BlankSpace,
      lineBreak: lineBreakHelpers.LineBreak,
      modulus: modulusHelpers.Modulus,
      completing: completingHelpers.Completing,
      validate: validateHelpers.Validate,
      info: infoHelpers.Info
    }
  })
);

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter.Router);

app.use("/", function(req,res,next){

  res.status(404).render("404", {layout: false});

});

app.listen(5001);