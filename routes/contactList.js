const express = require("express");
const contactListController = require("../controllers/contactListController");
const contactRouter = express.Router();

contactRouter.get("/", contactListController.getContactPage);

contactRouter.post("/", contactListController.postNewContact);

contactRouter.post("/contactDelete", contactListController.deleteContact);

module.exports = contactRouter;