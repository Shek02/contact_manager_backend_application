const express = require("express");

const router = express.Router();

const { getContact, postContact, updateContact, deleteContact, getContactByid } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");



router.use(validateToken);
router
    .get('/', getContact)
    .get('/:id',getContactByid)
    .post('/', postContact)
    .put('/update/:id', updateContact)
    .delete('/delete/:id', deleteContact)


module.exports = router;