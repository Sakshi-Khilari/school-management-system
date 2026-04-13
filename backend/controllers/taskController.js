const Task = require("../models/Task");

// ➕ Assign Task
exports.addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("studentId");

    console.log("🔥 TASK DATA:", tasks);

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔄 Toggle Complete
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: !task.completed },
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ DELETE TASK (NEW 🔥)
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};