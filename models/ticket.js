const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username: { type: String, default: null },
    content: { type: String, default: null },
  }, { timestamps: true });

const ticketSchema = new mongoose.Schema(
    {
        userID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",    //Here we refer to the Db of User created
            required: true
        },
        name:{
            type : String,
            required : true,
        },
        query_type:{
            type : String,
            required : true,
        },
        discription:{
            type : String,
            required : true,
        },
        status : {
            type : String,
            default : "OPEN", 
        },
        phone_no: {
            type : Number,
            required : true,
        },
        assignedTo: {
            type : String,
            default : null
        },
        comments: [commentSchema]
    },    
    {
        timestamps : true
    })
    const Ticket = mongoose.model("Ticket", ticketSchema)
    module.exports = Ticket