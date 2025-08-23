const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const express=require("express")
const app=express()
const connectDb=require("./config/db.js")
const cookieParser = require("cookie-parser")

//Importing routes
const authRouter=require("./routes/auth.js")
const patientRouter=require("./routes/patient.js")
const aiRouter=require("./routes/ai.js")

//Environment variables
const PORT=process.env.PORT || 3000
const URI=process.env.MONGODB_URI


//Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173' ,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//Routes
app.use("/api/auth",authRouter)
app.use("/api/patient",patientRouter)
app.use("/api/ai",aiRouter)

//Connecting to MongoDB
connectDb(URI)
.then(()=>{
    console.log("Connected to MongoDB successfully!")
}).catch((err)=>{
    console.log("Error connecting to MongoDB : ",err)
})

//Connecting to server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})