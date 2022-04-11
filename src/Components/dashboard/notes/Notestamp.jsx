import React from 'react'
import Button from '@mui/material/Button';

export default function Notestamp({ currentTime, time }) {

    return (
        <Button>{time}</Button>
    )
}
