import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello Vocation Village!`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});