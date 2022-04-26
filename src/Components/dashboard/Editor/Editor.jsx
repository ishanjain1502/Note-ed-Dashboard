import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditorJS from '@editorjs/editorjs';
import "./editor.css";
import tools from "./commonTools"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const API_HOST = 'https://backend-1.prathameshdukare.repl.co';
let alertDiv = document.getElementsByClassName("alert-bar")

export default function Editor({ activeTimestamp, videoName }) {
    const [isAlert, setIsAlert] = useState(true);
    // const [data, setData] = useState(null);
    const [loading, setLoading] = React.useState(true);
    const [disabledState, setdisabledState] = React.useState("");

    const handleAlertFunction = ()=>{
        // if(alertDiv)
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert  elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        // setIsAlert(false);
        alertDiv[0].style.display = "none";
        
    };

    console.log(activeTimestamp)
    let exactTime = Object.keys(activeTimestamp)[0];
    console.log(exactTime, "from editor");

    let editor;
    const launchEditor = () => {
        editor = new EditorJS({
            holder: "editorjs",
            autofocus: true,
            placeholder: "write your notes here...",
            readOnly: false,
            tools: tools,
            data: JSON.parse(activeTimestamp[exactTime])
        });
    }

    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
            // setdisabledState("disabled");

            //TODO: DO API call here only!
            let note = JSON.stringify(outputData);
            let timestamp = exactTime;
            const authToken = localStorage.getItem("token")

            console.log("calling api")
            axios.put(`${API_HOST}/api/v1/notes/timestamp/update`, {
                videoname: videoName,
                timestamp: timestamp,
                content: note
            }, {
                headers: {
                    authorization: `Bearer ${authToken}`,
                }
            })
                .then((response) => {
                    console.log(response, 'from editing api');
                    if (response.status === 200) {
                        // setIsAlert(true);
                        alertDiv[0].style.display = "block";
                        setTimeout(() => {
                            alertDiv[0].style.display = "none";
                        }, 2000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });

        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }

    function handleClick() {
        setLoading(true);
    }

    useEffect(() => {
        launchEditor()
    })
    return (
        <>
            <div className="video-nav">
                <div className="video-info">
                    <p className='exact-time'>{`${exactTime}`}</p>
                    <button className={`save-notes-btn save-disabled shadow-sm btn-link px-2 ${disabledState}`} onClick={saveData}>Save</button>
                </div>
                
                <div className="btn-container">

                </div>

            </div>

            <div id="editorjs"></div>
            <p className="add-more">add more notes...</p>
           
            <div className="alert-bar">
                <Snackbar open={isAlert} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Notes Updated
                    </Alert>
                </Snackbar>
            </div>
        </>

    )
}
