import React from 'react'
import "./Message.css"
import { Avatar } from '@material-ui/core'
function Message() {
    return (
        <div className="message">
         <Avatar/>
         <div className="message__info">
           
            <p>messages</p>
            <p>timestamp</p>
         </div>
            
        </div>
    )
}

export default Message
