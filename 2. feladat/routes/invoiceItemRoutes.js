const invoiceItemsController = require('../controllers/invoiceItemController');

const express = require("express");

const router = express.Router();

router.get("/", invoiceItemsController.manageInvoiceItems);
router.get("/select", invoiceItemsController.getInvoiceItems);
router.post("/insert", invoiceItemsController.insertInvoiceItems);
router.patch("/update/:id", invoiceItemsController.updateInvoiceItem);
router.delete("/delete/:id", invoiceItemsController.deleteInvoiceItem);

module.exports = router;