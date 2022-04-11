import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Editor from './editor/Editor';
import Note from './Note';

export default function NotesContainer(props) {
    let host = "https://Backend-1.prathameshdukare.repl.co"
    const {setisNoteOpen,setTimestampData, video_name } = props;
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
        <div className='notes-container'>
            <div className='self-start w-full px-5 py-5 mt-5 text-center'>
                {timestamp && timestamp.map(timestamp => {
                    const time = Object.keys(timestamp);
                    const seconds = convertToseconds(time[0]);
                    //notes frame 
                    return <Note setTimestampData={setTimestampData} setisNoteOpen={setisNoteOpen} timestamp={timestamp} time={time[0]} seconds={seconds}></Note>
                })}
            </div>
        </div>
    )
}
