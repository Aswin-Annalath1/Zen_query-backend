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

module.exports.updateticketstatusstaff = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findByIdAndUpdate(req.params.id,{
            status :"ATTENDED",
        })
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}

module.exports.postticketcomment = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findById(req.params.id)
        const newComment = {
            username: "Mentor",
            content: req.body.content
        };
        ticket.comments.push(newComment)
        await ticket.save() 
        res.json(ticket);
    }
    catch(error){
        res.json(error)
    }
}



