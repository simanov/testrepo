const express = require('express');
const router = express.Router();

const User = require('../models/user');

const mongoose = require('mongoose');
const db =
  'mongodb+srv://samir:1234@eventsdb-sjtdi.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(
  db,
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) {
      console.log('Error!: ' + err);
    } else {
      console.log('Connected to mongodb');
    }
  }
);

router.get('/', (req, res) => {
  res.send('From API route');
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registerUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registerUser);
    }
  });
});

router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('Invalid email');
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('invalid password');
        } else {
          res.status(200).send(user);
        }
      }
    }
  });
});

module.exports = router;
