import mongoose, { Schema, model, Document } from "mongoose";
import { IProject, ProjectSchema } from "./project";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  refreshToken: string;
  projects: IProject[];
}

const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  projects: {
    type: [ProjectSchema],
    default: [],
  },
});

const User =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  model<IUser>("User", UserSchema);

export default User;
