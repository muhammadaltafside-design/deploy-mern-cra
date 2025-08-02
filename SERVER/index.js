const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = ["https://mern-cra-frontend.onrender.com"];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Backend - CRA" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
