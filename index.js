const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: refaktor
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log('Action "list"');
      contacts.listContacts();
      break;

    case "get":
      // ... id
      console.log('Action "get" with param "id": ', id);
      contacts.getContactById(id);
      break;

    case "add":
      // ... name email phone
      console.log(
        'Action "add" with params "name email phone": ',
        name,
        email,
        phone
      );
      break;

    case "remove":
      // ... id
      console.log('Action "remove" with param "id": ', id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
