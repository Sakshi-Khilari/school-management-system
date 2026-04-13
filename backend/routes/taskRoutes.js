const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  addTask,
  getTasks,
  completeTask,
  deleteTask
} = require("../controllers/taskController");

// ➕ Add task
router.post("/", auth, addTask);

// 📄 Get tasks
router.get("/", auth, getTasks);

// 🔄 Toggle complete
router.put("/:id", auth, completeTask);

// ❌ Delete task
router.delete("/:id", auth, deleteTask);

module.exports = router;