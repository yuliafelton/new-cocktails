const express = require('express');
const cocktails = require('../cocktails.json');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(cocktails);
});

module.exports = router;