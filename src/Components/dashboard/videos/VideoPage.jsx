import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import Header from '../../NavBar/Navbar';
import NotesContainer from '../notes/NotesContainer';
import "./videopage.css";


export default function VideoPage(props) {
    const [timeStampData, setTimestampData] = useState([]);
    const [isNoteOpen, setisNoteOpen] = React.useState(false);
    
    let { state } = useLocation();
    let { video_name, video_url, video_id } = state;
    // let { videoname } = useParams();
    const player = useRef();

    return (
        <div className='video-page'>
            <Header></Header>

            <div className='yt-player-container mt-1 mb-1 mx-64  rounded flex flex-col content-center pt-8'>
            
                <ReactPlayer className='self-center' ref={player} controls={true} url={video_url} />
            </div>

            {/* Notes-Container */}
            
            <NotesContainer setTimestampData={setTimestampData} setisNoteOpen={setisNoteOpen} video_id={video_id} video_name={video_name} />
        </div>
    )
}
