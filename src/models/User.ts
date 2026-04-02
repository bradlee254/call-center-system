import { model, Schema } from "mongoose";

export type UserRole = "ADMIN" | "SUPERVISOR" | "AGENT";

export interface IUser {
  name: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "SUPERVISOR", "AGENT"],
      default: "AGENT",
    },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
