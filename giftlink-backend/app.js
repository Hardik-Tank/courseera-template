import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import giftRoutes from "./routes/giftRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());   // 🔥 VERY IMPORTANT
app.use(express.json());

app.use("/api/gifts", giftRoutes);
app.use("/api/gifts/search", searchRoutes);
app.use("/api/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
