import express from "express";
import path from "path";
import router from "./routes/api";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., login.html)
app.use(express.static(path.join(__dirname, "../public")));

// Route API
app.use("/api", router);

// Optional: redirect root to login.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
