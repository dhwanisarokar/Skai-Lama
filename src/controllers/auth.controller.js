const {status} = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { authService, userService, tokenService } = require("../services");

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);

  const tokens = await tokenService.generateAuthTokens(user);

  res.status(status.CREATED).send({ tokens, user });
});


const login = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  const user = await authService.loginUserWithUsernameAndPassword(username, password);
  const tokens = await tokenService.generateAuthTokens(user);

  res.status(status.OK).send({ tokens, user });
});

module.exports = {
  register,
  login,
};
