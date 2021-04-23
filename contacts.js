import path from "path";
import fs from "fs";
const contactsPath = path.extname('contacts.json');
console.log(contactsPath);

function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}