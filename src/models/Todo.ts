import mongoose, { Document, Schema } from "mongoose";

export interface ITodo {
  title: string;
  desc: string;
}

export interface ITodoModel extends ITodo, Document {}

const TodoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: Schema, required: true },
  },
  {
    timestamps: true,
    versionKey: true,
  }
);

export default mongoose.model<ITodoModel>("Todo", TodoSchema);
