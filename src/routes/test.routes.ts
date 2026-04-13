import express from "express";
import { protect } from "../middleware/middleware"; 
import { authorize } from "../middleware/role.middleware";

const router = express.Router();

router.get("/protected", protect, (req, res) => {
    res.json({ message: "you are authenticated" });
})

router.get("/admin", protect, authorize(["ADMIN"]), (req, res) => {
    res.json({ message: "This is an admin route" });
});

export default router;