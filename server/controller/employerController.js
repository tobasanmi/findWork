const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employer = require('../model/employer');

module.exports.get_employer_list = async (req,res,next) => {
  try{
    const result = await Employer.find();
    console.log('employer', result);
    return res.json({data:result})
  }catch (err){
    return next(err)
  }
  // Employer.find().then(result => {
  //   console.log(result);
  //   res.json({data:result})
  // }).catch(err => console.log(err));
}

module.exports.add_employer = async (req,res,next) => {
  try{
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10)
    const new_employer = {
    email:req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hashedPassword,
    company_name:req.body.company_name,
    company_email:req.body.company_email,
    industry: req.body.industry,
    employment_type:req.body.employment_type,
    contact_person:req.body.contact_person,
    phone:req.body.phone,
    address:req.body.address
  } 
  console.log('hash', hashedPassword, new_employer);
  const employers = await Employer.create(new_employer);
  return res.json({message: 'created succesfully'})
}
  catch (err){
    console.log('err',err);
    return next(err);
  }

}

module.exports.get_employer_details = async(req,res,next)=>{
  try{
    const id = req.params.id;
    const result = await Employer.findOne({_id:id})
    console.log('result', result);
    return res.json({data:result});
  }catch(err){
    return next(err)
  }
}

module.exports.edit_employer_details = async (req,res,next) => {
  try{
const id = req.params.id;
const result = await Employer.findOneAndUpdate({_id:id})
return res.json({message:'updated successfully'})
  }catch(err){
    return next(err);
  }
}
module.exports.delete_employer_profile = async (req,res,next) => {
  try{
    const id = req.params.id;
    const result = await Employer.findOneAndDelete({_id:id})
    console.log(result);
    return res.json({message: 'deleted successfully'})
  }catch(err){
    return next(err);
  }
}