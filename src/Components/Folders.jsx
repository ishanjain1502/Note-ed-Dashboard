import React from 'react'
import Folder from './Folder';
import { ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export default function Folders() {
    let foldername="Default";
    let videos=["video1","video2"]
  return (
    <>
        <Folder foldername={foldername} videos={videos}></Folder>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon></AddIcon>
              </ListItemIcon>
              <ListItemText primary="Create Folder" />
            </ListItemButton>
          </ListItem>
    </>
  )
}
