const {getallticket,updateticketstatus,getallusers} =require("../controller/admincontroller")

const router = require('express').Router();

router.get("/ticket", getallticket)
router.get("/users", getallusers)
router.put("/:userid/:id", updateticketstatus)

module.exports = router;