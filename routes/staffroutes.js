const {getallticket,updateticketstatusstaff,postticketcomment} =require("../controller/staffcontroller")

const router = require('express').Router();

router.get("/ticket", getallticket)
router.put("/:userid/:id", updateticketstatusstaff)
router.post("/:userid/:id",postticketcomment)

module.exports = router;
