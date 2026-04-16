import express from 'express';
import { createCall, getCalls, assignCall, updateStatus } from '../controllers/call.controller';
import { protect } from '../middleware/middleware';
import{ authorize } from '../middleware/role.middleware';

const router = express.Router();

// create call
router.post("/", protect, createCall);

// get calls
router.get("/", protect, getCalls);

// assign call (admin/supervisor only)
router.put("/:callId/assign", protect, authorize(["ADMIN"]), assignCall);

// update status
router.put("/:callId/status", protect, updateStatus);

export default router;