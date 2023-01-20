import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

//middleware imports
import errorHandler from './middleware/error-handler.js';
import notFoundHandler from './middleware/not-found.js';

app.get('/', (req, res) => {
    res.send(`Hello Vocation Village!`);
});

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});