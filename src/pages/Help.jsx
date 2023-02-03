import React from 'react'
import '../styles/Help/help.css'
import { Link } from 'react-router-dom'
import Girl from '../storage/girlChair.png'
import { useState } from 'react'

export default function Help() {
    let [userName,setUserName] = useState('')
    let [userProb,setUserProb] = useState('')
    class UserProblem {
        constructor(name,problem){
            this.name = name
            this.problem = problem
        }
    }
    let x = new UserProblem(userName,userProb)
    let Help = (e) =>{
        e.preventDefault()
        alert('got info')
        $('.ghostForm').css({right:'5%'})
        console.log(x)
    }
  return (
    <div className='help'>
      <header className='hp-header'><Link to='/home' className='hp-header-lk'>YourBook</Link></header>
      <div className='help-center'>
        <form className='hp-fm' onSubmit={Help}>
            <center>
<input type='email' className='hp-txt' placeholder='Your Gmail...' onChange={(e)=>setUserName(e.target.value)}/>
<br />
<textarea className='hp-txt-area' placeholder='Your Problem...' onChange={(e)=>setUserProb(e.target.value)}></textarea>
<input type='submit' className='hp-sub'/>
</center>
        </form>
        <img src={Girl} alt='Yourbook Help Center'  className='hp-girl'/>
      </div>
      <div className='ghostForm' id='ghost2' onClick={()=>{$('.ghostForm').css({right:'-150%'})}}><p>Problem Sent</p></div>
    </div>
  )
}
