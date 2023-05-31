const express = require("express");
const router = express.Router();
const postUser = require("../handlers/postUser");
const getUserLogin = require("../handlers/getUserLogin");

router.post("/", postUser);
router.get("/", getUserLogin);

module.exports = router;
