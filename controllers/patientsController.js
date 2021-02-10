const express = require("express");
const router = express.Router();

const Patient = require('../models').Patient;
const Doctor = require('../models').Doctor;
const DoctorPatient = require('../models').DoctorPatient;

// GET PATIENTS PROFILE ; DISPLAY ASSOCIATED DOCTORS
router.get("/profile/:id", (req, res) => {
    Patient.findByPk(req.params.id, {
        include: [{model: Doctor}]
    }).then((patientProfile) => {
        Doctor.findAll().then(allDocs =>{
            res.render("patients/profile.ejs", {
                patient: patientProfile,
                allDocs: allDocs
            });
        });   
    })
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
        res.redirect(`/patients/profile/${foundPatient.id}`);
         
    });
})

// AFTER SUCCESSFULL REGISTRATION SEND PATIENT TO PROFILE PAGE
router.post("/", (req, res) => {   
    Patient.create(req.body)
        .then(newPatient => {            
        res.redirect(`/patients/profile/${newPatient.id}`);
    })
})

// EDIT PROFILE Create a new record on the join table
router.put("/profile/:id", (req, res) => {
    console.log(req.body)
    Patient.update(req.body, {
      where: { id: req.params.id },
      returning: true
    }).then( patient =>{
        DoctorPatient.create(req.body)
        .then(patient => {
            res.redirect(`/patients/profile/${req.params.id}`)
        })        
    })
});
  
  // DELETE USER
router.delete("/:id", (req, res) => {
    Patient.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/"); //redirect back to index route
    });
});

module.exports = router;