import React, { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import "./editor.css";
import tools from "./commonTools"


export default function Editor({ activeTimestamp }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = React.useState(true);

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
            setData(outputData);
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
                <div className="video-info bg-indigo-300">
                    <h2 className='text-xl'>{`Notes on : ${exactTime}`}</h2>
                </div>
                <div className="btn-container">
                    <p className='save-notes-btn shadow-sm btn-link bg-indigo-300 px-2' onClick={saveData}>Save</p>
                </div>

            </div>

            <div id="editorjs"></div>

        </>

    )
}
