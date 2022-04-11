import React from 'react'
import "./notesframe.css";
import Editor from '../editor/Editor';

export default function Timestamp(props) {
    // const { timestamp, seconds, time, player } = props;
    const { setTimestampData, setisNoteOpen, timestamp, time } = props;
    // console.log(JSON.parse(timestamp[time]), "from note")

    const openNote = () => {
        console.log("openin note...");
        setTimestampData()
        setisNoteOpen(true);
    }

    return (
        <div onClick={setTimestampData} className='note-frame'>
            <div className='single-note p-2'>
                <div className='time-stamp'>
                    <div onClick={openNote} className='bg-indigo-300'>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}
