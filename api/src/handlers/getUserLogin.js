const { getUserAccess } = require("../controllers/userControllers");

const getUserLogin = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password)
      return res
        .status(400)
        .json({ access: false, message: "Dates incompleted" });

    const userFound = await getUserAccess(email, password);

    if (typeof userFound != "string")
      return res.status(200).json({ access: true, userFound });

    return res.status(400).json({ access: false, message: userFound });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getUserLogin;
