import MatchesDisplay from "./matchesDisplay";
import ChatDisplay from "./chatDisplay";
import ChatHeader from "./chatHeader";
import { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatHeader user={user} />
      <div>
        <button className="options" onClick={() => setClickedUser(null)}>
          Matches
        </button>
        <button className="options" disabled={!clickedUser}>
          Chat
        </button>
      </div>
      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}
      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}

    </div>
  );
}; 

export default ChatContainer;
