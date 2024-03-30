import express from "express";
import { userController } from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.route("/test").get(userController.test);

export { userRouter };
