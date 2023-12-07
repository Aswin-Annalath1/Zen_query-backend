
const Ticket = require('../models/ticket.js')

//Function to get all in  page
module.exports.gettickets = async(req,res) => {      //It is exported to router as soon as created
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.find({userID : userID}) //the url userid checking with Db data userid.
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}
//Function to get a item to view details..
module.exports.getticket = async(req,res) => {     
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findById(req.params.id)
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}
//Function to post in page
module.exports.postticket = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.create({         //Calling model(Todo) & storing data to schema..
            userID : userID,          //In task giving that userid taken from url
            name:req.body.name,
            query_type:req.body.query_type,
            discription:req.body.discription,
            phone_no:req.body.phone_no
        })
        res.json(ticket);
    }
    catch(error){
        res.json(error)
    }
}
//Function to post comment in page
module.exports.postticketcomment = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        
        const ticket = await Ticket.findById(req.params.id)
        const newComment = {
            username:"Student",
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
module.exports.deleteticket = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findByIdAndDelete(req.params.id)
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}
module.exports.updateticket = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            query_type:req.body.query_type,
            discription:req.body.discription,
            phone_no:req.body.phone_no
        })
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}
//Function to update ticket status...
module.exports.updateticketstatus = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const ticket = await Ticket.findByIdAndUpdate(req.params.id,{
            status :"CLOSED",
        })
        res.json(ticket)
    }
    catch(error){
        res.json(error)
    }
}