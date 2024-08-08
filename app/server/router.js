const { Router } = require("express");
const { userRoutes } = require("./routes/user.routes");

const router = Router();

router.use("/usuario", userRoutes);

module.exports = { router };
