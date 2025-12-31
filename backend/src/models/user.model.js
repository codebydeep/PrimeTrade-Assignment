import mongoose from "mongoose";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";

const userSchema = new mongoose.Schema(
  {
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    refreshToken: {
        type: String
    }, 
    role :{
        type: String,
        enum: AvailableUserRoles,
        default: UserRolesEnum.USER
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    emailVerificationToken: {
        type: String,
    }, emailVerificationTokenExpiry: {
      type: Date,  
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;