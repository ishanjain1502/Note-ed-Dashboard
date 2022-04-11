import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Editor from '../editor/Editor';
import Note from './Note';
import Notestamp from './Notestamp';
import SortTimeline from './SortTimeline';
import ButtonGroup from '@mui/material/ButtonGroup';
import './sortTimeLine.css';

export default function NotesContainer(props) {
    let host = "https://Backend-1.prathameshdukare.repl.co"
    const { setisNoteOpen, setTimestampData, video_name } = props;
    const [timestamp, setTimstamp] = useState();

    const fetchNotes = (name) => {
        axios.get(`${host}/api/v1/video/${video_name}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY'
            }
        }).then(data => {
            setTimstamp(data.data.data);
        })
    }
    console.log(timestamp);

    const convertToseconds = (time) => {
        const timeArr = time.split(":");
        let sec = 0;
        let pow = 2;
        timeArr.forEach(time => {
            sec += (time * Math.pow(60, pow));
            pow--;
        });
        console.log(sec, "seconds duration");
        return sec;
    }

    useEffect(() => {
        fetchNotes();
        //eslint-disable-next-line
    }, [])

    return (
        <div className='notes-main-container'>
            <div className="notes-timeline-container text-center py-2 my-3 bg-indigo-100">
                <h1 className='py-2 text-xl'>Video Timeline</h1>
                <ButtonGroup className='py-2 px-2' variant="contained" aria-label="outlined primary button group">
                    {timestamp && timestamp.map((time, index) => {
                        let currentTime = Object.keys(time)[0];
                        return <Notestamp key={currentTime} time={currentTime} timestamp={time} index={index}></Notestamp>
                    })}
                </ButtonGroup>
                <div className="sort-btn">
                <SortTimeline/>
                </div>
                
            </div>

            <div className="notes-editor-container bg-indigo-100 py-2 my-3 text-center">
                <Editor/>
            </div>
        </div>
    )
}
