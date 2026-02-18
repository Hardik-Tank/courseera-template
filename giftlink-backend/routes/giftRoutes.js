import express from "express";
import { connectToDatabase } from "../models/db.js";

const router = express.Router();

// GET all gifts  →  /api/gifts
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();   // ✅ Task 4 requirement
    const gifts = await db.collection("gifts").find().toArray();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET gift by id → /api/gifts/:id
router.get("/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gift = await db.collection("gifts").findOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(gift);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
