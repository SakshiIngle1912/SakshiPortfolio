const { contactUser, getContactUser } = require("./controller")

const router = require("express").Router()
router
.get("/get-user",getContactUser )
.post("/add-user",contactUser )

module.exports = router

