import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_CONNECTION_STRING } = process.env;

if (!MONGODB_CONNECTION_STRING) {
  throw new Error('The MongoDB connection string is not defined');
}

export { MONGODB_CONNECTION_STRING };
