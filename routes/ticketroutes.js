const {
    gettickets,
    getticket,
    postticket,
    deleteticket,
    updateticket,
    updateticketstatus,
    postticketcomment,
} = require('../controller/ticketcontroller.js') //Imported from controller

const router = require('express').Router()

router.get("/:userid/", gettickets)
router.get("/:userid/:id", getticket)
router.post("/:userid/", postticket)
router.delete("/:userid/:id", deleteticket)
router.put("/:userid/:id", updateticket)
router.put("/status/:userid/:id", updateticketstatus)
router.post("/:userid/:id",postticketcomment)

module.exports = router