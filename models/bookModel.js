import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide name of the book"],
        maxLength: [40, "book name cannot be more than 40 char"]
    },
    author: {
        type: String,
        required: [true, "Please provide name of author"]
    },
    image: {
        type: String,
        required: [true, "Please provide a cover image for the book"]
    },
    desc: {
        type: String,
        required: [true, "Please provide a book description "]
    }
})

export default mongoose.model("Books", BookSchema)