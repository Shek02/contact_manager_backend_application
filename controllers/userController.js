const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");





// @desc get all contact
// @route Get /user/register
// @public
const userRegister = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    if (!username, !email, !password) {
        res.status(400);
        throw new Error("all fildse are mendytory");
    }

    const userAviailable = await UserModel.findOne({ email })

    if (userAviailable) {
        throw new Error("user all eady abaleble");
    }

    const hashPassworde = await bcrypt.hash(password, 10)

    const user = await UserModel.create({
        username,
        email,
        password: hashPassworde,
    })

    console.log(user);
    if (user) {
        res.status(201).json({
            _id: user.id, email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Userdata is nate valed')
    }

});

// @desc get all contact
// @route Get /user/login
// @public
const userLogin = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    if (!email, !password) {
        res.status(400)
        throw new Error("all the filde are mendytory")
    }

    const user = await UserModel.findOne({ email })

    //comapre password

    if (user && bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN,
            {
                expiresIn: "1m"
            })
        res.status(200).json({ accessToken })
    }else{
        res.status(401);
        throw new Error('email or password nont valid')
    }
    res.json({
        massage: "login the user"
    });
});

// @desc get all contact
// @route Get /user/current
// @public
const userCurrent = asyncHandler(async (req, res) => {
    res.json({
        massage: "currentuser info"
    });

});

module.exports = { userRegister, userLogin, userCurrent }