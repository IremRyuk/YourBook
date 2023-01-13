import {Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
function App(){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
