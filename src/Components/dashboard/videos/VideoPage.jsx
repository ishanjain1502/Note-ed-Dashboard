import React, { useRef, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import "./videopage.css"
import ReactPlayer from 'react-player/youtube'
import Header from '../Header';
import NotesContainer from '../notes/NotesContainer';

export default function VideoPage(props) {
    const [timeStampData, setTimestampData] = useState([]);
    let { state } = useLocation();
    let { video_name, video_url, video_id } = state;
    // let { videoname } = useParams();
    const [isNoteOpen, setisNoteOpen] = React.useState(false);
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
