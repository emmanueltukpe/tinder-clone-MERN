import { useState } from "react"

const ChatInput = () => {
    const [textArea, setTextArea] =  useState(null)
    return (
        <div className="class-input">
            <textarea value={textArea} onChange={(e)=> setTextArea(e.target.value)}/>
            <button className="secondary-button ">
                SUBMIT
            </button>
        </div>
    )
}

export default ChatInput