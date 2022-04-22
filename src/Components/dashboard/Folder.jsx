import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Options from './Options';
import React, { useState } from 'react';

export default function Folder(props) {
  const [open, setOpen] = useState(true);
  const [updatedName,setUpdatedName]=useState();

  const updateFolderName=(title)=>{
    setUpdatedName(title);
  }
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
        <ListItemText primary={updatedName || props.folder_name} />
        <Options folders={true} folder_name={props.folder_name} folder_id={props.folder_id} updateFolderName={updateFolderName} deleteFolderFromArray={props.deleteFolderFromArray}></Options>
      </ListItemButton>
      
    </List>
    </div>
  );
}