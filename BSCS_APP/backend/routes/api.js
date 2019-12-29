const express = require('express');
const q = require('../query-builder/query');
const router = express.Router();

const dbConfig = require('../config/dbconfig');
const tns = require('../config/tnsnames');

router.get('/', (req, res) => {
  res.send('From API route');
});

router.route('/dbcheck').post(q.checkConnection);

router.route('/BSCS/number_price').post(q.getNumberPrice);

router.route('/athlete').get(q.getAthlete);
router.route('/athletecols').get(q.getAthleteCols);



module.exports = router;
