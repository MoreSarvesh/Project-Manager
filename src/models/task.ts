import mongoose, { Schema, model, Document } from "mongoose";

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export interface ITask {
  title: string;
  priority: TaskPriority;
  isCompleted: boolean;
}

export const TaskSchema: Schema<ITask> = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ["LOW", "MEDIUM", "HIGH"],
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
