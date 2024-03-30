import express from 'express';
import { userRouter } from './user.route.js';
const indexRouter = express.Router();

indexRouter.use('/api/v1/users', userRouter);

export default indexRouter;
