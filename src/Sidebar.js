import React from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
function Sidebar() {
    const user =useSelector(selectUser)
    return (
        <div className="sidebar">
        <div className="sidebar__header">
            <Avatar onClick={()=>auth.signOut()} src={user.photo} className="sidebar__avatar"/>
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
