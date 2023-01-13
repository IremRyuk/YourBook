import React, { useState } from 'react'
import '../styles/Login/login.css'
import { Link, useNavigate } from 'react-router-dom'
export default function LogIn() {
    const navigate = useNavigate()
    let [gmail,setGmail] = useState('')
    let [pass,setPass] = useState('')
    let peopleList = ['user@gmail.com','user123']
    let logIn = (e) =>{
        e.preventDefault()
        peopleList.filter(res=>{if(res === gmail || res === pass){
            console.log('yes')
            navigate('/home')
        }else{console.log('no')}
    })
    }
  return (
    <div className='login'>
      <div className='login-box'>
    <form className='login-form' onSubmit={logIn}>
        <input type='email' className='log-f-txt' placeholder='Gmail' onChange={(e)=>setGmail(e.target.value)} />
        <br />
        <input type='password' className='log-f-txt' placeholder='Password'onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <div className='log-btn-btom'>
        <input type='reset' value="Clear" className='log-f-sub' />
        <input type="submit" value="LogIn" className='log-f-sub' />
        </div>
        <center><p className='log-f-text'>Don't Have an Account?</p></center>
        <center><Link to='/signin'className='log-sign'>Sign in Here</Link></center>
    </form>
    <img src='https://cdni.iconscout.com/illustration/premium/thumb/biometric-authentication-2600572-2179757.png' alt="LogIn YourBook" className='login-photo' />
      </div>
    </div>
  )
}
