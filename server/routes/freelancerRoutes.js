const express = require('express');
const {add_freelancer} = require('../controller/freelancerController');
const {edit_freelancer_details} = require('../controller/freelancerController');
const {get_freelancer_list} = require('../controller/freelancerController');
const {get_freelancer_details} = require('../controller/freelancerController');
const {delete_freelancer_profile} = require('../controller/freelancerController');



const router = express.Router()

router.post('/addfreelancer', add_freelancer )
router.get('/getfreelancer', get_freelancer_list )
router.get('/getfreelancer/:id', get_freelancer_details)
router.patch('/editfreelancer/:id', edit_freelancer_details )
router.delete('/removefreelancer', delete_freelancer_profile )


module.exports = router;