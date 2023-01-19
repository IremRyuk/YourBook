import React, { useEffect } from 'react'
import '../styles/Posts/posts.css'

export default function Posts(props) {
    
  return (
        <div className='main-posts'>
    <div className='posts' key={props.main.id}>
      <p className='posts-p'>Posted By: <b>{props.main.username}</b></p>
      <div>
        <p>Email: <b>{props.main.email}</b></p>
        <p>Company Name: <b>{props.main.company.name}</b></p>
        <p>Company CatchPhrase: <b>{props.main.company.catchPhrase}</b></p>
      </div>
    </div>
    </div>
  )
}
