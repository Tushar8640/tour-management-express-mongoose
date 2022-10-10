const Tour = require("../../model/tourModel")

exports.getAllTour=(req,res)=>{
    const tour = Tour.find({})
    res.send("hey your route is working")
}