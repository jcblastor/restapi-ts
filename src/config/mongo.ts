import 'dotenv/config';
import mongoose, {connect}  from 'mongoose'
mongoose.set('strictQuery', false);

async function dbConnect(): Promise<void> {
  const MONGO_URL = <string>process.env.MONGO_URL;
  await connect(MONGO_URL);
}

export default dbConnect
