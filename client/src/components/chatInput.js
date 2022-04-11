import axios from "axios";
import { useState } from "react";

const ChatInput = ({
  user,
  clickedUser,
  getClickedUserMessages,
}) => {
  const [textArea, setTextArea] = useState("");
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const addMessage = async () => {
    const message = {
      createdAt: new Date().toISOString(),
      from_user_id: userId,
      to_user_id: clickedUserId,
      message: textArea,
    };
    try {
      await axios.post("http://localhost:8000/message", { message });
      //getUserMessages();
      getClickedUserMessages();
      setTextArea("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="class-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button" onClick={addMessage}>
        SUBMIT
      </button>
    </div>
  );
};

export default ChatInput;