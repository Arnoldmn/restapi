import express from 'express';
import { songRouter } from './resources/song/app';

export const restRouter = express.Router();
restRouter.use('/songs', songRouter)