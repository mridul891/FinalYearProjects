import express from "express";
import { signinController, singupController } from "../controller/user.controller.js";
const userRouter = express.Router()

userRouter.use("/signin" , signinController)
userRouter.use("/signup" , singupController)

export default userRouter