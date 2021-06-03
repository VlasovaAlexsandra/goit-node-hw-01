import fs from "fs";
import path from "path";

const contactsPath = path.resolve('/contacts.json')
console.log(contactsPath)

function listContacts() {
    fs.readFile(contactsPath, (err, data) => {
        if (err) return console.error(err.message);
        console.table(JSON.parse(data.toString()));
    });
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

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}