// Import the Mongoose library for MongoDB interaction
import mongoose from 'mongoose';

// Function to connect to MongoDB
async function connectDB() {
  try {
    // Attempt to connect to MongoDB using the provided URI and database name
    await mongoose.connect(`${process.env.MONGO_URI}`);

    // Get the connection instance
    const connectionInstance = mongoose.connection;

    // Event listener for connection errors
    connectionInstance.on('error', (err) => {
      console.log(err);
    });

    // Event listener for successful connection
    connectionInstance.once('open', () => {
      console.log(`Database status: Ready`);
      console.log(`Host: ${connectionInstance.host}`);
      console.log(`Port: ${connectionInstance.port}`);
    });
  } catch (error) {
    // Handle errors during the connection attempt
    console.log(`MongoDB connection failed!\n${error}`);
    process.exit(1); // Exit the process with a failure code
  }
}

// Call the connectDB function to establish the MongoDB connection
connectDB();

// Export the connectDB function for use in other parts of the application
export default connectDB;
