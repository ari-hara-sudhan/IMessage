import React, { useEffect, useState } from 'react'
import "./Chat.css"
import MicIcon from '@material-ui/icons/Mic';
import Message from './Message'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChatId, selectChatName } from './features/chatSlice';
import db from './firebase';
import FlipMove from "react-flip-move"
import firebase from 'firebase';
function Chat() {
    const[input,setInput]=useState();
    const[messages,setMessages]=useState([]);
    const chatName=useSelector(selectChatName)
    const chatId=useSelector(selectChatId)
    const user =useSelector(selectUser)

    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName,
            

        })
        setInput("");
    }

    useEffect(()=>{
        if(chatId){
            db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp","desc")
            .onSnapshot(snapshot=>{
                setMessages(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            })
           
        }

    },[chatId])
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To:<span>{chatName}</span></h4>
                <h5 className="chat__details">Details</h5>
            </div>
            <div className="chat__message">

        <FlipMove>
        {
                    messages.map(({id,data})=>(
                        <Message key={id} id={id} contents={data} />
                    ))
                }
        </FlipMove>
               
               
        
                
            </div>
            <div className="chat__footer">
            <form className="chat__form">
  
            <input value={input} onChange={e=>setInput(e.target.value)} className="chat__input"/>
            <MicIcon/>
            <button onClick={sendMessage} type="submit" className="chat__button">send</button>
            

            </form>

            </div>
            
        </div>
    )
}

export default Chat
