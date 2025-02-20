const config = require("../config/config");
const ApiError = require("../utils/ApiError");
const { status } = require("http-status");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return next(new ApiError(status.UNAUTHORIZED, "Unauthorized"));

  jwt.verify(token, config.jwt.secret, (err, decoded) => {
    if (err)
      return next(new ApiError(status.UNAUTHORIZED, "Invalid token"));
    req.userId = decoded.userId;
    next();
  });
};

module.exports = {
  auth,
};
