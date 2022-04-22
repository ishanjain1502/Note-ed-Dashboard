


 import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.changeFolder(event);
  };

  const [folders,setFolders]=useState();

    useEffect(()=>{
     const token=localStorage.getItem('token').toString();
     axios.get(`http://localhost:8000/api/v1/folder/getfolders?deleted=false`, {
         headers: {
             Authorization: `Bearer ${token}`
         }
     }).then(data=>{
         console.log(data.data);
         setFolders(data.data.folders);
     })
 },[])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
         {folders && folders.map(folder=>{
            return <MenuItem value={folder.folder_name}>{folder.folder_name}</MenuItem>
         })}
          
        </Select>
      </FormControl>
    </Box>
  );
}