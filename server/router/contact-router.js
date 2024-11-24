const express = require('express');
const router  = express.Router();
const contactForm = require("../controller/contact-controller");

router.route("/contact").post(contactForm); // POST' to send data

module.exports = router;

// How to route file