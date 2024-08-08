const { Router } = require("express");

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  return res.json([]);
});
userRoutes.get("/:id", (req, res) => {
  return res.status(404).json({ error: "User not found" });
});

module.exports = { userRoutes };
