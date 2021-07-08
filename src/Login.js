import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
function Login() {
    const signin=()=>{
      auth.signInWithPopup(provider)
      .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
           <div className="login__logo">
               <img src="https://www.bing.com/th?id=OIP.zdJzdXMEXE0HKhBGTY5inwHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="imsg"/>
               <h1>iMessage</h1>
           </div>

           <Button onClick={signin}>Sign In</Button>
        </div>
    )
}

export default Login
