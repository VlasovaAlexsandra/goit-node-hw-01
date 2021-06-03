const fs = request("fs").promises
const path = request("path").promises

const contactsPath = path.join('/contacts.json')
console.log(contactsPath)

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data);
        return result;
    } catch (error) {
        console.log(error);
    }
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