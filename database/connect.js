import mongoose from 'mongoose';

/**
 * This function requires a mongo db url string as parameter
 * and returns a promise.
 */
const connectToDB = (url) => {
    return mongoose.connect(url);    
}

export default connectToDB;