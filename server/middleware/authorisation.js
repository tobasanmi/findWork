require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

function ensureCorrectUser (req,res,next){
  try{
    const authHeaderValue = req.headers.authorization.split(' ')[1];
    const token = jwt.verify(authHeaderValue,'secret')
    console.log('verify', token);
    return next();

  }catch(e){
    return res.status(401).json({message:'Unathorised'})
  }
}


module.exports = ensureCorrectUser