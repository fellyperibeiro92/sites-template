'use strict';

const express = require('express');
const router = express.Router();
const path = require("path");
const UserAgent = require('../utils/userAgent');

router.get('/', (req, res) =>{ /*[UserAgent.getUserAgent]*/
    res.render(path.join(__dirname + '/../views/index'));
});

module.exports = router;