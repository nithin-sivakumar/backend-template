// Import the Cloudinary library (v2) for working with the Cloudinary API
import { v2 as cloudinary } from "cloudinary";

// Import the Node.js 'fs' module for file system operations
import fs from "fs";

// Configure the Cloudinary API credentials using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload a file to Cloudinary
const uploadOnCloud = async (localFilePath) => {
  try {
    // Check if a local file path is provided
    if (!localFilePath) return null;

    // Upload the file to Cloudinary using the specified options
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Automatically detect the resource type
    });

    // Log success message with the Cloudinary URL
    console.log(`File uploaded to Cloudinary!\n${response.url}`);

    // Return the Cloudinary response object
    return response;
  } catch (err) {
    // If an error occurs during the upload, delete the local file
    fs.unlinkSync(localFilePath);

    // Return null to indicate the upload failure
    return null;
  }
};

// Export the uploadOnCloud function for use in other parts of the application
export { uploadOnCloud };
