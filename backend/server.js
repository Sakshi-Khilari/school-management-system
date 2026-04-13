const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ routes import
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

// ✅ use routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running");
});





// ✅ MongoDB connect + server start (FIXED 🔥)
mongoose.connect("mongodb://127.0.0.1:27017/schoolDB")
.then(() => {
  console.log("MongoDB Connected");

  // 👉 server DB connect झाल्यावरच start होईल
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });

})
.catch(err => console.log(err));