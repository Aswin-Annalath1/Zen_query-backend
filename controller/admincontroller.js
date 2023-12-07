const Ticket = require('../models/ticket');
const User = require("../models/user");

module.exports.getallticket = async(req,res) => {
    try{
        const ticket = await Ticket.find();
        res.json(ticket);
    }catch(error){
        res.json(error);
    }
}
module.exports.updateticketstatus = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findByIdAndUpdate(req.params.id,{
            status : req.body.status,
            assignedTo:req.body.assignedTo
        })
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}

module.exports.getallusers = async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.json(error);
    }
}