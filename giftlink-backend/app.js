import express from "express";
import dotenv from "dotenv";
import giftRoutes from "./routes/giftRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/gifts", giftRoutes);
app.use("/api/gifts/search", searchRoutes);   // ✅ Task 7

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
