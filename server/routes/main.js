import express from "express";
const mainRouter = express.Router();
import userRouter from './user.js'


mainRouter.use("/user", userRouter);

export default mainRouter
