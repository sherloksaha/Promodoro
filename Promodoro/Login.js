import React, { useState } from "react";
import {auth} from './Firebase';
import { useNavigate } from "react-router-dom";
import classes from './Login.module.css';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
function Login(){
    let navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    function signIN(){
        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{navigate('/home')}).catch(err=>console.log(err))
    }
    function Register(){
        createUserWithEmailAndPassword(auth,email,password)
        .then((auth)=>{navigate('/home')}).catch((err)=>{})
    }
    return(
        <>
        <div className={classes.d4}>
            <h1>Sign-in</h1>
            <label>Email</label>
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} autoComplete="off"/>
            <label>Password</label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} autoComplete="off"/>
            <button onClick={signIN}> sign-in</button>
            <p><b>Note: If you don't have an account , type the
            Email and Password and then click **Sign-up**</b></p><br/>
            <button onClick={Register}>Sign-Up</button>
        </div>
        </>
    )
}
export default Login