const express = require('express');
const q = require('../query-builder/query');
const router = express.Router();

const dbConfig = require('../config/dbConfig');
const tns = require('../config/tnsnames');

router.get('/', (req, res) => {
  res.send('From API route');
});

router.route('/dbcheck').post(q.checkConnection);

router.route('/BSCS/number_price').post(q.getNumberPrice);

router.route('/BSCS/digits_info').post(q.getDigitsInfo);



module.exports = router;
