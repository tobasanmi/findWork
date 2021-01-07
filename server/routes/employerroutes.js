const express = require('express');
const {add_employer} = require('../controller/employerController')
const {get_employer_list} = require('../controller/employerController')
const {get_employer_details} = require('../controller/employerController')
const {edit_employer_details} = require('../controller/employerController')
const {delete_employer_profile} = require('../controller/employerController')


const  router = express.Router();

router.post('/addemployer', add_employer)
router.get('/getemployer', get_employer_list)
router.get('/getemployer/:id', get_employer_details)
router.patch('/getemployer/:id', edit_employer_details)
router.delete('/deleteEmployer/:id',delete_employer_profile)


module.exports = router; 