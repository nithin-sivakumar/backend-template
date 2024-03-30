import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Field not found. Username is required!'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },
    email: {
      type: String,
      required: [true, 'Field not found. Email is required!'],
      unique: true,
      lowercase: true,
      trim: true
    },
    fullName: {
      type: String,
      required: [true, 'Field not found. Name is required!'],
      trim: true,
      index: true
    },
    avatar: {
      type: String, // Cloudinary URL here
      required: [true, 'Field not found. Avatar is required!']
    },
    password: {
      type: String,
      required: [true, 'Field not found. Password is required!']
    },
    refreshToken: {
      type: String
    }
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   this.password = bcrypt.hash(this.password, 10);
//   next();
// });

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      username: this.username,
      email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = mongoose.model('User', userSchema);
