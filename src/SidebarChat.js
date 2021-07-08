import React from 'react'
import {Avatar} from "@material-ui/core"
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarchat__chat">
             <Avatar/>
            <div className="sidebarchat__info">
                <h4>username</h4>
                <p>message</p>
                <p className="sidebarchat__timestamp">timestamp</p>
            </div>
           
            
        </div>
    )
}

export default SidebarChat
