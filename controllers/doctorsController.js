const express = require("express");
const speciality = require("../models/speciality");
const router = express.Router();

const Speciality = require('../models').Speciality;
const Doctor = require('../models').Doctor;

//Sequelize GET route
router.get("/", (req, res) => {

    Doctor.findAll().then((doctors) => {
      res.render("index.ejs", {
        doctors: doctors,
      });
    });
});

//Display page to register a doctor (This code snippet should be above show.ejs)
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Display a specific doctor
router.get("/:id", (req, res) => {
  Doctor.findByPk(req.params.id)
     /*{
    include : [{
        model: User,
        attributes: ['name']
      },
      {
        model: Season,
      },
    ],
    attributes: ['name', 'color', 'readyToEat']
    })*/
    .then((doctor) => {
      res.render('show.ejs', { doctor: doctor });
  });
});

// Edit of doctor details
router.put("/:id", (req, res) => {
  console.log("Before Update")
  Doctor.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((doctor) => {
    res.redirect("/doctors");
  });
});

// Register a doctor
router.post("/", (req, res) => {
  Doctor.create(req.body).then((newDoctor) => {
    res.redirect("/doctors");
  });
});


// Display doctor edit page
router.get("/:id/edit", function (req, res) {
  Doctor.findByPk(req.params.id).then((foundDoctor) => {
      res.render('edit.ejs', { doctor:foundDoctor});
    })    
});

// Delete the doctor
router.delete("/:id", (req, res) => {
  Doctor.destroy({ where: { id: req.params.id }}).then(() => {
    res.redirect('/doctors')
  });
});

module.exports = router;