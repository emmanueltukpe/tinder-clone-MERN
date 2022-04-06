const express = require('express')
const {login, signup, genderedUsers, getOneUser, editUserInfo, addMatches} = require ("../controllers/users")

var router = express.Router()

router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/user").get(getOneUser)
router.route("/gendered-users").get(genderedUsers)
router.route("/user").put(editUserInfo)
router.route("/addmatch").put(addMatches)

module.exports = router