import express from "express";
const mainRouter = express.Router();
import userRouter from './user.js'
import scrapeRouter from "./scrape.js";


mainRouter.use("/user", userRouter);
mainRouter.use("/scrape" , scrapeRouter)

export default mainRouter
