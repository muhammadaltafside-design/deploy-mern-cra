const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Backend - CRA" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
