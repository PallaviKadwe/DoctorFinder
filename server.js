const express = require("express");
const app = express(); //app is an object
app.use(express.static("public"));
const methodOverride = require("method-override");

//after app has been defined, use methodOverride.
//We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: true }));

// controllers
app.use("/doctors", require("./controllers/doctorsController.js"));
app.use("/patients", require("./controllers/patientsController.js"));

//Sequelize GET route
app.get("/", (req, res) => {
    res.render("patients/index.ejs"); 
});

app.listen(3000, () => {
    console.log("I am listening");
});