var express = require('express');
const nodemailer = require("nodemailer");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
  let transport = nodemailer.createTransport({});

  const message = {
      from: 'elonmusk@tesla.com',
      to: 'fakedb@gmail.com',
      subject: 'Design Your Model S | Tesla',
      html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',
  };
  transport.sendMail(message, (err, info) => {
      console.log(err, info)
  });
  });

module.exports = router;
