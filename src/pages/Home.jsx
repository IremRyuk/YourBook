import React, {useEffect, useState} from 'react'
import '../styles/Home/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Posts from './Posts'
import {useReducer} from 'react'
import {Initial_Values, reducer} from '../components/UseReduce'

export default function Home() {
    let [search, setSearch] = useState('')
    const [state, dispatch] = useReducer(reducer, Initial_Values)
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
    let formPost = async (e) => {
        number += 1
        e.preventDefault()

        let datae = {
            id: number,
            username: state.username,
            phone: state.phoneNumber,
            email: state.email,
            company: {
                name: state.companyName,
                catchPhrase: state.catchPhrase
            }
        }
        await axios.post(servers, datae)
        setDataPeopleList([
            datae, ...data
        ])
        // clear user inputs
        clear()
        // hide form 
        hideForm()
    }
    // clears
    const clear = () => {
        dispatch({type: 'username', payload: ''})
        dispatch({type: 'phoneNumber', payload: ''})
        dispatch({type: 'email', payload: ''})
        dispatch({type: 'companyName', payload: ''})
        dispatch({type: 'catchPhrase', payload: ''})
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
                            <input
                                placeholder='name...'
                                type='text'
                                className='txt-pst-name'
                                value={state.username}
                                required="required"
                                onChange={(e) => dispatch({type: 'username', payload: e.target.value})}/>
                            <input
                                placeholder='phone...'
                                type='number'
                                className='txt-pst-number'
                                required="required"
                                value={state.phoneNumber}
                                onChange={(e) => dispatch({type: 'phoneNumber', payload: e.target.value})}/>
                            <input
                                placeholder='email...'
                                type='email'
                                className='txt-pst-phrase'
                                required="required"
                                value={state.email}
                                onChange={(e) => dispatch({type: 'email', payload: e.target.value})}/>
                            <input
                                placeholder='describe name...'
                                type='text'
                                className='txt-pst-phrase'
                                required="required"
                                value={state.companyName}
                                onChange={(e) => dispatch({type: 'companyName', payload: e.target.value})}/>
                            <input
                                placeholder='describe company...'
                                type='text'
                                className='txt-pst-phrase'
                                required="required"
                                value={state.catchPhrase}
                                onChange={(e) => dispatch({type: 'catchPhrase', payload: e.target.value})}/>
                        </center>
                        <br/>
                        <div className='h-p-btns'>
                            <input
                                type='reset'
                                className='txt-pst-sub'
                                onClick={() => {
                                    clear()
                                }}/> {/* <button className='txt-pst-sub' onClick={() => formPost()}>Post</button> */}
                            <input type='submit' className='txt-pst-sub'/>
                        </div>
                    </form>
                </div>
                <input
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                    className='h-texts'
                    placeholder='Search Name or ...'/>
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
