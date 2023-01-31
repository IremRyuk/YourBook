import React, {useEffect, useState} from 'react'
import '../styles/Home/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Posts from './Posts'
import {useReducer} from 'react'
let reducer = (state, action) => {
    switch (action.type) {
        case 'username':
            return {
                ...state,
                username: action.value
            }
        case 'companyEmail':
            return {
                ...state,
                email: action.value
            }
        case 'companyName':
            return {
                ...state,
                companyName: action.value
            }
        case 'companyCatchPhrase':
            return {
                ...state,
                companyCatchPhrase: action.value
            }
        default:
            state
    }
}
export default function Home() {
    let [search, setSearch] = useState('')
    const [state, dispatch] = useReducer(reducer, {
        username: '',
        email: '',
        companyName: '',
        companyCatchPhrase: ''
    })
    let [data, setDataPeopleList] = useState([])
    let [loading, setLoading] = useState(true)
    // information got from jsonplaceholder
    let servers = 'https://jsonplaceholder.typicode.com/users'
    // get information from jsonplaceholder
    const peopleInfo = async () => {
        let mainLink = await axios.get(servers)
        setDataPeopleList(mainLink.data)
        setLoading(false)
    }
    // run serverInfo
    useEffect(() => {
        peopleInfo()
    }, [])
    // profile hide and show & animation control
    let fromSH = () => {
        $('#textPost').css({display: 'block'})
        $('.h-p-image').css({animation: 'none', border: '3px solid rgb(137, 74, 232)'})
    }

    let hideForm = () => {
        $('#textPost').css({display: 'none'})
        $('.h-p-image').css({animation: '2s profileAnim infinite'})
    }

    // add information on page  post request
    let number = 10
    let formPost = async () => {
        number += 1
        let datae = {
            id: number,
            username: state.username,
            email: state.email,
            companyname:state.companyName,
            catchPhrase:state.companyCatchPhrase
        }
        await axios.post(servers, datae)
        setDataPeopleList([
            datae, ...data
        ])
        // setPostName('')
        dispatch({type: 'username', value: ''})
        dispatch({type: 'companyEmail', value: ''})
        dispatch({type: 'companyName', value: ''})
        dispatch({type: 'companyCatchPhrase', value: ''})
        hideForm()
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
                    <div className='text-post' id='textPost'>
                        {/* remove form */}
                        <div className='delX' onMouseDown={() => hideForm()}><i className="fa-solid fa-x"/></div>
                        {/* form describe */}
                        <center>
                            <input
                                placeholder='name...'
                                type='text'
                                className='txt-pst-name'
                                value={state.username}
                                onChange={(e) => dispatch({type: 'username', value: e.target.value})}/>
                            <input
                                placeholder='email...'
                                type='email'
                                className='txt-pst-phrase'
                                value={state.email}
                                required="required"
                                onChange={(e) => dispatch({type: 'companyEmail', value: e.target.value})}/>
                            {/* <input
                                placeholder='companyName...'
                                type='text'
                                className='txt-pst-phrase'
                                value={state.companyName}
                                required="required"
                                onChange={(e) => dispatch({type: 'companyName', value: e.target.value})}/>
                            <input
                                placeholder='phrase...'
                                type='text'
                                className='txt-pst-phrase'
                                value={state.companyCatchPhrase}
                                required="required"
                                onChange={(e) => dispatch({type: 'companyCatchPhrase', value: e.target.value})}/> */}
                        </center>
                        <br/>
                        <div className='h-p-btns'>
                            <input
                                type='reset'
                                className='txt-pst-sub'
                                onClick={() => {
                                    dispatch({type: 'username', value: ''})
                                    dispatch({type: 'companyEmail', value: ''})
                                }}/>
                            <button className='txt-pst-sub' onClick={() => formPost()}>Post</button>
                        </div>
                    </div>
                </div>
                <input
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                    className='h-texts'
                    placeholder='Search Name or Job...'/>
            </div>
            <center>
                <div className='h-c'>
                    {
                        loading
                            ? <h1>Loading Please Wait...</h1>
                            : data
                                .filter(searches => {
                                    if (search === '') {
                                        return searches
                                    } else if (searches.company.catchPhrase.toLowerCase().includes(search.toLowerCase()) || searches.username.toLowerCase().includes(search.toLowerCase())) {
                                        return search
                                    }
                                })
                                .map(info => {
                                    return (<Posts key={info.id} main={info}/>)
                                })
                    }
                </div>
            </center>
        </div>
    )
}
