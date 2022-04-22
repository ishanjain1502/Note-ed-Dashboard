import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FolderDropdown from './FoldersDropdown';
import axios from 'axios';
export default function Options(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen,setModalOpen]=React.useState(false);
  const [newFolderName,setFolderName]=React.useState();
  const [title,setTitle]=React.useState();
  const [modalType,setModalType]=React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleModalClose=()=>{
  setModalOpen(false);
}
const handleModalOpen=(e)=>{
  console.log(e.target.tabIndex);
  setModalType(e.target.tabIndex);
  setModalOpen(true);
}
const changeFolder=(e)=>{
  setFolderName(e.target.value);
}

const submitChangeFolder=()=>{
  console.log("hereeeee");
  if(!newFolderName){
    console.log("folder name is null");
    return;
  }
  const token=localStorage.getItem('token').toString();
  axios.post(`http://localhost:8000/api/v1/video/changefolder`,{
    video_id:props.video_id,
    folder_name:newFolderName
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       console.log(data);
       if(data.status===200){
         handleModalClose();
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     })
}


const submitTitle=()=>{
  if(!title){
    console.log("video name is null");
    return;
  }
  const token=localStorage.getItem('token').toString();
  axios.post(`http://localhost:8000/api/v1/video/editname`,{
    video_id:props.video_id,
    new_video_name:title
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       console.log(data);
       if(data.status===200){
         handleModalClose();
         props.updateVideoName(title);
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     })
}


  return (
    <div className='flex self-center'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='self-end'
      >
        <MoreHorizIcon className='text-gray-50'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e)=>{
          handleClose();
          handleModalOpen(e);
        }}>Change Folder</MenuItem>
        <MenuItem onClick={(e)=>{
          handleClose();
          handleModalOpen(e);
        }}>Edit Title</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>

      
<Modal
  open={modalOpen}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box>
  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={handleModalClose}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{modalType===0?"Change Folder":"Edit Name"}</h3>
               
                {modalType===0? <FolderDropdown changeFolder={changeFolder}></FolderDropdown>: <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Video Name</label>
                  <input value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                  }} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Video Name" required />
                </div>}
               
               
                
                <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={modalType===0?submitChangeFolder:submitTitle}>Done</button>
                
              </form>
            </div>
          </div>
  </Box>
</Modal>

     
      
    </div>
  );
}