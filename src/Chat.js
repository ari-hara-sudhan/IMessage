import React from 'react'
import "./Chat.css"
import MicIcon from '@material-ui/icons/Mic';
import Message from './Message'
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To:<span>username</span></h4>
                <h5 className="chat__details">Details</h5>
            </div>
            <div className="chat__message">
                <Message/>
        
                
            </div>
            <div className="chat__footer">
            <MicIcon/>
            <input className="chat__input"/>
            <button className="chat__button">send</button>
            
            </div>
            
        </div>
    )
}

export default Chat
