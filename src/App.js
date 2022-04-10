import React, {useState} from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import HomePage from './Components/home/HomePage';
import DashboardHome from './Components/dashboard/DashboardHome';
import VideoPage from './Components/dashboard/VideoPage';
import Login from "./Components/auth/Login";
import Register from './Components/auth/Register';


function App() {
  const [loggedInStatus,setloggedInStatus] = useState(true)

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/dashboard' element={<DashboardHome/>}></Route>
      <Route path='/login' element={<Login loggedInStatus={loggedInStatus} setloggedInStatus={setloggedInStatus}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/video/:videoname' element={<VideoPage/>}></Route>
    </Routes>
  );
}

export default App;
