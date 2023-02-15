import React from 'react'
import '../styles/Star/star.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Star(props) {
  return (
    <div className='star-page'>
      <div className='star-clear'>Clear</div>
        {props.fvItems.map(res=>{
            return(
                <div key={res.id}>{res.username}</div>
            )
        })}
    </div>
  )
}
