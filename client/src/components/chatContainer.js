import MatchesDisaplay from "./matchesDisplay";
import ChatDisplay from "./chatDisplay";
import ChatHeader from "./chatHeader";

const ChatContainer = ({ user }) => {
  return (
    <div className="chat-container">
      <ChatHeader user={user}/>
      <div>
        <button className="options">Matches</button>
        <button className="options">Chat</button>
      </div>
      <MatchesDisaplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
