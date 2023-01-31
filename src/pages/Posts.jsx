import React from 'react'
import '../styles/Posts/posts.css'
import { useState } from 'react'

export default function Posts(props) {
let [orange,setOrange] = useState(true)
  return (
        <div className='main-posts'>
          <div className='star'><i className={orange?'fa-solid fa-star':'fa-solid fa-star orange'} onClick={()=>setOrange(e=>!e)}/></div>
    <div className='posts' key={props.main.id}>
      <p className='posts-p'>Posted By: <b>{props.main.username}</b></p>
      <div>
        <p>Email: <b>{props.main.email}</b></p>
        {/* <p>Company Name: <b>{props.main.company.name}</b></p>
         <p>Company CatchPhrase: <b>{props.main.company.catchPhrase}</b></p> */}
      </div>
    </div>
    </div>
  )
}
