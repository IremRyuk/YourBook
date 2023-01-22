import React, {useEffect, useState} from 'react'
import '../styles/Home/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Posts from './Posts'

export default function Home() {
    let [search, setSearch] = useState('')
    let [postName, setPostName] = useState('')
    let [postCompany, setPostCompany] = useState('')
    let[data,setDataPeopleList] = useState([])
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
          .then(res=>setDataPeopleList(res.data))      
          .catch(err=>err)
        //   you can console this{catch(err)} to see errors
    },[])
    // profile hide and show & animation control
    let fromSH = () => {
        $('#textPost').css({display: 'block'})
        $('.h-p-image').css({animation: 'none', border: '3px solid rgb(137, 74, 232)'})
    }

    let hideForm = () => {
        $('#textPost').css({display: 'none'})
        $('.h-p-image').css({animation: '2s profileAnim infinite'})
    }

    // add information on page
    let formPost = (e) => {
        e.preventDefault()
        setPostName('')
        setPostCompany('')
        alert('posted')
    }
    return (
        <div className='home'>
            <div className='h-nav'>
                <div className='h-links'>
                    <Link className='h-l' to='/help'>Help</Link>
                    <Link className='h-l' to='/profile'>Profile</Link>
                </div>
                <div
                    className='h-profile'
                    id='hProfile'
                    onClick={() => {
                        fromSH()
                    }}>
                    <img
                        src='https://thumbs.dreamstime.com/b/default-placeholder-profile-icon-avatar-gray-man-90197993.jpg'
                        className='h-p-image'
                        alt='profile-yourbook'/>
                    <br/>
                    <form className='text-post' id='textPost' onSubmit={formPost}>
                        {/* remove form */}
                        <div className='delX' onMouseDown={() => hideForm()}><i className="fa-solid fa-x"/></div>
                        {/* form describe */}
                        <center>
                        <textarea
                                placeholder='name...'
                                type='text'
                                className='txt-pst-name'
                                value={postName}
                                onChange={(e) => setPostName(e.target.value)}></textarea>
                            <textarea
                                placeholder='catchphrase...'
                                type='text'
                                className='txt-pst-phrase'
                                value={postCompany}
                                onChange={(e) => setPostCompany(e.target.value)}></textarea>
                        </center>
                        <br/>
                        <div className='h-p-btns'>
                            <input
                                type='reset'
                                className='txt-pst-sub'
                                onClick={() => {
                                    setPostName('')
                                    setPostCompany('')
                                }}/>
                            <input type='submit' className='txt-pst-sub'/>
                        </div>
                    </form>
                </div>
                <input
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                    className='h-texts'
                    placeholder='Search...'/>
            </div>
            <div className='h-c'>
              {data.map(info=>{
              return(
                <Posts key={info.id} main={info}/>
              )
              })}
            </div>
        </div>
    )
}
