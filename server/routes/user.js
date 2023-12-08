const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController');

router.get('/', async (req, res) => {
    const users = await userController.getUsers();
    return res.send(users);
})

router.post('/', async (req, res) => {
    const response = await userController.saveUsers(req.body.users);
    return res.send(response);
})

module.exports = router;