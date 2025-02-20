const { status } = require("http-status");

const catchAsync = require("../utils/catchAsync");
const { projectService } = require("../services");

const createProject = catchAsync(async (req, res) => {
  const project = projectService.createProject(req.body.name, req.userId);
  res.status(status.CREATED).send(project);
});

const getProjects = catchAsync(async (req, res) => {
  const projects = projectService.getProjects(req.userId);
  res.send(projects);
});

module.exports = {
    createProject,
    getProjects
}