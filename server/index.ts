import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectToMongo from './db'
import path from 'path'

//For env File 
dotenv.config();

connectToMongo()

const app: Application = express();
app.use(cors())
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/auth', require('./routers/auth.controller'))
app.use('/users', require('./routers/user.controller'))
app.use('/category', require('./routers/category.controller'))
app.use('/enterprise', require('./routers/enterprise.controller'))
app.use('/post', require('./routers/posts.controller'))

app.listen(port, () => {
    console.log(`Server is running at Port:${port}`);
});