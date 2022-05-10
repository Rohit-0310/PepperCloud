const express = require('express');

const Number = require("../models/number.model");


const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Number));
router.get("", crudController.getAll(Number));
router.get("/:id", crudController.getOne(Number));
router.patch("/:id", crudController.updateOne(Number));
router.delete("/:id", crudController.deleteOne(Number));


module.exports = router;