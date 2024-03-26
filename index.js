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

function poo(iter) {
  for (let i = 0; i < iter; i++) {
    console.log();
  }
}

// TODO: refaktor
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list": // DONE!
      poo(1);
      console.log('Action "list"');
      contacts.listContacts();
      break;

    case "get": // DONE!
      // ... id
      poo(1);
      console.log('Action "get" with param "id": ', id);
      contacts.getContactById(id);
      break;

    case "add":
      // ... name email phone
      poo(1);
      console.log(
        'Action "add" with params "name email phone": ',
        name,
        email,
        phone
      );
      break;

    case "remove": // DONE!
      // ... id
      poo(1);
      console.log('Action "remove" with param "id": ', id);
      contacts.removeContactById(id);
      for (let i = 0; i < 2; i++) {
        console.log();
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
