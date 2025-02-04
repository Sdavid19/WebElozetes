const invoicesController = require('../controllers/invoiceController');

const express = require("express");

const router = express.Router();

router.get("/", invoicesController.manageInvoices);
router.get("/select", invoicesController.getInvoices);
router.post("/insert", invoicesController.insertInvoices);
router.patch("/update/:id", invoicesController.updateInvoice);
router.delete("/delete/:id", invoicesController.deleteInvoice);

module.exports = router;