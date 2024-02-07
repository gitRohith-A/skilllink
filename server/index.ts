// Import the express in typescript file
import express from 'express';
import dotenv from 'dotenv'
import path from 'path';

import connectToMongo from './db';
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

connectToMongo()
// Initialize the express engine
const app: express.Application = express();

// Allow Public to be accessed since declared as static
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
dotenv.config();


// Routers for the pages
app.use('/auth', require('./Router/Authorization.controller'));

app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`);
});