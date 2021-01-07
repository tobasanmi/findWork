const express = require('express');
const { get_jobs, add_jobs, get_job_details, edit_job_details, delete_job_details } = require("../controller/jobsController");

const  router = express.Router();

router.post('/addjobs', add_jobs)
router.get('/getjobs', get_jobs)
router.get('/getjobs/:id', get_job_details)
router.put('/getjobs/:id', edit_job_details)
router.delete('/deletejob/:id',delete_job_details)


module.exports = router; 