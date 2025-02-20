const { User } = require("../models");
const { status } = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return await User.create({ ...user, password: hashedPassword });
};

module.exports = {
  createUser,
  getUserByUsername,
  getUserById,
};
