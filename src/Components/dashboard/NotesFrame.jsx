import React from 'react'
// import ModeCommentIcon from '@mui/icons-material/ModeComment';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import DeleteIcon from '@mui/icons-material/Delete';
import "./notesframe.css";
import Editor from './editor/Editor';

export default function Timestamp(props) {
    const { timestamp, seconds, time, player } = props;
    const [isNoteOpen, setisNoteOpen] = React.useState(false);
    
    const openNote = () => {
        console.log("openin note...");
        setisNoteOpen(true);
    }
    const notesList = ()=>{
        return <div className='notes-frame'>
        <div className='time-stamp'>
            <div onClick={openNote} className='mb-6 bg-red-200'>
                Test Content
            </div>
        </div>
    </div>
    }
    return (
        <>
            {isNoteOpen ? <Editor/> :notesList() }
        </>
    )
}
