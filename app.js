import express from 'express';
import errorHandler from './middleware/error-handler.js';
import notFoundHandler from './middleware/not-found.js';
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello Vocation Village!`);
});

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});