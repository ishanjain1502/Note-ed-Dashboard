import React from 'react'
// import Button from '@mui/material/Button';
import './sortTimeLine.css';

export default function Notestamp({ timestamp, time, activeTimestamp, setActiveTimestamp, player }) {
    const seekToTimestamp = (seconds) => {
        player.current.seekTo(seconds, 'seconds');
        // player.current.play()
    }
    const getSeconds = (time) => {
        let timeArr = time.split(":");
        let seconds = parseInt(timeArr[0]) * 60 * 60 + parseInt(timeArr[1]) * 60 + parseInt(timeArr[2]);
        console.log(seconds, "seconds");
        return seconds;
    }
    const onNotestampClick = () => {

        // console.log(timestamp,"\n",time);
        let activeTTStr = JSON.stringify(activeTimestamp);
        let currentTTStr = JSON.stringify(timestamp);
        if (activeTTStr == currentTTStr) {
            console.log("same");
        } else if (activeTTStr !== currentTTStr) {
            const editorjs = document.getElementById('editorjs')
            while (editorjs.firstChild) {
                editorjs.removeChild(editorjs.firstChild);
            }

            console.log("not same");
            setActiveTimestamp(timestamp);
        }
        // setActiveTimestamp(timestamp);

        // seek to timestamp
        let seconds = getSeconds(time);
        seekToTimestamp(seconds);
    }
    return (
        <div className="timestamp-btn">
        <button onClick={onNotestampClick} className='timeline-btn'>{time}</button>
        </div>
    )
}
