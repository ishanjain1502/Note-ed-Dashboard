import React from 'react'
import {Avatar} from '@mui/material'
import me from './me.jpg'

export default function ProfileAvatar() {
  return (
    <div className='avatar flex' style={{"position":"relative","bottom":"66px"}}>
         <Avatar alt="Remy Sharp" src={me} sx={{width:120,height:120}}/>           
    </div>
  )
}
