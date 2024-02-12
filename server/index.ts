// Import required modules and dependencies
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import connectToMongo from './db';
import UserSchema from './graphql/schema/UserSchema';

const cors = require('cors');
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectToMongo();

// Initialize the express app
const app: express.Application = express();

// Allow Public to be accessed since declared as static
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Set up GraphQL route
app.use('/users', graphqlHTTP({ schema: UserSchema, graphiql: true }));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
