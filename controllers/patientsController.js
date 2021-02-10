const express = require("express");
const router = express.Router();

const Patient = require('../models').Patient;
const Doctor = require('../models').Doctor;
const DoctorPatient = require('../models').DoctorPatient;

// GET PATIENTS PROFILE ; DISPLAY ASSOCIATED DOCTORS
router.get("/profile/:id", (req, res) => {
    // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
    if (req.user.id == req.params.id) {
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
    }else {
        // res.json("unauthorized");
        res.redirect("/");
    }
});

// EDIT PATIENT PROFILE Create a new record on the join table
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