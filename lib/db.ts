const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

export default connectToMongo;
