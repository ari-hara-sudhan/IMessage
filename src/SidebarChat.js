import React, { useEffect, useState } from 'react'
import {Avatar} from "@material-ui/core"
import "./SidebarChat.css"
import { useDispatch } from 'react-redux'
import { setChat } from './features/chatSlice'
import db from './firebase'
import * as timeago from "timeago.js"
function SidebarChat({channel,id}) {
    const dispatch =useDispatch()
    const [chatinfo,setChatinfo]=useState([])



    useEffect(()=>{
        db.collection("chats").doc(id)
        .collection("messages").onSnapshot(snapshot=>{
            setChatinfo(snapshot.docs.map(doc=>doc.data()))
        })

    },[])
    return (
        <div 
        onClick={()=>{
            dispatch(
                setChat({
                    chatId:id,
                    chatName:channel
                })
            )
        }

        }
         className="sidebarchat__chat">
             <Avatar src={chatinfo[0]?.photo}/>
            <div className="sidebarchat__info">
                <h4>{channel}</h4>
                <p>{chatinfo[0]?.message}</p>
                <small className="sidebarchat__timestamp">{timeago.format(new Date(chatinfo[0]?.timestamp?.toDate()))}</small>
            </div>
           
            
        </div>
    )
}

export default SidebarChat
