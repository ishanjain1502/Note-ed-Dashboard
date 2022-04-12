import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Editor from '../editor/Editor';
import Notestamp from './Notestamp';
import SortTimeline from './SortTimeline';
import ButtonGroup from '@mui/material/ButtonGroup';
import './sortTimeLine.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function NotesContainer(props) {
    const [timestamp, setTimstamp] = useState(null);
    const [activeTimestamp, setActiveTimestamp] = useState({
        time: 1552744582955,
        blocks: [
          {
            type: "paragraph",
            data: {
              text: "Welcome to Sasta Notion"
            }
          }
        ],
        version: "2.11.10"
      });
    const { video_name } = props;

    let host = "https://Backend-1.prathameshdukare.repl.co"

    const fetchNotes = () => {
        axios.get(`${host}/api/v1/video/${video_name}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY'
            }
        }).then(data => {
            setTimstamp(data.data.data);
            setActiveTimestamp(data.data.data[0]);
        })
    }

    useEffect(() => {
        fetchNotes();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            {timestamp ? <div className='notes-main-container'>

                <div className="notes-timeline-container text-center my-3 bg-indigo-100">
                    <h1 className='py-2 text-xl'>Video notes timeline</h1>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        {timestamp && timestamp.map((time, index) => {

                            let currentTime = Object.keys(time)[0];
                            return <Notestamp key={currentTime} time={currentTime} timestamp={time} setActiveTimestamp={setActiveTimestamp}></Notestamp>
                        })}
                    </ButtonGroup>
                    <div className="sort-btn">
                        <SortTimeline />
                    </div>
                </div>

                <div className="notes-editor-container bg-indigo-100 py-2 my-3 text-center">
                    {<Editor activeTimestamp={activeTimestamp} />}
                </div>
            </div> :
                <div className="spinner">
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>

            }
        </>
    )
}
