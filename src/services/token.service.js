const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateAuthTokens = async (user) => {
  const token = jwt.sign({ userId: user._id }, config.jwt.secret, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = {
  generateAuthTokens,
};
