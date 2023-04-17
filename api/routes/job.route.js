import express from "express";
import {
  createjob,
  deletejob,
  getjob,
  getjobs,
  updatejob
} from "../controllers/job.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createjob);
router.delete("/:id", verifyToken, deletejob);
router.put("/:id", updatejob);
router.get("/one/:id", getjob);
router.get("/", getjobs); 

export default router;
