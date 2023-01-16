const express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({'data': 123});
});

module.exports = router;