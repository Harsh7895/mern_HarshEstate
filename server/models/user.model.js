import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
