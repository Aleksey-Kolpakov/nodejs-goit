const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fsPromises = fs.promises;
const contactsPath = path.join(__dirname, "/db/contacts.json");

async function getlistContacts() {
  try {
    const listContacts = await fsPromises.readFile(contactsPath, "utf-8");
    return JSON.parse(listContacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contactList = await getlistContacts();
    const contact = contactList.find(contact => String(contact.id) === String(contactId));
    return contact;
  } catch (error) {
    console.log(error);
  }
}
async function removeContact(contactId) {
  try {
    const contactList = await getlistContacts();
    const updatedContactList = contactList.filter(
      (contact) => String(contact.id) !== String(contactId)
    );
    console.log(updatedContactList);
    fs.writeFile(contactsPath, JSON.stringify(updatedContactList), (err) => {
      if (err) throw err;
      console.log("Write file finished successfully");
    });
  } catch (error) {
    console.log(error);
  }
}
async function addContact(name, email, phone) {
  try {
    const contactList = await getlistContacts();
    const newContact = { id: uuidv4(), name, email, phone };
    const updatedContactList = [...contactList, newContact];
    console.log(updatedContactList);
    fs.writeFile(contactsPath, JSON.stringify(updatedContactList), (err) => {
      if (err) throw err;
      console.log("Write file finished successfully");
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getlistContacts,
  getContactById,
  removeContact,
  addContact,
};
