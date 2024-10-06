import mongoose, { Schema, model, Document } from "mongoose";

export interface ITask {
  title: string;
  isCompleted: boolean;
}

export const TaskSchema: Schema<ITask> = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
