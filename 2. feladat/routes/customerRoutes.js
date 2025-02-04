const customerController = require('../controllers/customerController');

const express = require("express");

const router = express.Router();

router.get("/manage", customerController.manageCustomers);
router.get("/select", customerController.getCustomers);
router.post("/insert", customerController.insertCustomers);
router.patch("/update/:id", customerController.updateCustomer);
router.delete("/delete/:id", customerController.deleteCustomer);

module.exports = router;