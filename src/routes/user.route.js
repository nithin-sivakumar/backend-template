import express from "express";
import { userController } from "../controllers/user.controller.js";
import { paginateResults } from "../utils/Pagination.js";
import { User } from "../models/user.model.js";
const userRouter = express.Router();

userRouter.route("/test").get(paginateResults(User), userController.test);

export { userRouter };
