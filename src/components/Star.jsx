import React from 'react'
import '../styles/Star/star.css'

export default function Star(props) {
  return (
    <div className='star-page'>
        {props.fvItems.map(res=>{
            return(
                <div>{res.name}</div>
            )
        })}
    </div>
  )
}
