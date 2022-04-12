import React from 'react'
import Button from '@mui/material/Button';
import './sortTimeLine.css';

export default function Notestamp({ timestamp, time,setActiveTimestamp }) {
    const onNotestampClick = ()=>{
        const editorjs = document.getElementById('editorjs')
        while (editorjs.firstChild) {
            editorjs.removeChild(editorjs.firstChild);
        }
        // console.log(timestamp,"\n",time);
        setActiveTimestamp(timestamp);
        console.log("clicked on notestamp");
    }
    return (
        <Button onClick={onNotestampClick} className='timeline-btn'>{time}</Button>
    )
}
