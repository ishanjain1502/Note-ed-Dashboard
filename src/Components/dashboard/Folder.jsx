import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';

export default function Folder(props) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
// nreed to work with listitem
  return (
    <div className='' >
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
     
      
      <ListItemButton style={{"background-image" : "linear-gradient(to right ,#2196F3, #3F51B5)" , "border-radius" : "25px", "color" : "white"}} onClick={handleClick}>
        {/* <ListItemIcon style={{"background-image" : "linear-gradient(to right ,#2196F3, #3F51B5)"}} > */}
          <FolderIcon style={{ "color": "white" , "margin-right" : "12px"}}  />
        {/* </ListItemIcon> */}
        <ListItemText primary={props.foldername} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          {props['videos'].map(video=>{
            return <ListItemButton sx={{ pl: 4 }} style={{"background-image" : "rgba(0,130,173,0.1)"   }} >
            {/* <ListItemIcon> */}
              <YouTubeIcon style={{"margin-right" : "8px"}} />
            {/* </ListItemIcon> */}
            <ListItemText primary={video}  />
          </ListItemButton> 
          })}
          
        </List>
      </Collapse>
    </List>
    </div>
  );
}