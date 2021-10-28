const fs = require("fs");
const path = require("path");

//path to task.json

const pathToFile = path.join(
  path.dirname(require.main.filename),
  "data",
  "contact.json"
);

module.exports = class Contact {
  constructor(contact) {
    //kasutajalt tuleb see
    this.contact = contact;
  }
  saveContact() {
    fs.readFile(pathToFile, (error, fileContent) => {
      let contacts = [];
      //let contactList = [];

      if (!error) {
        contacts = JSON.parse(fileContent);
      } else {
        console.log(error);
      }

      contacts.push(this);

      fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
        console.log("Error", error);
      });
    });
  }
  static fetchContacts(callBack) {
    fs.readFile(pathToFile, (error, fileContent) => {
      if (error) {
        callBack([]);
      }
      callBack(JSON.parse(fileContent));
    });
  }

  static deleteItem(contact) {
    console.log("hello from delete");
    //get data from the json file
    fs.readFile(pathToFile, (error, fileContent) => {
      let contacts = [];
      if (!error) {
        contacts = JSON.parse(fileContent);
      }
      //delete an item from the tasks arrays
      for (let i = 0; i < contacts.length; i++) {
          console.log(contacts[i]);
        if (contacts[i].contact.fullName === contact.fullName && contacts[i].contact.phoneNumber === contact.phoneNumber) {
          //delete an element from the array
          contacts.splice(i, 1);
          console.log("spliced");
          break;
        }
      }


      fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
        console.log(error);
      });
    });
  }
};
