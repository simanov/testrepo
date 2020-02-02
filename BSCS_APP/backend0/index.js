const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4428;
const api = require('./routes/api');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', api);

app.get('/', function(req, res) {
  res.send('Hello from BSCS server');
});


app.listen(PORT, function() {
  console.log('Server running on http://localhost:' + PORT);
});
