import React, { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import EditorConfigObj from './editorConfig';
import "./editor.css";


export default function Editor(props) {
    const { timeStampData,setisNoteOpen } = props;
    console.log(timeStampData,"from editor");
    const [Data, setData] = useState({});
    let editor;
    const launchEditor = () => {
        editor = new EditorJS(EditorConfigObj);
    }

    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
            setData(outputData);
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }
    const backbtnHandler = ()=>{
        setisNoteOpen(false);
    }

    useEffect(() => {
        launchEditor()
    })
    return (
        <>
            <div className="video-nav">
                <div className="video-info">
                    <h2>{"Video title here..."}</h2>
                    <h2>{"Timestamp : 1:05 "}</h2>
                </div>
                <div className="btn-container">
                <p className='back-btn btn-link bg-indigo-300' onClick={backbtnHandler}>Back</p>
                <p className='save-btn btn-link bg-indigo-300' onClick={saveData}>Save</p>
                </div>

            </div>

            <div id='editorjs'></div>

        </>

    )
}
