import React, { useState } from 'react'
import First from './First';
import Session from './Session';
import classes from './Display.module.css';
import classe from './First.module.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './Firebase';
import {useNavigate} from 'react-router-dom';
function Display() {
    let navigate=useNavigate();
    const[user,loading,error]=useAuthState(auth);
    const[displayTime,setDisplayTime]=useState(25*60);
    const[breakTime,setBreakTime]=useState(5*60);
    const[SessionTime,setSessionTime]=useState(25*60);
    const[onbreak,setOnBreak]=useState(false);
    const[running,setRunnin]=useState(false);
    const formatTime=(time)=>{
        let minuntes=Math.floor(time/60);
        let second= time%60;
        return ((minuntes<10?"0"+ minuntes : minuntes) + ":" + 
        (second<10?"0"+second:second))
    }
   

    function controll(){
        let seconds=1000;
        let dates= new Date().getTime();
        let nextDate= new Date().getTime()+seconds;
        let onBreakVar=onbreak;
        if(!running){
            let interval=setInterval(()=>{
                dates=new Date().getTime();
                if(dates>nextDate){
                    setDisplayTime((perv)=>{
                        if(perv<=0 && !onBreakVar){
                            onBreakVar=true;
                            setOnBreak(true);
                            
                            return breakTime;
                        }else if(perv<=0 && onBreakVar){
                            onBreakVar=false;
                            setOnBreak(false);
                           
                            return SessionTime;
                        }
                        return perv-1;
                    });
                    nextDate +=seconds;
                }
            },30);
            localStorage.clear();
            localStorage.setItem('interval',interval);
        }
        if(running){
            clearInterval(localStorage.getItem('interval'));
        }
        setRunnin(!running);
    }


    function resettime(){
        setDisplayTime(25*60);
        setBreakTime(5*60);
        setSessionTime(25*60);
    }
    function signOutpage(){
        auth.signOut();
        navigate('/');
    }
    return (
        <div>
        <h3>You have been logged in</h3>
        <div className={classe.div3}>
            <First title={"Your Break"} 
                type={"break"} time={breakTime} formatTime={formatTime}
            /><br/>
             <Session title={"Your Session"} 
                type={"session"} time={SessionTime} formatTime={formatTime}
            />
        </div>
            
            <div className={classes.div1}>
            <h3>{onbreak?"Your Break Count Down":"Your Coutnter Count Down"}</h3>
            <h1>{ formatTime(displayTime)}</h1>
            <div className={classes.div2}>
            <button onClick={controll}>{
                (running?"Pause":"Start")
            }</button><button className={classes.n}>{' '}</button>
            <button onClick={resettime}>Reset</button>
            </div>
            <button onClick={signOutpage}>SignOut</button>
            </div>
           
        </div>
    )
}

export default Display;