require('dotenv').config();
const express = require("express");
const app = express(); //app is an object
app.use(express.static("public"));
const methodOverride = require("method-override");

//after app has been defined, use methodOverride.
//We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: true }));

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const verifyToken = (req, res, next) => {
    console.log("Verify Token")
    let token = req.cookies.jwt; // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser; // ADDS A .user PROP TO REQ FOR TOKEN USER
      console.log(decodedUser);
  
      next();
    });
};
  

// ADD THE VERIFY TOKEN MIDDLEWARE WHERE WE WANT AUTHENTICATION
app.use("/patients", verifyToken, require("./controllers/patientsController.js"));
app.use("/doctors", require("./controllers/doctorsController.js"));
app.use("/auth", require("./controllers/authController.js"));

//Sequelize GET route
app.get("/", (req, res) => {
    res.render("patients/index.ejs"); 
});

app.listen(process.env.PORT, () => {
    console.log("I am listening");
});