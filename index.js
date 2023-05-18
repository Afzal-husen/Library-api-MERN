import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./config/connectDB.js"
import { errorHandler } from "./middlewares/error.js"
import bookRouter from "./routes/bookRoute.js"
import cors from "cors"

const app = express()

// cors
app.use(cors())

// json parser
app.use(express.json())

// routes
app.use("/api/v1/books", bookRouter)


// error handler middleware
app.use(errorHandler)

// port
const PORT = 5000

// connect to DB and start server
const start = () => {
    connectDB(process.env.MONGO_URI)
    console.log("connected to DB")
    app.listen(PORT, console.log(`server running at port ${PORT}`))
}

start()
