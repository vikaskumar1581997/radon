const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mwauth= require("../middleware/auth.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mwauth.authenticate,userController.getUserData)
router.post("/users/:userId/posts",mwauth.authenticate, userController.postMessage)

router.put("/users/:userId",mwauth.authenticate, userController.updateUser)
//router.delete('/users/:userId',mwauth.authenticate, userController.deleteUser)

module.exports = router;