import React, { useReducer } from 'react'
import '../styles/Profile/profile.css'
import { Link } from 'react-router-dom'
import ProfileBg from '../storage/profile/bgT.png'
import { Initial_Values_Profile, reducer } from '../components/useReducerProfile'

export default function Profile() {
  let mainCharecter = localStorage.getItem('userName')
  let mainGmail = localStorage.getItem('userGmail')
  // regEX
  const regex = /@gmail/gm;
  // user profile initioal values
  const [state, dispatch] = useReducer(reducer,Initial_Values_Profile)
  
  let changeName = () =>{
    try {
      let newName = state.nameProfile
      localStorage.setItem('userName',newName)
     $('.heroName').css({animation:'MainNameAnime 1s infinite'})
  dispatch({type:'nameProfile',payload:''})  
setTimeout(()=>{  $('.heroName').css({animation:'none'})},1000)
    } catch (error) {
      alert('Something Gone Wrong' + error)
    }
  }
  let changeGmail = () =>{
    if(regex.test(state.nameGmail)){
      try {
        let newGmail = state.nameGmail
        localStorage.setItem('userGmail',newGmail)
    dispatch({type:'nameGmail',payload:''})  
      } catch (error) {
        alert('Something Gone Wrong' + error)
      }
    }else{
      console.log('Problem In Gmail Input')
    }
  }
  return (
    <div className='profile'>
<header className='profile-header'>
  <center><Link to='/home' className='profile-link'>Y O U R B O O K</Link></center>
 <p className='profile-name'>Welcome <span className='heroName'>{mainCharecter}</span> on your page</p>
</header>
<div className='profile-settings'>
  <div className='profile-left-side'>
  <p className='profile-show-name'>Name: <b style={{textTransform:'capitalize'}}>{mainCharecter}</b></p>
<input type='text' className='profile-inp-name' placeholder='new name...' onChange={(e)=>{dispatch({type:'nameProfile', payload:e.target.value})}} value={state.nameProfile}/>

<br />
<button className='profile-sub' onClick={()=>changeName()}>Change Name</button>
<br />
<div className='line'></div>
<p className='profile-show-name'>Change Gmail <b>{mainGmail}</b></p>
<br />
<input type='email' className='profile-inp-name' placeholder='new gmail'onChange={(e)=>{dispatch({type:'nameGmail', payload:e.target.value})}} value={state.nameGmail} />
<br />
<button className='profile-sub' onClick={()=>{changeGmail()}}>Change Gmail</button>
</div>
<img src={ProfileBg} className='profile-img'/>
</div>
    </div>
  )
}
