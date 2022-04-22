import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
import DashboardHome from './Components/dashboard/DashboardHome';
import VideoPage from './Components/dashboard/videos/VideoPage';
import HomePage from './Components/home/HomePage';
import NotFound from './Components/NotFound';
import Profile from './Components/Profile/Profile';

function App() {
  const [loggedInStatus,setloggedInStatus] = useState(true)

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/dashboard' element={<DashboardHome/>}></Route>
      <Route path='/login' element={<Login loggedInStatus={loggedInStatus} setloggedInStatus={setloggedInStatus}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/video/:videoname' element={<VideoPage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
