import mongoose, { Schema, model, Document } from "mongoose";
import { ITask, TaskSchema } from "./task";

export interface IProject {
  title: string;
  progression: number;
  tasks: ITask[];
}

export const ProjectSchema: Schema<IProject> = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    progression: {
      type: Number,
      default: 0,
    },
    tasks: {
      type: [TaskSchema],
      default: [],
    },
  },
  { timestamps: true }
);
