// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const Jobs = require('../model/jobs');

module.exports.get_jobs = async(req,res,next) => {
  try{
    const result = await Jobs.find();
    return res.json({data:result})
  }catch(err){
    return next(err)
  }
}

module.exports.add_jobs = async (req,res,next) => {
  try{
    // console.log(req.body);
  const new_jobs = {
    industry: req.body.industry,
    location:req.body.location,
    qualification:req.body.qualification,
    experience: req.body.experience,
    job_level:req.body.job_level,
    job_summary:req.body.job_summary,
    job_description:req.body.job_description,
    job_title: req.body.job_title,
    employer_id: req.params.id,
    company:req.body.company
  }
    const jobs = await Jobs.create(new_jobs);
    console.log('jobs', jobs);
    return res.json({message:'created succesfully'})
}catch(err){
  return next(err);
}
};


module.exports.get_job_details = async (req,res,next)=>{
  try{
      const id = req.params.id;
      const result = await Jobs.findOne({_id:id})
      return res.json(result)
  }catch(err){
    return next(err);
  }
}
module.exports.edit_job_details = async (req,res,next) => {
  const update = {
    company:req.body.company,
     industry: req.body.industry,
    location:req.body.location,
    qualification:req.body.qualification,
    experience: req.body.experience,
    job_level:req.body.job_level,
    job_summary:req.body.job_summary,
    job_description:req.body.job_description,
    job_title: req.body.job_title
  }
  try{
const id = req.params.id;
if (id.match(/^[0-9a-fA-F]{24}$/)) {
  // Yes, it's a valid ObjectId, proceed with `findById` call.
}
const result = await Jobs.findByIdAndUpdate({id, update })
console.log('result', result);
return res.json({message:'updated successfully'})
  }catch(err){
    return next(err);
  }
}
module.exports.delete_job_details = async (req,res,next) => {
  try{
    const id = req.params.id;
    const result = await Jobs.findOneAndDelete({_id:id})
    return res.json({message: 'deleted successfully'})
  }catch(err){
    return next(err);
  }
}

