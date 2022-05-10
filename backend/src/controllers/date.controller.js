const express = require('express');

const Date = require("../models/date.model");


const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Date));
router.get("", crudController.getAll(Date));
router.get("/:id", crudController.getOne(Date));
router.patch("/:id", crudController.updateOne(Date));
router.delete("/:id", crudController.deleteOne(Date));


module.exports = router;