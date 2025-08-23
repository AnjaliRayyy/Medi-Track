const express=require("express")
const router=express.Router()
const {handleSignUp,handleLogin, handleGetMe, handleLogout}=require('../controllers/auth.js')
const authMiddleware=require("../middlewares/authMiddleware.js")
//<-----------------SignUp Route--------------------->
router.route("/signup").post(handleSignUp)

//<---------------Login Route--------------->
router.route("/login").post(handleLogin)

//<--------------Authentication--------------->
router.get("/me",authMiddleware,handleGetMe)

//<----------------Logout Route----------------->
router.post("/logout",handleLogout)
module.exports=router