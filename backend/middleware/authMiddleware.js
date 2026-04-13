const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token" });
    }

    // 🔥 Bearer remove करतो
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "secret123");

    req.user = decoded;
    next();

  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};