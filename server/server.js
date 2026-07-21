const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ add

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);
// User Routes
app.use("/api/user", userRoutes); 

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 FoodZone Server is Running...");
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});