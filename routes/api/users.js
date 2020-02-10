const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
  '/',
  [
    check('name')
      .not()
      .isEmpty()
      .withMessage('Name is needed'),
    check('email')
      .isEmail()
      .withMessage('Username cannot be empty.'),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);

    // If there are errors!!  if(errors.isEmpty()) = if there is not (!errors). ! gives u errors
    if (!errors.isEmpty()) {
      console.log(errors.mapped());
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
  }
);

module.exports = router;
