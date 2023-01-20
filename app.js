import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import connectToDB from './database/connect.js';

//routers imports
import authRoutes from './routes/auth-routes.js';

//middleware imports
import errorHandler from './middleware/error-handler.js';
import notFoundHandler from './middleware/not-found.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello Vocation Village!`);
});

app.use('/api/auth', authRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const startApp = async () => {
    try{
        await connectToDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`server is listening on port ${port}...`);
        });
    }catch(err){
        console.log(err);
    }
}

startApp();