import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Editor from '../Editor/Editor';
import Notestamp from './Notestamp';
// import SortTimeline from './SortTimeline';
import './sortTimeLine.css';
import './notesframe.css';

export default function NotesContainer(props) {
    const [timestamp, setTimstamp] = useState(null);
    const [videoName, setVideoName] = useState("");
    const [activeTimestamp, setActiveTimestamp] = useState({
        time: null,
        blocks: [
            {
                type: "paragraph",
                data: {
                    text: "Welcome to Noted"
                }
            }
        ],
        version: "2.11.10"
    });
    const { video_name, video_id, player } = props;

    let host = 'https://backend-1.prathameshdukare.repl.co'

    const fetchNotes = () => {
        const token = localStorage.getItem('token').toString();
        axios.get(`${host}/api/v1/video/${video_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data => {
            setVideoName(data.data.videoname);
            setTimstamp(data.data.data);
            setActiveTimestamp(data.data.data[0]);
        })
    }

    useEffect(() => {
        fetchNotes();
        //eslint-disable-next-line
    }, [])

    return (
        <section className='notes-container-main'>
            {timestamp ? <div className='notes-container'>

                <div className="notes-timeline-container text-center">
                    <h1 className='py-2 timeline-title'>Video notes timeline</h1>
                    <div className='timestamp-btn-container'>
                        {timestamp && timestamp.map((time, index) => {

                            let currentTime = Object.keys(time)[0];
                            return <Notestamp player={player} key={currentTime} time={currentTime} timestamp={time} activeTimestamp={activeTimestamp} setActiveTimestamp={setActiveTimestamp}></Notestamp>
                        })}
                    </div>
                    {/* <div className="sort-btn">
                        <SortTimeline />
                    </div> */}
                </div>

                <div className="notes-editor-container py-2 text-center">
                    {<Editor activeTimestamp={activeTimestamp} videoName={videoName} />}
                </div>
            </div> :
                <div className="spinner">
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>

            }
        </section>
    )
}
