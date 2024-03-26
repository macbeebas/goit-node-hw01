const { nanoid } = require("nanoid");

function poo(iter) {
  for (let i = 0; i < iter; i++) {
    console.log();
  }
}

const fs = require("fs").promises;
const fsSync = require("fs");

const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const contactsOrgPath = path.join(__dirname, "./db/contacts-origin.json");

function preventFile() {
  try {
    const orgFile = fsSync.readFileSync(contactsOrgPath);
    return fsSync.writeFileSync(contactsPath, orgFile, "utf-8");
  } catch (error) {
    return console.log("ERROR 22:", error.message);
  }
}

async function listContacts() {
  // "node index.js --action list"
  preventFile();
  poo(1);
  console.log("Function 'listContacts'");
  try {
    const contacts = await fs.readFile(contactsPath);
    poo(1);
    console.log("Table of Contacts");
    return console.table(JSON.parse(contacts.toString()));
  } catch (error) {
    return console.log("ERROR 37:", error.message);
  }
}

async function getContactById(contactId) {
  // "node index.js --action get --id 05olLMgyVQdWRwgKfg5J6"
  preventFile();
  poo(1);
  console.log("Function 'getContactById' with param 'contactId': ", contactId);
  try {
    const contacts = await fs.readFile(contactsPath);
    const contact = JSON.parse(contacts.toString()).find(
      (c) => c.id === contactId
    );
    if (contact) {
      poo(1);
      console.log("Contact found");
      return console.table(contact);
    }
    return console.log(`I can't find contact with id:${contactId}`);
  } catch (error) {
    return console.error("ERROR 58:", error.message);
  }
}

async function removeContactById(contactId) {
  // node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
  preventFile();
  poo(1);
  console.log(
    "Function 'removeContact' and value of param 'contactId': ",
    contactId
  );
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts.toString());
    const indexOfContact = parsedContacts.findIndex((i) => i.id === contactId);
    if (indexOfContact > 0) {
      poo(1);
      console.log("Table of Contacts");
      console.table(parsedContacts);
      const contactToRemove = parsedContacts.splice(indexOfContact, 1);
      poo(1);
      console.log(
        `Contact with id: ${contactId} was found (index: ${indexOfContact}) and removed`
      );
      console.log(contactToRemove);
      poo(1);
      console.log("Table of Contacts right after removing the entry");
      console.table(parsedContacts);
      const parsedContactsJSON = JSON.stringify(parsedContacts, null, 2);
      try {
        await fs.writeFile(contactsPath, parsedContactsJSON);
      } catch (error) {
        return console.log("ERROR 91:", error.message);
      }
      return;
    }
    return console.log(`I can't find contact with id: ${contactId}`);
  } catch (error) {
    return console.log("ERROR 97:", error.message);
  }
}

async function addContact(name, email, phone) {
  // node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
  preventFile();
  poo(1);
  console.log(
    "Function 'addContact' and value of params 'name/email/phone': ",
    name,
    "/",
    email,
    "/",
    phone
  );

  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts.toString());
    poo(1);
    console.log("Table of Contacts before action 'add'");
    console.table(parsedContacts);
    const contactToAdd = {
      id: nanoid(),
      name: name,
      email: email,
      phone: phone,
    };
    poo(1);
    console.log("Contact to add:", contactToAdd);
    parsedContacts.push(contactToAdd);
    poo(1);
    console.log("Table of Contacts after adding the entry");
    console.table(parsedContacts);
    const parsedContactsJSON = JSON.stringify(parsedContacts, null, 2);
    try {
      await fs.writeFile(contactsPath, parsedContactsJSON);
    } catch (error) {
      return console.log("ERROR 136:", error.message);
    }
  } catch (error) {
    return console.log("ERROR 139:", error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContactById,
  addContact,
};
