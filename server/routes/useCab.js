const express = require('express');
const { getCab } = require('../controller/cabs')

const router = express.Router();


router.route("/").post(getCab);

module.exports = router;