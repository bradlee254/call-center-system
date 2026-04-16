import { Request, Response } from "express";
import Call from "../models/Call";

export const createCall = async (req: Request, res: Response) => {
    try {
        const { customerName, customerPhone, issue, priority } = req.body;

        const call = await Call.create({
            customerName,
            customerPhone,
            issue,
            priority,
        });
        res.status(201).json(call);
    } catch (error) {
        res.status(500).json({ message: "Error creating call", error });

    }
};

export const getCalls = async ( req: Request, res: Response) => {
    try {
        const calls = await Call.find().populate("assignedTo", "name email");
        res.status(200).json(calls);
    } catch (error: any) {
        res.status(500).json({ message: "Error fetching calls", error });
    }
};

export const assignCall = async (req: Request, res: Response) => {
    try {
        const { callId } = req.params;
        const { agentId } = req.body;

        const call = await Call.findByIdAndUpdate(
            callId,
            { assignedTo: agentId, status: "ACTIVE" },
            { new: true }
        );
        res.json(call);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
