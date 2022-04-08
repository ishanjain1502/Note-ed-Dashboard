import React, {useState} from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import VideoList from './Components/VideoList';
import VideoPage from './Components/VideoPage';
import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
function App() {
  const [loggedInStatus,setloggedInStatus] = useState(true)
  return (
    <Routes>
      <Route path='/dashboard' element={<VideoList/>}></Route>
      <Route path='/login' element={<Login loggedInStatus={loggedInStatus} setloggedInStatus={setloggedInStatus}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/video/:videoname' element={<VideoPage/>}></Route>
    </Routes>
  );
}

export default App;
