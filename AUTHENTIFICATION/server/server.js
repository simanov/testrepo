const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const api = require('./routes/api');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', api);

app.get('/', function(req, res) {
  res.send('Hello from server');
});


const cpr = require('./crypt/encdec');


const PK = cpr.getPublicKeys('mypw','samir');

const PWD = cpr.getPassword('U2FsdGVkX1/FTyayzWiYiDXGa6FI69NVCqt/p4vFxr0=',
                            'U2FsdGVkX1/D3EUxyAW345RRd3y/LMF21Z6d04GPC4I=',
                            'samir');



console.log('\''+PK[0].toString()+'\',\''+PK[1].toString() + '\'');

console.log(PWD);





app.listen(PORT, function() {
  console.log('Server running on localhost: ' + PORT);
});
