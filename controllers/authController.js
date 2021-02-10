const express = require("express");
const router = express.Router();

const Patient = require('../models').Patient;

const bcrypt = require('bcryptjs');

require('dotenv').config()
const jwt = require('jsonwebtoken');

// GET SIGNUP PATIENT FORM
router.get("/signup", (req, res) => {
    res.render("patients/signup.ejs");
});

// AFTER PATIENT SIGNUP SEND PATIENT TO PROFILE PAGE
/*router.post("/", (req, res) => {   
    Patient.create(req.body)
        .then(newPatient => {            
        res.redirect(`/patients/profile/${newPatient.id}`);
    })
})*/
router.post("/", (req, res) => {  
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);
    
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
          if (err) return res.status(500).json(err);
          req.body.password = hashedPwd;
     
            Patient.create(req.body)
                .then(newPatient => {  
                const token = jwt.sign(
                    {
                        username: newPatient.username,
                        id: newPatient.id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "30 days",
                    }
                    );
                    console.log(token);
                res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN          
                res.redirect(`/patients/profile/${newPatient.id}`);
            })
            .catch((err) => {
                console.log(err);
                res.send(`err ${err}`);
            });
        })
    })
})

// GET PATIENT LOGIN
router.get("/login", (req, res) => {
    res.render("patients/login.ejs");
});

// POST PATIENT LOGIN SEND PATIENT TO PROFILE PAGE
/*router.post("/login", (req, res) => {    
    Patient.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    }).then((foundPatient) => {
        res.redirect(`/patients/profile/${foundPatient.id}`);         
    });
})*/

router.post("/login", (req, res) => {    
    Patient.findOne({
      where: {
        username: req.body.username,
      },
    }).then(foundPatient => {
        if (foundPatient) {
            bcrypt.compare(req.body.password, foundPatient.password, (err, match) => {
                if (match) {
                    const token = jwt.sign(
                        {
                            username: foundPatient.username,
                            id: foundPatient.id
                        },
                        process.env.JWT_SECRET,
                        {
                          expiresIn: "30 days"
                        },
                    );
                    console.log(token);
                    res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
                    res.redirect(`/patients/profile/${foundPatient.id}`);  
                }else{
                    return res.sendStatus(400);
                } 
            })  
        }    
    });
})

module.exports = router;