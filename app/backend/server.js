const express = require("express");
const app = express();

// Health check endpoint
app.get("/health", (req, res) => {
  res.send("OK from devops-e2e-shop backend");
});

// Sample endpoint
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
