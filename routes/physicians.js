const express = require("express");
const getPhysicians = require("../controllers/physicians");
const router = express.Router();
router.get('/physicians',getPhysicians);

module.exports = router;