const express = require('express');
const { employer_login_details,freelancer_login_details } = require('../controller/loginController');
const ensureCorrectUser = require('../middleware/authorisation');

const router = express.Router();

router.post('/employerlogin', employer_login_details, ensureCorrectUser);
router.post('/freelancerlogin', freelancer_login_details, ensureCorrectUser);



module.exports = router;