const router = require('express').Router();
const trades = require('./trades');

router.use('/trades', trades);

module.exports = router;