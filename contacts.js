// contacts.js

// DONE - Zaimportuj moduły 'fs' i 'path' do pracy z systemem plików.
// DONE - Utwórz zmienną 'contactsPath' i zapisz w niej ścieżkę do pliku 'contacts.json'.
// DONE - Do utworzenia ścieżki wykorzystaj metody modułu 'path'.
// - Dodaj funkcję do pracy ze zbiorem kontaktów.
// - W funcjach wykorzystaj moduł 'fs' oraz jego metody 'readFile()' i 'writeFile()'.
// DONE - Zrób eksport utworzonych funkcji przez 'module.exports'.

/*
 * DONE - Skomentuj i zapisz wartość
 * const contactsPath = ;
 */
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
    return console.log("ERROR 37:", error.message);
  }
}

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  // ...twój kod
  preventFile();

  console.log('function "listContacts"');
  try {
    const contacts = await fs.readFile(contactsPath);
    return console.table(JSON.parse(contacts.toString()));
  } catch (error) {
    return console.log("ERROR 49:", error.message);
  }
}

async function getContactById(contactId) {
  // ...twój kod
  preventFile();

  console.log(
    'function "getContactById" and value of param "contactId": ',
    contactId
  );
  try {
    const contacts = await fs.readFile(contactsPath);
    const contact = JSON.parse(contacts.toString()).find(
      (c) => c.id === contactId
    );
    if (contact) {
      return console.table(contact);
    }
    return console.log(`I can't find contact with id:${contactId}`);
  } catch (error) {
    return console.error("ERROR 69:", error.message);
  }
}

async function removeContactById(contactId) {
  // ...twój kod
  preventFile();
  console.log(
    'Function "removeContact" and value of param "contactId": ',
    contactId
  );
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts.toString());
    const indexOfContact = parsedContacts.findIndex((i) => i.id === contactId);
    if (indexOfContact > 0) {
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
        return console.log("ERROR 103:", error.message);
      }
      return;
    }
    return console.log(`I can't find contact with id: ${contactId}`);
  } catch (error) {
    return console.log("ERROR 109:", error.message);
  }
}

function addContact(name, email, phone) {
  // ...twój kod
  console.log(
    'function "addContact" and value of params "name", "email", "phone": ',
    name,
    email,
    phone
  );
}

module.exports = {
  listContacts,
  getContactById,
  removeContactById,
  addContact,
};
