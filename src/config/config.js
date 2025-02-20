require("dotenv").config();

module.exports = {
  mongoose: {
    url: process.env.MONGODB_URL,
  },
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
