import React, { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import "./editor.css";
import tools from "./commonTools"


export default function Editor({ activeTimestamp }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = React.useState(true);
    // const [isSaveDisabled, setSaveDisabled] = React.useState(false);
    const [disabledState, setdisabledState] = React.useState("");

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
            setdisabledState("disabled");
            
            //TODO: DO API call here only!

            
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
                    <p className='exact-time'>{`Notes on : ${exactTime}`}</p>
                    <button className={`save-notes-btn save-disabled shadow-sm btn-link px-2 ${disabledState}`} onClick={saveData}>Save</button>
                </div>
                <div className="btn-container">
                    
                </div>

            </div>

            <div id="editorjs"></div>

        </>

    )
}
