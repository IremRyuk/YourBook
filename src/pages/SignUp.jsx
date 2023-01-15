import React, { useState } from 'react'
import '../styles/Sign/sign.css'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

  // main head

  let [name,setName] = useState('')
  let [gmail,setGmail] = useState('')
  let [pass,setPass] = useState('')
  let goBack = useNavigate()
  let regx = /g(oogle)?mail/

  // create accaunt and send to login Page

  class Person {
    constructor(name,gmail,pass){
      this.name = name
      this.gmail = gmail
      this.pass = pass
    }
  }
  
  let x = new Person(name,gmail,pass)

  let signUp = (e) =>{
e.preventDefault()
console.log(x)
props.information(x)
  }

  // go back

  let backToLogIn = () => {
    goBack('/')
      }
      // test gmail with regEX

  if(regx.test(gmail)){
    console.log('yes')
$('.gmails').css({borderLeft:'5px solid green'})
  }else{
    console.log('no')
    $('.gmails').css({borderLeft:'5px solid red'})
  }


  return (
    <div className='signup'>
      <button className='signup-back-btn' onClick={()=>backToLogIn()}><i className="fa-solid fa-arrow-left" />Log In</button>
      <form className='sign-form' onSubmit={signUp}>
        <center>
        <label className='sign-f-lab'>Enter Your name</label>
        <br />
        <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} className='sign-f-txt' />
        <br />
        <label className='sign-f-lab'>Enter Gmail</label>
        <br />
        <input type='email' placeholder='Gmail' onChange={(e)=>setGmail(e.target.value)} className='sign-f-txt gmails' />
        <br />
        <label className='sign-f-lab'>Enter Your Password</label>
        <br />
        <input type='password' placeholder='Password' onChange={(e)=>setPass(e.target.value)} className='sign-f-txt' />
        <br />
        <label className='sign-f-lab'>Repeate Password</label>
        <br />
        <input type='password'  placeholder='Password'onChange={(e)=>setPass(e.target.value)} className='sign-f-txt' />
        <br />
        <input type='submit' className='sign-f-sub' />
        </center>
      </form>
    </div>
  )
}
