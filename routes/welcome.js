const express = require("express");
const getWelcome = require('../controllers/welcome');
const router = express.Router();
router.get('/',getWelcome);

module.exports = router;