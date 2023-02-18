import React from 'react'
import '../styles/Posts/posts.css'

export default function Posts({main,addFV}) {
  return (
        <div className='main-posts'>
          <div className='star' onMouseDown={()=>addFV(main)}><i className='fa-solid fa-star'/></div>
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
