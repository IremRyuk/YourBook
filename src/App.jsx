import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import { useState } from 'react'
import Help from './pages/Help'
import Profile from './pages/Profile'
function App(){
  let [data,setData] = useState()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn infoData={data}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp information={info=>setData(info)}/>} />
        <Route path="/help" element={<Help />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
