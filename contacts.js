const fs = request("fs").promises
const path = request("path").promises
const { resolve } = require("path")

const contactsPath = path.join(__dirname, "db", "contacts.json")
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

async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath, (err, data) => {
            if (err) {
                console.log(err.message)
            }
        });
        const result = JSON.parse(data);
        return console.log(result.find(el => +el.id === +contactId));
    } catch (error) {
        console.log(error);
    }
}

function removeContact(contactId) {
    // ...твой код
}

async function addContact(id, name, email, phone) {
    fs.readFile(contactsPath, { encoding: 'utf8' }, (err, data) => {
        if (err) { console.log(err.message) }
        const contacts = JSON.parse(data)
        const contactsNew = { id, name, email, phone }
        const contactsList = JSON.stringify([contactsNew, ...contacts], null, '\t')
        fs.writeFile(contactsPath, contactsList, (err) => { if (err) console.error(err) })
    })
}
try {
    addContact()
} catch (error) {
    next(error)
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}