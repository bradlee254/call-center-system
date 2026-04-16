import { Schema, model, Document, Types } from "mongoose";

export interface INote extends Document {
  note: string;
  call: Types.ObjectId;
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    note: {
      type: String,
      required: true,
    },

    call: {
      type: Schema.Types.ObjectId,
      ref: "Call",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default model<INote>("Note", noteSchema);