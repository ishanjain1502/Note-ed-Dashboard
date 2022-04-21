import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';

export default function Folder(props) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
     
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={props.foldername} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          {props['videos'].map(video=>{
            return <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary={video} />
          </ListItemButton>
          })}
          
        </List>
      </Collapse>
    </List>
  );
}