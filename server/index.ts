import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectToMongo from './db'

//For env File 
dotenv.config();

connectToMongo()

const app: Application = express();
app.use(cors())
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/auth', require('./routers/auth.controller'))

app.listen(port, () => {
    console.log(`Server is running at Port:${port}`);
});