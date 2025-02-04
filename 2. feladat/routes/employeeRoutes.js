const employeeController = require('../controllers/employeeController');

const express = require("express");

const router = express.Router();

router.get("/select", employeeController.getEmployees);
router.post("/insert", employeeController.insertEmployees);
router.patch("/update/:id", employeeController.updateEmployee);
router.delete("/delete/:id", employeeController.deleteEmployee);

module.exports = router;