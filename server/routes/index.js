const express = require("express");
const {
  login,
  signup,
  genderedUsers,
  getOneUser,
  editUserInfo,
  addMatches,
  getMatchedUsers,
} = require("../controllers/users");
const { getMessages, createMessages } = require("../controllers/messages");

var router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/message").post(createMessages);
router.route("/user").get(getOneUser);
router.route("/users").get(getMatchedUsers);
router.route("/gendered-users").get(genderedUsers);
router.route("/user").put(editUserInfo);
router.route("/addmatch").put(addMatches);
router.route("/messages").get(getMessages);

module.exports = router;
