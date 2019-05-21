import express from 'express';
import { connect } from './config/db';

const app = express();

const PORT = process.env.PORT || 7000;

connect();
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Get favorite congolese music songs and party loud!',
    });
});

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