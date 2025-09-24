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

// optional: root endpoint supaya tidak "Cannot GET /"
app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

// ❌ Hapus app.listen
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server running on port ${port}`));

// ✅ Export app untuk Vercel
export default app;
