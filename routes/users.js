var express = require('express');
var router = express.Router();

const User = require("../models/User.model")
const Service = require("../services/service")

/* GET list of Users. */
router.get('/', (req, res)=> {
  User.find().then((users)=>
  res.json({ title: 'Express', users})
  )
});

/* Fill all the Users CRUD Routes */
router.post('/', (req, res)=> {
  User.create().then((newUser)=>
  res.json({ title: 'Express', user: newUser})
);
});

module.exports = router;
