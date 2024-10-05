import mongoose, { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
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

const Task =
  (mongoose.models.Task as mongoose.Model<ITask>) ||
  model<ITask>("Task", TaskSchema);

export default Task;
