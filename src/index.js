import express from "express";
import dotenv from "dotenv";
import medicationRoutes from "./routes/medicationRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// routes
app.use("/api/suppliers", supplierRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/medications", medicationRoutes);

// ✅ Root endpoint: langsung return data medications
import { getAllMedications } from "./controllers/medicationController.js";

app.get("/", async (req, res) => {
  try {
    const data = await getAllMedications(req, res, true); // panggil controller, return data
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch medications", error: error.message });
  }
});

// ❌ Jangan gunakan app.listen
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
