import axios from "axios";
import Chat from "./chat";
import ChatInput from "./chatInput";
import { useState, useEffect } from "react";

const ChatDisplay = ({ user, clickedUser }) => {
  const [usersMessages, setUsersMessages] = useState(null);
  const [clickedUsersMessages, setClickedUsersMessages] = useState(null);
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const getUserMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/messages", {
        params: { userId: userId, correspondingUserId: clickedUserId },
      });
      setUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClickedUserMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/messages", {
        params: { userId: clickedUserId, correspondingUserId: userId },
      });
      setClickedUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserMessages();
    getClickedUserMessages();
  }, [usersMessages, clickedUsersMessages]);

  const messages = [];
  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.first_name;
    formattedMessage["img"] = user?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["createdAt"] = message.createdAt;
    messages.push(formattedMessage);
  });

  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.first_name;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["createdAt"] = message.createdAt;
    messages.push(formattedMessage);
  });

  const sortedMessages = messages?.sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );

  return (
    <>
      <Chat sortedMessages={sortedMessages} />
      <ChatInput
        user={user}
        clickedUser={clickedUser}
        getUsersMessages={getUserMessages}
        getClickedUserMessages={getClickedUserMessages}
      />
    </>
  );
};
export default ChatDisplay;
