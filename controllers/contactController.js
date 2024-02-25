const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


// @desc get all contact
// @route Get /contact
// @private
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id}) ;
    if(!contacts){
        res.status(404);
        throw new Error('contact non found')
    }
    res.status(200)
        .json(contacts)
});


// @desc get all contact
// @route Get /contact/:id
// @private
const getContactByid = asyncHandler(async (req, res) => {

    const contacts = await Contact.findById(req.params.id) ;
    console.log(contacts);
    if(!contacts){
        res.status(404);
        throw new Error('contact non found')
    }
    res.status(200)
        .json(contacts)
});


// @desc get all contact
// @route POST /contact
// @private
const postContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;


    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all filse are mendetory !")
    }
    

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    })
    res.status(200).json(contact)
});


// @desc get all contact
// @route PUT /contact/update/:id
// @private
const updateContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id) ;
    if(!contacts){
        res.status(404);
        throw new Error('contact non found')
    }
    if(contacts.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User can nat update dis contact")
    }


    const UpdatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200)
        .json(UpdatedContact)
});


// @desc get all contact
// @route DELETE /contact/delete/:id
// @private
const deleteContact = asyncHandler(async (req, res) => {

    const contacts = await Contact.findByIdAndDelete(req.params.id) ;
    if(!contacts){
        res.status(404);
        throw new Error('contact non found')
    }
    
    if(contacts.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User can nat delete dis contact")
    }
    res.status(200)
        .json({massage: "contact has been deleted"})
});

module.exports = { getContact, postContact, updateContact, deleteContact, getContactByid }