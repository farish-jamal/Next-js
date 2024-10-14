import mongoose, {Mongoose} from "mongoose";

const DATABASE_URL = "mongodb+srv://farishjamal98:J2sreY2nBDsA36JB@next.ihvyb.mongodb.net/?retryWrites=true&w=majority&appName=Next";

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

interface MongooseCache {
 conn: Mongoose | null;
 promise: Promise<Mongoose> | null;
}

declare global {
 // eslint-disable-next-line no-var
 var mongoose: MongooseCache;
}


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB():Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(DATABASE_URL).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;