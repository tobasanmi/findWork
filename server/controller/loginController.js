require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employer = require('../model/employer')
const Freelancer = require('../model/freelancer')

const secret = process.env.SECRET;

const Login = require('../model/login')

module.exports.employer_login_details = async (req,res,next) => {
  try{
    const foundEmployer = await Employer.findOne({email:req.body.email});
    console.log('employer', foundEmployer);
    // const foundFreelancer = await Freelancer.findOne({email:req.body.email})
    if(foundEmployer._id = null){
      return res.json({message: 'invalid email'})
    }
    const employerPassword = await bcrypt.compare(req.body.password, foundEmployer.password)
    // const freelancerPassword = await bcrypt.compare(req.body.password, foundFreelancer.password)
    if(employerPassword === false){
      return res.json({message:'invalid password'})
    }
    const token = jwt.sign(
      {email:foundEmployer.email, id:foundEmployer._id }, "secret", {expiresIn : 60*60}
    );
    return res.json({token});
  }catch(err){
    return next(err);
  }
}


module.exports.freelancer_login_details = async (req,res,next) => {
  try{
    const foundFreelancer = await Freelancer.findOne({email:req.body.email});
    console.log('freelancer', foundFreelancer);
    // const foundFreelancer = await Freelancer.findOne({email:req.body.email})
    if(foundFreelancer.id = null){
      return res.json({message: 'invalid email'})
    }
    const freeLancerPassword = await bcrypt.compare(req.body.password, foundFreelancer.password)
    // const freelancerPassword = await bcrypt.compare(req.body.password, foundFreelancer.password)
    if(freeLancerPassword === false){
      return res.json({message:'invalid password'})
    }
    const token = jwt.sign(
      {email:foundFreelancer.email, id:foundFreelancer._id }, "secret", {expiresIn : 60*60}
    );
    // console.log('token', employerToken.firstname);
    return res.json({token});
  }catch(err){
    return next(err);
  }
}