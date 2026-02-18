import express from "express";
import { connectToDatabase } from "../models/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    const db = await connectToDatabase();

    const query = category ? { category } : {};

    const results = await db.collection("gifts").find(query).toArray();

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
