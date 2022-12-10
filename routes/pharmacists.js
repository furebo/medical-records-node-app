const express = require("express");
const getParmacists = require('../controllers/pharmacists');
const router = express.Router();

router.get('/pharmacists',getParmacists);

module.exports = router;