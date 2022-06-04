const express = require('express');
const Book = require('../model/Book');
const router = express.Router();
const bookControllers=require('../controllers/books-controllers');
const { route } = require('express/lib/router');


router.get("/",bookControllers.getAllBooks);
router.post("/", bookControllers.addBook);
router.get("/:id", bookControllers.getById);
router.put("/:id", bookControllers.updateBook);
router.delete("/:id",bookControllers.deleteBook)
module.exports = router;
