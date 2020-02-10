const express = require('express');
const router = express.Router();

const email = req.body.email;
const password = req.body.email;

router.route('/').get((req, res) => {
  console.log();
  res.send('');
});
router.route('/add').add((req, res) => {});
