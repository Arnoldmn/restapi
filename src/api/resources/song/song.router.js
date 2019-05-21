import express from 'express';
import songController from './song.controller';

export const songRouter = express.Router();

songRouter.get('/')
    .post(songController.create);
