import React from 'react'
import Button from '@mui/material/Button';
import './sortTimeLine.css';

export default function Notestamp({ timestamp, time,setActiveTimestamp }) {
    const onNotestampClick = ()=>{
        console.log("clicked on notestamp");
        const editorjs = document.getElementById('editorjs')
        while (editorjs.firstChild) {
            editorjs.removeChild(editorjs.firstChild);
        }
        // console.log(timestamp,"\n",time);
        
        setActiveTimestamp(timestamp);
    }
    return (
        <Button onClick={onNotestampClick} className='timeline-btn'>{time}</Button>
    )
}
