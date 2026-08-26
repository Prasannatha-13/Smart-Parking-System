import { useState } from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import './App.css'
import Features from './pages/Features'
import Signup from './pages/Signup'
import LogIn from './pages/Login'
import Dashboard from './pages/dashboard'
import Booking from './pages/booking'
import History from './pages/history'


function App() {
  
  const [Data,setData]=useState({
    username:"",
    email:"",
    password:"",
    confirmpw:"",
  });

    const [PkData,setPkData]=useState({
              total:0,
              available:0,
              occupied:0,
              slots:[]
          })
  

  return (
    <div className=' min-h-screen w-full bg-black text-white'>
    <BrowserRouter>
    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/login" element={<LogIn Data={Data}/>} />
       <Route path="/signup" element={<Signup Data={Data} setData={setData} />}/>

       <Route path="/dashboard" element={<Dashboard PkData={PkData} setPkData={setPkData} />} />
       <Route path="/booking" element={<Booking PkData={PkData}/>} /> 
       <Route path="/history" element={<History />} />
       {/* <Route path="/profile" element={<Profile />} />  */}
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
