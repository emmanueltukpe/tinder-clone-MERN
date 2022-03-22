import MatchesDisaplay from "./matchesDisplay"
import ChatDisplay from "./chatDisplay"
import ChatHeader from "./chatHeader" 

const ChatContainer = () => {
    return (
        <div className="chat-container"> 
        <ChatHeader/>
        <div>
            <button className="options">Matches</button>
            <button className="options">Chat</button>
        </div>
        <MatchesDisaplay/>
        <ChatDisplay/>
        </div>
    )
}

export default ChatContainer