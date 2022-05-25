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
        res.status(400).send(e) // Unsuccessful signup (wrong format password, etc)
    }
});

module.exports = router;