
const ticketroutes = require('./ticketroutes.js')
const userroutes = require('./userroutes.js')
const adminroutes = require('./adminroutes.js')
const staffroutes = require('./staffroutes.js')

const  router = require('express').Router()  //Its needed here to create route


router.use("/ticket", ticketroutes)       //Here we create todos route
router.use("/users", userroutes)      //Here we create users route
router.use("/admin", adminroutes) 
router.use("/staff",staffroutes)     //Here we create staff route

module.exports = router