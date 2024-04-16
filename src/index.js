// Import necessary modules
import dotenv from "dotenv";
// Load environment variables from a .env file
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/db.connection.js";
import app from "./app.js";

// Determine the port to use, defaulting to 5001 if not specified in .env
const PORT = process.env.PORT || 5001 || 5002 || 8000 || 8001 || 8002;

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // Start the Express server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Connection to database successful.`);
      console.log(`Server is up and running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    // Handle errors if MongoDB connection fails
    console.log(`Failed to connect to MongoDB ${err}`);
  });
