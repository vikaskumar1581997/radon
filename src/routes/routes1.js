const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AubController= require("../controllers/aubcontroller")
//const BooksController= require("../controllers/aubcontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBooks", AubController.createBooks )
router.post("/createAuthors", AubController.createAuthors )
router.post("/list", AubController.list )
router.post("/findAuthor", AubController.findAuthor )
router.post("/findBooks", AubController.findBooks)



module.exports = router;