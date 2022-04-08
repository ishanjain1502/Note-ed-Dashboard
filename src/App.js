import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import VideoList from './Components/VideoList';
import VideoPage from './Components/VideoPage';
function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<VideoList/>}></Route>
      <Route path='/video/:videoname' element={<VideoPage/>}></Route>
    
    </Routes>
  );
}

export default App;
