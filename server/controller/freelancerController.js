const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Freelancer = require('../model/freelancer');

module.exports.get_freelancer_list = async(req,res,next) => {
  try{
    const result = await Freelancer.find()
    return res.json({data: result})
  }catch(err){
    return next(err);
  }
}

module.exports.add_freelancer = async (req,res,next) => {
  try{
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const new_worker = {
      email:req.body.email,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    password:hashedPassword,
    school:req.body.school,
    date:req.body.date,
    degree:req.body.degree,
    discipline:req.body.discipline,
    skill:req.body.skill,
    work_history:req.body.work_history,
    certification:req.body.certification
  }
  console.log('hash',hashedPassword, new_worker)
  const workers = await Freelancer.create(new_worker)
  return res.json({message:'Created Succesfully'})
  }catch(err){
    console.log('err',err);
    return next(err);
  }
}

module.exports.get_freelancer_details = async (req,res,next)=>{
  try{
      const id = req.params.id;
      const result = Freelancer.findOne({_id:id})
      return res.json({data:result})
  }catch(err){
    return next(err);
  }
}
module.exports.edit_freelancer_details = async (req,res,next) => {
  try{
const id = req.params.id;
const result = await Freelancer.findOneAndUpdate({_id:id})
return res.json({message:'updated successfully'})
  }catch(err){
    return next(err);
  }
}
module.exports.delete_freelancer_profile = async (req,res,next) => {
  try{
    const id = req.params.id;
    const result = await Freelancer.findOneAndDelete({_id:id})
    return res.json({message: 'deleted successfully'})
  }catch(err){
    return next(err);
  }
}