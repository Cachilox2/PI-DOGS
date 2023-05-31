const { createUser } = require("../controllers/userControllers");

const postUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    return res.status(201).json({ message: "registered successffuly"});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postUser;
