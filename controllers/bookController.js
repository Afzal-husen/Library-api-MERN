import bookModel from "../models/bookModel.js";
import { CustomError } from "../utils/customError.js";

export const uploadBook = async (req, res, next) => {
    try {
        const book = await bookModel.create(req.body)

        const message = "book successfully added"
        res.status(200).json({
            success: true,
            book,
            message
        })
    } catch (error) {
        next(error)
    }
}

export const allBooks = async (req, res, next) => {
    try {
        const books =  await bookModel.find({})

        if(!books) return next(new CustomError("The library is empty", 404))

        res.status(200).json({
            success: true,
            books,
        })
    } catch (error) {
        next(error)
    }
}
