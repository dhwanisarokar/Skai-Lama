const express = require("express");
const { auth } = require("../../middlewares/auth");
const { projectController } = require("../../controllers");
const router = express.Router();

router.post("/", auth, projectController.createProject);
router.get("/", auth, projectController.getProjects);

module.exports = router;
