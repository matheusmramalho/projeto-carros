import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

// Initialize API and set configurations
const app = express();
app.use(express.json());

// ROUTES
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

// Listen Port
app.listen(3333, () => console.log("Server is running!"));
