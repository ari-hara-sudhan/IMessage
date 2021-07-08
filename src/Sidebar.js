import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
function Sidebar() {
    const user =useSelector(selectUser)
    const[chats,setChats]=useState([]);
    const[roomName,setRoomName]=useState()

    useEffect(()=>{
        db.collection("chats").onSnapshot(snapshot=>{
            setChats(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
         
    },[])
    const addChat=()=>{
        const roomName= (prompt("Enter the Roomname..."))

        if (roomName){
            db.collection("chats").add({
                channel:roomName,
            })
        }
  
    }
    return (
        <div className="sidebar">
        <div className="sidebar__header">
            <Avatar  onClick={()=>auth.signOut()} src={user.photo} className="sidebar__avatar"/>
            <div className="sidebar__input">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div>
            <IconButton>
            <ChatBubbleIcon onClick={addChat} className="sidebar__icon"/> 
            </IconButton>
          
        </div>
        <div className="sidebar__chat">

            {
                chats.map(({id,data})=>(
                    <SidebarChat channel={data.channel} id={id}/>
                ))
            }
           
   
           
        </div>
            
        </div>
    )
}

export default Sidebar
