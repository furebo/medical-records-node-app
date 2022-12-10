const express = require("express");
const getPatients = require('../controllers/patients');
const router = express.Router();
router.get('/patients',getPatients);

module.exports = router;