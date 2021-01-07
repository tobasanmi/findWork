require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const Employer = require('../model/employer')
const Freelancer = require('../model/freelancer')

const secret = process.env.SECRET;

const Login = require('../model/login')

module.exports.user_login_details = async (req,res,next) => {
  try{
    const foundFreelancer = await Employer.findOne({email:req.body.email});
    // console.log('employer', foundEmployer);
    // const foundFreelancer = await Freelancer.findOne({email:req.body.email})
    if(foundFreelancer.id = null){
      return res.json({message: 'invalid email'})
    }
    const freeLancerPassword = await bcrypt.compare(req.body.password, foundFreelancer.password)
    // const freelancerPassword = await bcrypt.compare(req.body.password, foundFreelancer.password)
    if(freeLancerPassword === false){
      return res.json({message:'invalid password'})
    }
    const freeLancerToken = jwt.sign(
      {email:foundFreelancer.email }, "secret", {expiresIn : 60*60}
    );
    // console.log('token', employerToken.firstname);
    return res.json({freeLancerToken});
  }catch(err){
    return next(err);
  }
}