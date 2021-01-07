const Bid = require('../model/bids')

module.exports.get_bid = async(req,res,next) => {
  try{
      const result = await Bid.find()
      return res.json({data: result})
  }catch (err){
    return next(err)
  }
}

module.exports.post_bid = async (req,res,next) => {
  try{
    const new_bid = {
      job_id = req.params.id,
      freelancer_id: req.params.id
    }
      const result = await Bid.create(new_bid)
      return res.json({message: 'created successfully'})
  }catch (err){
    return next(err)
  }
}

module.exports.delete_bid = async ( req,res,next) => {
  try{
const id = req.params.id;
const result = await Bid.findByOneAndDelete({_id:id})
return res.json({message:'deleted successfully'})
  }catch(err){
    return next(err)
  }
}