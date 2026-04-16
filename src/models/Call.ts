import { Schema, model, Document, Types } from "mongoose";

export type CallStatus = "PENDING" | "ACTIVE" | "RESOLVED";
export type Priority = "LOW" | "MEDIUM" | "HIGH";

export interface ICall extends Document {
    customerName: string;
    customerPhone: string;
    issue: string;
    status: CallStatus;
    priority: Priority;
    assignedTo?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const callSchema = new Schema<ICall>(
    {
        customerName: {
            type: String,
            required: true,
        },
        customerPhone: {
            type: String,
            required: true,
        },
        issue: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "ACTIVE", "RESOLVED"],
            default: "PENDING",
        },
        priority: {
            type: String,
            enum: ["LOW", "MEDIUM", "HIGH"],
            default: "MEDIUM",
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);
    export default model<ICall>("Call", callSchema);
