import React from 'react'
import '../styles/Posts/posts.css'
import { useState } from 'react'

export default function Posts({main,addFV}) {
let [orange,setOrange] = useState(true)
  return (
        <div className='main-posts'>
          <div className='star'><i className={orange?'fa-solid fa-star':'fa-solid fa-star orange'} onMouseDown={()=>setOrange(e=>!e)} onClick={()=>addFV(main)}/></div>
    <div className='posts' key={main.id}>
      <p className='posts-p'>Nickname: <b className='big'>{main.username}</b></p>
      <p className='posts-p'>Email: <b className='big'>{main.email}</b></p>
      <div>
          <p>Company Name: <b>{main.company.name}</b></p> 
          <p>Contact Us: <b>{main.phone}</b></p> 
        <p>Company Description: <b>{main.company.catchPhrase}</b></p>
      </div>
    </div>
    </div>
  )
}
