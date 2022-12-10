const express = require("express")
const router = express.Router()
const Contact = require("../models/Contact")
//localhost:5000/contacts/test
//@ path
// test route
//private/public
router.get("/test", (req, res) => {
  res.send("tested")
})
//add contact
//localhost:5000/contacts/addContacts
router.post("/addContacts", (req, res) => {
  const { name, email, phone } = req.body
  const newContact = new Contact({
    name,
    phone,
    email,
  })
  newContact
    .save()
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err))
})
//Get_all_Contact
//localhost: 5000/contacts/all
router.get("/contactList", (req, res) => {
  Contact.find()
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err))
})
//delete contact
//localhost:5000/contacts//deleteContact/:_id
router.delete("/deleteContact/:_id", (req, res) => {
  const { _id } = req.params
  Contact.findOneAndDelete({ _id })
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err))
})
//Get_Contact_ByID
//localhost:5000/contacts/:_id
router.get("/:_id", (req, res) => {
  const { _id } = req.params
  Contact.findOne({ _id })
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err))
})
//edit_Contact
router.put("/editContact/:_id", (req, res) => {
  const { _id } = req.params
  const { name, email, phone } = req.body
  Contact.findOneAndUpdate({ _id }, { $set: { name, email, phone } })
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err))
})
module.exports = router
