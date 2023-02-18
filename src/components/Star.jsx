import React from 'react'
import '../styles/Star/star.css'

export default function Star(props) {
  return (
    <div className='star-page'>
        {props.fvItems.map(res=>{
            return(
                <center key={res.id}><div className='star-box'>
                  <p>{res.username}</p>
                  <p>{res.email}</p>
                  <p>{res.phone}</p>
                  </div></center>
            )
        })}
    </div>
  )
}
