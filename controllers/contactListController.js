//let contacts = [];

const Contact = require("../models/contact");
let contactList = [];

exports.getContactPage = (req, res) => {
    Contact.fetchContacts((contacts) => {
      res.render("index.ejs", { myContact: contacts });
  });
};

exports.postNewContact = (req, res) => {

  let userContact = {
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
  };

  let newContact = new Contact(userContact);
  newContact.saveContact();
 
  console.log(contactList);

  res.redirect("/");
};

exports.deleteContact = (req, res) => {
  let contactToDelete = {
    fullName: req.body.oldFullName,
    phoneNumber: req.body.oldPhoneNumber
  } 
  // console.log(req.body.deleteContactButton);
  // for (let i = 0; i < contactList.length; i++) {
  //   if (contactList[i] === contactToDelete) {
  //     //kontrollime nii tüüpi kui ka sisu
  //     contactList.splice(i, 1);
  //   }
  // }

  console.log("from delete " + contactToDelete.fullName);
  console.log("from delete " + contactToDelete.phoneNumber);
  Contact.deleteItem(contactToDelete);
  res.redirect("/");
};
