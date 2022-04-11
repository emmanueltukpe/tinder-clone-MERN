const Users = require("../models/users");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const generateduserId = uuidv4();
  const hashedpassword = await bcrypt.hash(password, 10);
  const sanitizedEmail = email.toLowerCase();
  const data = {
    user_id: generateduserId,
    email: sanitizedEmail,
    hashed_password: hashedpassword,
  };
  const insertedUser = await Users.insertMany(data);
  const token = jwt.sign({ insertedUser, sanitizedEmail }, "Secret", {
    expiresIn: 60 * 2400,
  });
  res.status(StatusCodes.CREATED).json({ token, userId: generateduserId });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  const correctPassword = await bcrypt.compare(password, user.hashed_password);
  if (user && correctPassword) {
    const token = jwt.sign({ user, email }, "Secret", { expiresIn: 60 * 2400 });
    res.status(StatusCodes.CREATED).json({ token, userId: user.user_id });
  } else {
    throw new BadRequestError("please provode your correct email and password");
  }
};

const getOneUser = async (req, res) => {
  const userId = req.query.userId;
  const query = { user_id: userId };
  const user = await Users.findOne(query);
  res.status(StatusCodes.OK).send(user);
};

const genderedUsers = async (req, res) => {
  const gender = req.query.gender;
  const query = { gender_identity: { $eq: gender } };
  const foundUsers = await Users.find(query);
  res.status(StatusCodes.OK).send(foundUsers);
};

const editUserInfo = async (req, res) => {
  const formData = req.body.formData;
  const query = { user_id: formData.user_id };
  const updateDocument = {
    $set: {
      first_name: formData.first_name,
      dob_day: formData.dob_day,
      dob_month: formData.dob_month,
      dob_year: formData.dob_year,
      show_gender: formData.show_gender,
      gender_identity: formData.gender_identity,
      gender_interest: formData.gender_interest,
      url: formData.url,
      about: formData.about,
      matches: formData.matches,
    },
  };
  const insertedUser = await Users.updateOne(query, updateDocument);
  res.status(StatusCodes.OK).send(insertedUser);
};

const addMatches = async (req, res) => {
  const { userId, matchedUserId } = req.body;
  const query = { user_id: userId };
  const updateDocument = {
    $push: { matches: { user_id: matchedUserId } },
  };
  const user = await Users.updateOne(query, updateDocument);
  res.status(StatusCodes.OK).send(user);
};

const getMatchedUsers = async (req, res) => {
  const userIds = JSON.parse(req.query.userIds);
  const pipeline = [
    {
      '$match': {
        'user_id': {
          '$in': userIds,
        },
      },
    },
  ];
  const foundUsers = await Users.aggregate(pipeline);
  res.status(StatusCodes.OK).send(foundUsers);
};

module.exports = {
  signup,
  login,
  genderedUsers,
  getOneUser,
  editUserInfo,
  addMatches,
  getMatchedUsers,
};
