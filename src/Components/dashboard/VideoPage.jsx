import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom'
import "./videopage.css"
import ReactPlayer from 'react-player/youtube'
import Header from './Header';
import NotesFrame from './NotesFrame';


export default function VideoPage(props) {
    let { videoname } = useParams();
    let { state } = useLocation();
    let { video_url, video_id } = state;

    useEffect(() => {
        fetchNotes();
        //eslint-disable-next-line
    }, [])

    const player = useRef();
    const [timestamp, setTimstamp] = useState();
    
    const fetchNotes = (name) => {
        axios.get(`https://Backend-1.prathameshdukare.repl.co/api/v1/video/${videoname}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyNGIzMDZjMmZkYTE2NDJjNzk2MzE1MiIsImlhdCI6MTY0OTQ0OTEwMX0.dsqSsUuG3_BzyhDQC1YgcAVDWvb-8tlsHRow-OvQmSg'
            }
        }).then(data => {
            console.log(data);
            setTimstamp(data.data.data);
        })
    }

    const convertToseconds = (time) => {
        const timeArr = time.split(":");
        let sec = 0;
        let pow = 2;
        timeArr.forEach(time => {
            sec += (time * Math.pow(60, pow));
            pow--;
        });
        console.log(sec);
        return sec;
    }

    return (
        <div className='video-page'>
            <Header></Header>

            <div className='mt-12 mb-28 mx-64  rounded flex flex-col content-center bg-indigo-300 pt-8'>
                <ReactPlayer className='self-center' ref={player} controls={true} url={video_url} />
                <div className='self-start w-full px-32 mt-10'>
                    {timestamp && timestamp.map(timestamp => {
                        const time = Object.keys(timestamp);
                        const seconds = convertToseconds(time[0]);
                        //notes frame 
                        return <NotesFrame timestamp={timestamp} player={player} time={time[0]} seconds={seconds}></NotesFrame>
                    })}

                </div>
            </div>
        </div>
    )
}
