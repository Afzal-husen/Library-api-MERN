import express from "express"
import { uploadBook, allBooks } from "../controllers/bookController.js"

const router = express.Router()

// upload book
router.post("/uploadbook", uploadBook)

// view all books
router.get("/allbooks", allBooks)


export default router