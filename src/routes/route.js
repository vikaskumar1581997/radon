const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

 router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

 router.get("/getPublishersData", publisherController. getPublishersData)

 router.post("/createPublisher", publisherController.createPublisher)

router.post("/createBooksWithAllDetails", bookController.createBooksWithAllDetails)

router.get("/populated", bookController.populated)

router.get("/updateBookAttribute ", bookController.updateBookAttribute )

module.exports = router;