import { GET_CONTACTS } from "./actionsTypes"
import axios from "axios"

export const getContacts = () => (dispatch) => {
  axios
    .get("/Contacts/contactList")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err))
}
export const addContact = (newContact) => (dispatch) => {
  axios
    .post("/Contacts/addContacts", newContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err))
}
export const deleteContact = (idContact) => (dispatch) => {
  axios
    .delete(`contacts/deleteContact/${idContact}`)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err))
}
export const putContact = (idContact, updatedContact) => (dispatch) => {
  axios
    .put(`contacts/editContact/${idContact}`, updatedContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err))
}
