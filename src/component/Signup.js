import React,{Component,useState} from "react";
import { useAuth } from "./Authentication";
import { useNavigate} from "react-router-dom";
const Signup = ()=>{
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[userBool,setUserBool] = useState(false)
    const auth = useAuth()
    const navigate = useNavigate()
    const handleSignup=(event)=>{
          const userTaken=auth.userlist.some(x=>x.email===email)
        if(userTaken){
            setUserBool(true)
        }
        else{
            auth.Signup(firstName,lastName,email,password)
            navigate('/signupsuccess')
        }
        event.preventDefault()
    }
    
    const change=(event)=>{
        setEmail(event.target.value)
    }  
    const changepass=(event)=>{
        setPassword(event.target.value)
    }

    return(
        <div className="containerLogin">
            <div className="log1">
            <form onSubmit={handleSignup}>
                <h1>Signup</h1>
            <h3>First Name</h3>
            <input size="30" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required/><br></br>
            <h3>Last Name</h3>
            <input size="30" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/><br></br>
            <h3>Email</h3>
            <input size="30" type="email" value={email} onChange={change} required/><br></br>
            <h3>Password</h3>
            <input size="30" type="password" value={password} onChange={changepass} required/><br></br><br></br>

            <button type="submit">Signup</button><br></br>
            {userBool?<p>Email is already exists</p>:""}
            </form>
            </div>
        </div>
    )
}
export default Signup
