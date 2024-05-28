import Header from './components/header'
import Home from './pages/home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/Login'
import Dash from './pages/dash';
import AuthChecker from './components/authchecker';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route element={<AuthChecker/>}>
          <Route path='/dashboard' element={<Dash/>} />
        </Route>
      </Routes>
    </>
     
  )
}

export default App
