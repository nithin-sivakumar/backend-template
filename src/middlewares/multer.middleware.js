// Import the Multer library for handling file uploads
import multer from "multer";

// Configure the storage options for uploaded files
const storage = multer.diskStorage({
  // Set the destination where uploaded files will be stored
  destination: function (req, file, cb) {
    cb(null, "./public"); // "./public" is the destination directory
  },

  // Set the filename for the uploaded file
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Use the original filename for storage
  },
});

// Create a Multer instance with the specified storage configuration
export const upload = multer({ storage });

// Export the configured Multer instance for use in other parts of the application
