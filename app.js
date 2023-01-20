import express from 'express';
import routeNotFound from './middleware/not-found.js';
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello Vocation Village!`);
});

app.use(routeNotFound);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});