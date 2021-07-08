import React from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__header">
            <Avatar className="sidebar__avatar"/>
            <div className="sidebar__input">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div>
            <IconButton>
            <ChatBubbleIcon className="sidebar__icon"/> 
            </IconButton>
          
        </div>
        <div className="sidebar__chat">
           <SidebarChat/>
   
           
        </div>
            
        </div>
    )
}

export default Sidebar
