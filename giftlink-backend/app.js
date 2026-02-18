import express from "express";
import dotenv from "dotenv";
import giftRoutes from "./routes/giftRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/gifts", giftRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
