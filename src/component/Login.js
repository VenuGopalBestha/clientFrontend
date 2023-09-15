import React from "react";
import { useState } from "react";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const auth=useAuth()
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [lis,setLis] = useState(true)
    const change =(event)=>{
        setEmail(event.target.value)
    }
    const changepass=(event)=>{
        setPassword(event.target.value)
    }
    const handlelogin=(event)=>{
        console.log(auth.userlist)
        auth.userlist.map(x=>{
            if(x.email === email && x.password === password){
                auth.login(email)
                navigate('/loginsuccess')
                setLis(true)
            }else{
                setLis(false)
            }
        })
        event.preventDefault()
    }
    return(
            <div className="containerLogin">
            <div className="log1">
            <form onSubmit={handlelogin}>
                <br></br><h1>Login Page</h1>
            <h3>
                Email
            </h3>
            <input type="email" size="30"  value={email} onChange={change} required/>
            
            <h3><label>
                Password           
            </label></h3>
            <input size="30" type="password" value={password} onChange={changepass} required/><br></br><br></br>
            <button  type="submit">Login</button>
            </form>
            {!lis ? <p>Invalid Username and Password</p>:''}
            <h3>If you do not have an account</h3>
            <button><a href="/signup" className="signupbutton">Sign Up</a></button>
                
        
            </div>
            </div>
    )
}
export default Login