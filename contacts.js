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

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  // ...twój kod
  console.log('function "listContacts"');
  try {
    const contacts = await fs.readFile(contactsPath);
    return console.table(JSON.parse(contacts.toString()));
  } catch (error) {
    return console.log(error.message);
  }
}

function getContactById(contactId) {
  // ...twój kod
  console.log(
    'function "getContactById" and value of param "contactId": ',
    contactId
  );
}

function removeContact(contactId) {
  // ...twój kod
  console.log(
    'function "removeContact" and value of param "contactId": ',
    contactId
  );
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
  removeContact,
  addContact,
};
