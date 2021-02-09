const express = require("express");
const router = express.Router();

const Patient = require('../models').Patient;

// GET PATIENTS PROFILE
router.get("/profile/:id", (req, res) => {
    console.log("Display patient reached ")
    Patient.findByPk(req.params.id).then((patientProfile) => {
        console.log("Patient Found")
        res.render("patients/profile.ejs", {
            patient: patientProfile
        });
    });   
});

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
    res.render("patients/signup.ejs");
});

// GET LOGIN
router.get("/login", (req, res) => {
    res.render("patients/login.ejs");
});

// AFTER SUCCESSFULL LOGIN SEND PATIENT TO PROFILE PAGE
router.post("/login", (req, res) => {    
    Patient.findOne({
      where: {
        username: req.body.username,
      },
    }).then((foundPatient) => {
        console.log("PAtient found, before redirect to profile")
        res.redirect(`/patients/profile/${foundPatient.id}`);
         
    });
})


// AFTER SUCCESSFULL REGISTRATION SEND PATIENT TO PROFILE PAGE
router.post("/", (req, res) => {
    console.log("Calling create patient")
    
    Patient.create(req.body)
        .then(newPatient => {            
        res.redirect(`/patients/profile/${newPatient.id}`);
    })
})

// EDIT PROFILE
router.put("/profile/:id", (req, res) => {
    Patient.update(req.body, {
      where: { id: req.params.id },
      returning: true
    }).then((patient) => res.redirect(`/patients/profile/${req.params.id}`));
});
  
  // DELETE USER
router.delete("/:id", (req, res) => {
    Patient.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/"); //redirect back to index route
    });
});

module.exports = router;