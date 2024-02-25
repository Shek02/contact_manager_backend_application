const express = require('express')

const router = express.Router();
const { userRegister, userLogin, userCurrent } = require("../controllers/userController");
const validateToken = require('../middleware/validateTokenHandler');

router.post('/register', userRegister)
    .post('/login', userLogin)
    .get('/current',validateToken, userCurrent)

module.exports = router