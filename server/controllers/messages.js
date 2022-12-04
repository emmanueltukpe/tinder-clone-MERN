const Message = require("../models/messages");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getMessages = async (req, res) => {
  const { userId, correspondingUserId } = req.query;
  const query = {
    from_user_id: userId,
    to_user_id: correspondingUserId,
  };
  const foundMessages = await Message.find(query);
  res.status(StatusCodes.OK).send(foundMessages);
};

const createMessages = async (req,res) => {
  message = req.body.message
  const insertMessage = await Message.insertMany(message)
  res.status(StatusCodes.CREATED).send({insertMessage})
}

module.exports = { getMessages, createMessages };
