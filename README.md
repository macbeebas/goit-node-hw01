# Kurs (Course) [GoIT](https://goit.global/pl/courses/fullstack/): Fullstack Developer
# --- Node JS ---
## Zadanie zaliczeniowe (Homework)<br>Sekcja 1 (Section 1):<br>- Podstawy Node.js. Tworzenie aplikacji konsolowych
## Kroki (Tasks) <br>[ original link - [PL](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/) | [EN](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/) ]
|PL|EN|
|--|--|
|**Krok 1**|**Step 1​**|
|- Zainicjalizuj npm w projekcie.<br>- W root projektu utwórz plik|- Initialize npm in the project<br>- In the root of the project, create a file `index.js`|
|- Zainicjalizuj npm w projekcie.<br>- W root projektu utwórz plik `index.js`<br>- Ustaw pakiet [nodemon](https://www.npmjs.com/package/nodemon) jako zależność opracowywania (devDependencies).<br>- Do pliku `package.json` dodaj "skrypty" dla włączenia `index.js`<br>- Skrypt `start` który uruchamia `index.js` przy pomocy `node`<br>- Skrypt `start:dev` który uruchamia `index.js` przy pomocy `nodemon`|tut|
<hr>

- - [ ] redux
- - [ ] (for unchecked checkbox)
- - [x] (for checked checkbox)

##

## Polski (Polish) - 
----------------------------------------------------------------------------------------
[Przejdź do głównej zawartości](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/)
<hr>

![](Aspose.Words.6f10933b-6dbe-4ce9-894f-c89fe57ead33.001.png)[](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/)
### **Krok 1[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#krok-1 "Bezpośredni link do nagłówka")**
- Zainicjalizuj npm w projekcie.<br>- W root projektu utwórz plik index.js<br>- Ustaw pakiet [nodemon](https://www.npmjs.com/package/nodemon) jako zależność opracowywania (devDependencies).<br>- Do pliku package.json dodaj "skrypty" dla włączenia index.js<br>- Skrypt start który uruchamia index.js przy pomocy node<br>- Skrypt start:dev który uruchamia index.js przy pomocy nodemon
### **Krok 2[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#krok-2 "Bezpośredni link do nagłówka")**
W root projektu utwórz katalog `db`. Dla zapisywania kontaktów ściągnij i wykorzystaj plik [contacts.json](https://github.com/goitacademy/nodejs-homework/blob/master/homework-01/contacts.json), umieszczając go w folderze `db`.

W root projektu utwórz plik `contacts.js`.

Zaimportuj moduły `fs` i `path` do pracy z systemem plików. Utwórz zmienną `contactsPath` i zapisz w niej ścieżkę do pliku `contacts.json`. Do utworzenia ścieżki wykorzystaj metody modułu `path`. Dodaj funkcję do pracy ze zbiorem kontaktów. W funkcjach wykorzystaj moduł `fs` oraz jego metody `readFile()` i `writeFile()`. Zrób eksport utworzonych funkcji przez `module.exports`.

contacts.js

*/\**
` `*\* Skomentuj i zapisz wartość*
` `*\* const contactsPath = ;*
` `*\*/*

*// TODO: udokumentuj każdą funkcję*
function listContacts() {
`  `*// ...twój kod*
}

function getContactById(contactId) {
`  `*// ...twój kod*
}

function removeContact(contactId) {
`  `*// ...twój kod*
}

function addContact(name, email, phone) {
`  `*// ...twój kod*
}

Kopiuj
### **Krok 3[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#krok-3 "Bezpośredni link do nagłówka")**
Utwórz import modułu contacts.js w pliku index.js i sprawdź wydajność funkcji dla pracy z kontaktami.
### **Krok 4[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#krok-4 "Bezpośredni link do nagłówka")**
W pliku index.js importuje się pakiet yargs dla wygodnego parserowania argumentów wiersza poleceń. Wykorzystaj gotową funkcję invokeAction(), która otrzymuje typ wykonywanego działania i niezbędne argumenty. Funkcja wywołuje odpowiednią metodę z pliku contacts.js, przekazując mu niezbędne argumenty.

index.js

const argv = require("yargs").argv;

*// TODO: refaktor*
function invokeAction({ action, id, name, email, phone }) {
`  `switch (action) {
`    `case "list":
`      `*// ...*
`      `break;

`    `case "get":
`      `*// ... id*
`      `break;

`    `case "add":
`      `*// ... name email phone*
`      `break;

`    `case "remove":
`      `*// ... id*
`      `break;

`    `default:
`      `console.warn("\x1B[31m Unknown action type!");
`  `}
}

invokeAction(argv);

Kopiuj

Możesz wykorzystać moduł [commander](https://www.npmjs.com/package/commander) do parserowania argumentów wiersza poleceń. To popularniejsza alternatywa modułu yargs

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

*// TODO: refaktor*
function invokeAction({ action, id, name, email, phone }) {
`  `switch (action) {
`    `case "list":
`      `*// ...*
`      `break;

`    `case "get":
`      `*// ... id*
`      `break;

`    `case "add":
`      `*// ... name email phone*
`      `break;

`    `case "remove":
`      `*// ... id*
`      `break;

`    `default:
`      `console.warn("\x1B[31m Unknown action type!");
`  `}
}

invokeAction(argv);

Kopiuj
### **Krok 5[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#krok-5 "Bezpośredni link do nagłówka")**
Uruchom polecenia w terminalu i zrób oddzielne screenshoty wyników wykonania każdego polecenia.

*# Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)*
node index.js --action list

*# Otrzymujemy kontakt po id*
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

*# Dodajemy kontakt*
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

*# Usuwamy kontakt*
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

Kopiuj
### **Krok 6 - Oddanie pracy domowej[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#krok-6---oddanie-pracy-domowej "Bezpośredni link do nagłówka")**
Screenshoty wykonania poleceń można wysłać na dowolną, bezpłatną chmurę zapisywania obrazów (Przykład: [monosnap](https://monosnap.com/), [imgbb.com](https://imgbb.com/)) i odpowiednie odnośniki należy dodać do pliku README.md. Utwórz ten plik w root projektu. Następnie dodaj odnośnik do repozytorium z pracą domową do [LMS](https://www.edu.goit.global/pl/account/login) dla sprawdzenia przez mentora.
## **Kryteria zaliczenia[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/pl/docs/hw-01/#kryteria-zaliczenia "Bezpośredni link do nagłówka")**
- Utworzone repozytorium z pracą domową — CLI aplikacja.
- Zadanie wysłane do mentora na [LMS](https://www.edu.goit.global/pl/account/login) w celu sprawdzenia (link do repozytorium).
- Kod odpowiada technicznemu zadaniu projektu.
- W trakcie wykonywania kodu nie pojawiają się nieopracowane błędy.
- Nazwanie zmiennych, właściwości i metod zaczyna się z małej litery i zapisuje w notacji CamelCase. - - Wykorzystywane są angielskie rzeczowniki.
- Nazwa funkcji albo metoda zawiera czasownik.
- W kodzie nie ma skomentowanych fragmentów kodu.
- Projekt działa poprawnie w aktualnej wersji LTS Node.



============================================================================================

## English (Angielski) - https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/
--------------------------------------------------------------------------------------------
[Skip to main content](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/)

![](Aspose.Words.a38b9d9c-2a44-49d4-bfac-39c62faf49ad.001.png)[](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/)
### **Step 1[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#step-1 "Direct link to heading")**
- Initialize npm in the project
- In the root of the project, create a file index.js
- Install package [nodemon](https://www.npmjs.com/package/nodemon) as development dependency (devDependencies)
- In package.json file add "scripts" to run index.js
- start script that starts index.js with node
- start:dev script that starts index.js with nodemon
### **Step 2[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#step-2 "Direct link to heading")**
Create a folder db in the root of the project. To store contacts, download and use the [contacts.json](https://github.com/oliverplay/node-hw-1) file, putting it in the db folder.

At the root of the project, create a contacts.js file.

- Make imports of modules fs and path to work with the file system
- Create a contactsPath variable and put the path to the contacts.json file in it. To compose a path, use the methods of the path module
- Add functions to work with a collection of contacts. In functions, use the fs module and its readFile() and writeFile() methods
- Make export of created functions via module.exports

contacts.js

*/\**
` `*\* Uncomment and write down the value*
` `*\* const contactsPath = ;*
` `*\*/*

*// TODO: document each function*
function listContacts() {
`  `*// ...your code*
}

function getContactById(contactId) {
`  `*// ...your code*
}

function removeContact(contactId) {
`  `*// ...your code*
}

function addContact(name, email, phone) {
`  `*// ...your code*
}

Copy
### **Step 3[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#step-3 "Direct link to heading")**
Make an import of the contacts.js module in the index.js file and check the functionality of the functions for working with contacts.
### **Step 4[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#step-4 "Direct link to heading")**
The index.js file imports the yargs package for convenient parsing of command line arguments. Use the ready-made function invokeAction() which receives the type of action to be performed and the required arguments. The function calls the appropriate method from the contacts.js file, passing it the necessary arguments.

index.js

const argv = require("yargs").argv;

*// TODO: refactor*
function invokeAction({ action, id, name, email, phone }) {
`  `switch (action) {
`    `case "list":
`      `*// ...*
`      `break;

`    `case "get":
`      `*// ... id*
`      `break;

`    `case "add":
`      `*// ... name email phone*
`      `break;

`    `case "remove":
`      `*// ... id*
`      `break;

`    `default:
`      `console.warn("\x1B[31m Unknown action type!");
`  `}
}

invokeAction(argv);

Copy

Alternatively, you can use the [commander](https://www.npmjs.com/package/commander) module to parse command line arguments. This is a more popular alternative to the yargs module.

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

*// TODO: refactor*
function invokeAction({ action, id, name, email, phone }) {
`  `switch (action) {
`    `case "list":
`      `*// ...*
`      `break;

`    `case "get":
`      `*// ... id*
`      `break;

`    `case "add":
`      `*// ... name email phone*
`      `break;

`    `case "remove":
`      `*// ... id*
`      `break;

`    `default:
`      `console.warn("\x1B[31m Unknown action type!");
`  `}
}

invokeAction(argv);

Copy
### **Step 5[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#step-5 "Direct link to heading")**
Run the commands in the terminal and take a separate screenshot of the result of each command.

*# Get and display the entire list of contacts in the form of a table (console.table)*
node index.js --action list

*# Get contact by id*
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

*# Add the contact*
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

*# Delete the contact*
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

Copy
### **Step 6 - Homework Submission[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#step-6---homework-submission "Direct link to heading")**
Command execution screenshots can be uploaded to any free cloud image storage service (Example: [monosnap](https://monosnap.com/), [imgbb.com](https://imgbb.com/)) and the corresponding links are necessary add to the README.md file. Create this file at the root of the project. Then attach a link to the homework repository at LMS for mentor to check.
## **Admission Criteria[​**](https://textbook.edu.goit.global/lms-nodejs-homework/v1/en/docs/hw-01/#admission-criteria "Direct link to heading")**
- You created a repository with homework — CLI application
- The assignment has been sent to the mentor at LMS for review (repository link)
- The code corresponds to the terms of reference of the project
- No unhandled errors when executing code
- The names of variables, properties and methods start with a lowercase letter and are written in - - - CamelCase notation. English nouns are used
- The name of the function or method contains a verb
- There are no commented sections of code in the code
- The project works correctly in the current LTS version of Node
