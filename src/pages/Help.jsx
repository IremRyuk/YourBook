import React from 'react'
import '../styles/Help/help.css'
import {Link} from 'react-router-dom'
import Girl from '../storage/girlChair.png'
import {useState} from 'react'
import FCB from '../storage/fb.png'
import IN from '../storage/in.png'
import InstaGif from '../storage/instaGif.gif'
import FbGif from '../storage/fbGif.gif'
import WpGif from '../storage/wpGif.gif'
import WP from '../storage/wp.png'
import { useReducer } from 'react'
import { Initial_Values, reducer } from '../components/UseReduce'

export default function Help() {
    let [userName, setUserName] = useState('')
    let [userProb, setUserProb] = useState('')
    const [state,dispatch] = useReducer(reducer,Initial_Values)
    class UserProblem {
        constructor(name, problem) {
            this.name = name
            this.problem = problem
        }
    }
    
    // test inputs values
    let x = new UserProblem(userName, userProb)
    let Help = (e) => {
        e.preventDefault()
        if (userName === '' || userProb === '') {
            $('.ghostForm2').css({right: '5%'})
        } else {
          console.log(x)
            $('.ghostForm').css({right: '5%'})
            setUserName('')
            setUserProb('')
        }

    }
    return (
        <div className='help'>
            <header className='hp-header'>
                <Link to='/home' className='hp-header-lk'>Y o u r B o o k</Link>
            </header>
            <div className='help-center'>
                <form className='hp-fm' onSubmit={Help}>
                    <center>
                        <input
                            type='email'
                            className='hp-txt'
                            placeholder='Your Gmail...'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                        <br/>
                        <textarea
                            className='hp-txt-area'
                            placeholder='Your Problem...'
                            value={userProb}
                            onChange={(e) => setUserProb(e.target.value)}></textarea>
                        <input type='submit' className='hp-sub'/>
                    </center>
                </form>
                <img src={Girl} alt='Yourbook Help Center' className='hp-girl'/>
            </div>
            <div className='hp-socials'>
                <a href='https://www.facebook.com' target="_blank"><img onMouseEnter={()=>dispatch({type:'facebook'})} onMouseLeave={()=>dispatch({type:'facebookR'})} src={state.staticFb?FCB:FbGif} className='svgLinks'/></a>
                <a href='https://www.Instagram.com' target="_blank"><img onMouseEnter={()=>dispatch({type:'insta'})} onMouseLeave={()=>dispatch({type:'instaR'})} src={state.staticInsta?IN:InstaGif} className='svgLinks'/></a>
                <a href='https://www.whatsapp.com' target="_blank"><img onMouseEnter={()=>dispatch({type:'wp'})} onMouseLeave={()=>dispatch({type:'wpR'})} src={state.staticWP?WP:WpGif} className='svgLinks'/></a>
            </div>
            <div
                className='ghostForm'
                id='ghost2'
                onClick={() => {
                    $('.ghostForm').css({right: '-150%'})
                }}>
                <p>Problem Sent</p>
            </div>
            <div
                className='ghostForm2'
                id='ghost22'
                onClick={() => {
                    $('.ghostForm2').css({right: '-150%'})
                }}>
                <p>Please Fill Inputs</p>
            </div>
        </div>
    )
}
