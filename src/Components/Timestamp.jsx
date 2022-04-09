import React from 'react'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Timestamp(props) {
    const { timestamp, seconds, time, player } = props;
    return (
        <div className='time-stamp'>
            <div className='mb-6'>
                <div className='flex'>
                    <p className='bg-indigo-700 mr-2 w-32 mb-2 rounded cursor-pointer flex justify-center' onClick={() => {
                        player.current.seekTo(seconds);
                    }}>{time}</p>
                    <ModeEditIcon className='mr-2' />
                    <DeleteIcon />
                </div>
                <div className='w-11/12 ml-1 flex'>
                    <ModeCommentIcon />
                    <p className='ml-2'>{timestamp[time]}</p>
                </div>
            </div>
        </div>
    )
}
