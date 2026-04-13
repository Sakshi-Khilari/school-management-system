const express = require("express");
const router = express.Router();

// 🔐 middleware import (IMPORTANT)
const auth = require("../middleware/authMiddleware");

const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

// ✅ routes (secured)
router.post("/", auth, addStudent);
router.get("/", auth, getStudents);
router.put("/:id", auth, updateStudent);
router.delete("/:id", auth, deleteStudent);

module.exports = router;