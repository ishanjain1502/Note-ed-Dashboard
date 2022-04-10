import React from 'react'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./notesframe.css";

export default function Timestamp(props) {
    const { timestamp, seconds, time, player } = props;
    const [isNoteOpen, setisNoteOpen] = React.useState(true);
    
    const openNote = () => {
        console.log("open note");
        setisNoteOpen(true);
    }
    // const List = ()=>{
    //     return 
    // }

    return (
        <div className='notes-frame'>
            <div className='time-stamp'>
                <div onClick={openNote} className='mb-6 bg-red-200'>
                    Test Content
                </div>
            </div>
        </div>
    )
}
