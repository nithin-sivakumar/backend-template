import multer from "multer";
import cloudinary from "cloudinary";

// Local File Storage Configuration
class LocalStorage {
  constructor() {
    this.storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./public");
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
      },
    });
    this.upload = multer({ storage: this.storage });
  }

  uploadFile() {
    return this.upload.single("file");
  }

  async removeFile(filePath) {
    try {
      // Implement file removal logic for local storage
      // Example:
      fs.unlinkSync(filePath);
      return "File removed successfully";
    } catch (error) {
      throw new Error("Failed to remove file from local storage");
    }
  }

  async editFile(oldFilePath, newFilePath) {
    try {
      // Implement file editing logic for local storage
      // Example:
      fs.renameSync(oldFilePath, newFilePath);
      return "File edited successfully";
    } catch (error) {
      throw new Error("Failed to edit file in local storage");
    }
  }

  async getFile(filePath) {
    try {
      // Implement file retrieval logic for local storage
      // Example:
      const fileData = fs.readFileSync(filePath);
      return fileData;
      //   return "File retrieved successfully";
    } catch (error) {
      throw new Error("Failed to retrieve file from local storage");
    }
  }
}

// Cloudinary Configuration
class CloudinaryStorage {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFile(file) {
    try {
      const result = await cloudinary.uploader.upload(file.path);
      return result.secure_url;
    } catch (error) {
      throw new Error("Failed to upload file to Cloudinary");
    }
  }

  async removeFile(publicId) {
    try {
      await cloudinary.uploader.destroy(publicId);
      return "File removed successfully from Cloudinary";
    } catch (error) {
      throw new Error("Failed to remove file from Cloudinary");
    }
  }
}

export { LocalStorage, CloudinaryStorage };
