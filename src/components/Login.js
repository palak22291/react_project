import React,{useEffect, useState} from 'react'
import "./Login.css"

function Login (){

const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const[users,setUsers]=useState([]);
  return (
    <>
    <h1 className='login'>Login</h1>
    <div className='container'>
    <label>NAME: </label>
    <input  onChange={(e)=>{
      setUsername(e.target.value + "palak")
    }} value={username} type="text" placeholder="Enter your name" />
    <br></br>
    <label>PASSWORD: </label>
    <input  onChange={(e)=>{
      setPassword(e.target.value+"123")
    }} value={password}type="password" placeholder="Enter your password"/>
    <br></br>

    <button>Login</button>
    </div>




    </>

    
    
  )
}

export default Login