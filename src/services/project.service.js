const { Project } = require("../models");

const createProject = async (name, userId) => {
  return await Project.create(name, userId);
};

const getProjects = async (userId) => {
  return await Project.find({ userId });
};

module.exports = {
  createProject,
  getProjects,
};
