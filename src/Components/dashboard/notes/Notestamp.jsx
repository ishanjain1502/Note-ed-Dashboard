import React from 'react'
import Button from '@mui/material/Button';
import './sortTimeLine.css';

export default function Notestamp({ timestamp, time, setActiveTimestamp, player }) {

    const seekToTimestamp = (seconds) => {
        player.current.seekTo(seconds, 'seconds');
    }
    const getSeconds = (time)=>{
        let timeArr = time.split(":");
        let seconds = parseInt(timeArr[0])*60*60 + parseInt(timeArr[1])*60 + parseInt(timeArr[2]);
        console.log(seconds,"seconds");
        return seconds;
    }
    const onNotestampClick = () => {
        console.log("clicked on notestamp");
        const editorjs = document.getElementById('editorjs')
        while (editorjs.firstChild) {
            editorjs.removeChild(editorjs.firstChild);
        }
        // console.log(timestamp,"\n",time);
        setActiveTimestamp(timestamp);

        // seek to timestamp
        let seconds = getSeconds(time);
        seekToTimestamp(seconds);
    }
    return (
        <Button onClick={onNotestampClick} className='timeline-btn'>{time}</Button>
    )
}
