import express from 'express';
import { connect } from './config/db';
import { restRouter } from './api/app';

const app = express();

const PORT = process.env.PORT || 7000;

connect();

app.use('/api', restRouter)
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message,
        },
    });
});
app.listen(PORT, () => {
    console.log(`App running ${PORT}`);
});

export default app;