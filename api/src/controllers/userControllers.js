const { User } = require("../db");

const createUser = async (name, email, password) => {
  if (!name || !email || !password) throw Error("Faltan datos perri");
  const newUser = await User.create({
    name,
    email,
    password,
  });
  return newUser;
};

const getUserAccess = async (email, password) => {
  const emailFound = await User.findOne({ where: { email: email } });
  if (!emailFound) {
    return "Invalid date";
  }

  const passwordFound = await User.findOne({
    where: { email: email, password: password },
  });
  if (!passwordFound) {
    return "Invalid dates";
  }

  return passwordFound;
};

module.exports = { createUser, getUserAccess };
