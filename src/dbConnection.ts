import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connectes");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection.isConnected = db.connections[0].readyState;

    console.log("DB connection successful");
    //console.log("db ", db);
    //console.log("db-Connections ", db.connections);
  } catch (error) {
    console.log("DB connection failed");
    console.log("Error: ", error);
    process.exit(1);
  }
}

export default dbConnect;
