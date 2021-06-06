//Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//Create a new user
router.get('/new', (req,res) =>{
    res.render('users/new.ejs')
})

//POST - new user
router.post('/', (req,res)=>{
    // User.create(req.body, (error, createdLog) => {
    //     res.redirect('/')
    // })
    const hash = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    const newUser = new User({
        username: req.body.username,
        password: hash,
        //password: req.body.password,
        messages: req.body.messages
    });
    newUser.save();
    console.log('new user:' + newUser);
    res.redirect('/')
})

//export
module.exports = router;