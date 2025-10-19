// app.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Load environment variables
const PORT = process.env.PORT || 3000;
const EMAIL = process.env.USER_EMAIL || "abdulsomadsaid05@gmail.com";
const FULL_NAME = process.env.USER_NAME || "Your Full Name";
const STACK = process.env.USER_STACK || "Node.js/Express";
const CATFACT_URL = "https://catfact.ninja/fact";

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// GET /me endpoint
app.get("/me", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const responseData = {
    status: "success",
    user: {
      email: EMAIL,
      name: FULL_NAME,
      stack: STACK,
    },
    timestamp: new Date().toISOString(),
    fact: "",
  };

  try {
    // fetch cat fact from external API
    const response = await axios.get(CATFACT_URL, { timeout: 3000 });
    responseData.fact = response.data.fact || "No cat fact available.";
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    responseData.fact = "Could not fetch cat fact at this time.";
  }

  res.status(200).json(responseData);
});

// optional health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// start server
const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${port}`);
});
