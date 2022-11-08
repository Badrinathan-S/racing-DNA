const express = require('express');
const { getCab, registerPlace } = require('../controller/cabs')

const router = express.Router();


router.route("/registerCab").post(registerPlace);

module.exports = router;