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

            <section className="notes-and-video mt-10 mb-10 flex">
                <div className='yt-player-container mt-1 mb-1 mx-3 rounded'>
                    <ReactPlayer className='self-center' ref={player} controls={true} url={video_url} />
                </div>
                
                <NotesContainer setTimestampData={setTimestampData} player={player} setisNoteOpen={setisNoteOpen} video_id={video_id} video_name={video_name} />
            </section>

        </div>
    )
}
