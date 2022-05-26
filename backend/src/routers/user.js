// Define routes for user-related requests

const express = require('express');
const User = require('../models/user');
const router = new express.Router();


// Create user
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        // const token = await user.generateAuthToken();
        res.status(201).send(user); // check response in Postman
    } catch(e) {
        res.status(400).send(e); // Unsuccessful signup (wrong format password, etc)
    }
});

router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send();
    }
})

// Read ALL users (remove later, currently only for dev purposes)
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});

        if (!users) { // No users found
            return res.status(404).send();
        }
        res.send(users);
    } catch (e) {
        res.status(500).send(); // server error
    }
})

module.exports = router;