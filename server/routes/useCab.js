const express = require('express');
const { getCab } = require('../controller/cabs')

const router = express.Router();


router.route("/").get(getCab);

module.exports = router;