const router = require("express").Router();
const App = require("../models/applications/applications.js")
const Shelter = require("../models/shelters/shelters.js")
const User = require('../models/users/users.js')

router.get('/', (req, res) => {
    App.getAll()
    .then(applications => {
        res.status(200).json(applications)
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})    })
})

router.get('/:id', validateApplicationId, (req, res) => {
   res.status(200).json(req.application)
})

router.get('/shelter/:id', validateShelterId ,(req, res) => {
    App.getByShelterId(req.params.id)
    .then(applications => {
        res.status(200).json(applications)
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})    })
})

router.get('/user/:id', validateUserId, (req, res) => {
    App.getByUserId(req.params.id)
    .then(applications => {
        res.status(200).json(applications)
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})    })
})

//middleware 

function validateApplicationId(req, res, next) {
    if(req.params.id && req.params.id !== "shelter" && req.params.id !== "user") {
        App.getById(req.params.id) 
        .then( application => {
            if(application) {
                req.application = application
                next();
            } else {
                res.status(404).json({message: "Application not found"})
            }
        })
    } else {
        const subRoute = req.params.id === "shelter" ? "shelter" : req.params.id === "user" ? "user" : null
        res.status(500).json({ message: `no ${subRoute} id provided`})
    }
}

function validateShelterId(req, res, next) {
    console.log(req.params.id)
    if(req.params.id) {
        Shelter.getById(req.params.id)
        .then( shelter => {
            if(shelter) {
                next();
            } else {
                res.status(404).json({ message: "No shelter by that  shelter id"})
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting valid shelter with application", error: error.toString()})    })
    } else {
        res.status(500).json({ message: "no shelter id", error: error.toString()})    
    }
}

function validateUserId(req, res, next) {
    if(req.params.id) {
        User.getUserById(req.params.id) 
        .then( user => {
            if(user) {
                next();
            } else {
                res.status(404).json({ message: "No user by that user id"})
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting valid shelter with application", error: error.toString()})    })
    }

}

module.exports = router;