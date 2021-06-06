//Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const session = require('express-session');
const bcrypt = require('bcrypt');

//Create a new user
router.get('/new', (req,res) =>{
    res.render('sessions/new.ejs')
    // req.session.anyProperty = "any value"
})

router.post('/', (req,res)=>{
    console.log(req.sessionID == true, req.session == true)
    User.find({"username": req.body.username}, (error, foundUser)=>{
        console.log(foundUser[0].password);
        console.log(req.body);
        const result = bcrypt.compareSync(`${req.body.password}`,`${foundUser[0].password}`)
        if (result) {  
            res.redirect('/room')
        } else {
            res.redirect('/sessions/new')
        }
        console.log(req.sessionID == true, req.session == true)
    })
})

router.get('/logout', (req, res)=>{
    req.session.destroy()
    res.redirect('/')
})

//export
module.exports = router;