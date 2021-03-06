const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FreelancerSchema = new Schema(
  {
    email:{type:String, required: true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    password:{type:String, required:true},
    school:{type:String, required:true},
    date:{type:Date, required:true},
    degree:{type:String, required:true},
    discipline:{type:String, required:true},
    skill:[String],
    work_history:{type:String, required:true},
    certification:[String],
    jobs_id : [{type:Schema.Types.ObjectId, ref: 'Jobs'}]
  }
);

module.exports = mongoose.model('Freelancer', FreelancerSchema);