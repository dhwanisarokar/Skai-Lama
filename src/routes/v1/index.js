const express = require("express");
const projectRoute = require("./project.route");
const authRoute = require("./auth.route");

const router = express.Router();

router.use("/projects", projectRoute);
router.use("/auth", authRoute);

module.exports = router;
