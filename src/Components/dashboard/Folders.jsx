import AddIcon from '@mui/icons-material/Add';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Folder from './Folder';
export default function Folders(active) {
  const url = 'https://backend-1.prathameshdukare.repl.co'
  const [title,setTitle]=React.useState();
  const [folders,setFolders]=useState([]);
  const [modalOpen,setModalOpen]=React.useState(false);
  const token=localStorage.getItem('token');
  console.log(active);

  const handleModalClose=()=>{
    setModalOpen(false);
  }
  const handleModalOpen=(e)=>{
    
    setModalOpen(true);
  }
  useEffect(()=>{
    getAllFolders();
  },[])

  const getAllFolders=()=>{
    axios.get(`${url}/api/v1/folder/getfolders?deleted=false`,{
      headers: {
          'Authorization': `Bearer ${token}`
      },
  }).then(data=>{
    console.log(data.data);
    setFolders(data.data.folders);
  })
  }
 
  const deleteFolderFromArray=(folder_id)=>{
    setFolders(folders=>{
      return folders.filter(folder=>{
          return folder._id!==folder_id
       })
      }
    )
  }


    
  const createFolder=()=>{
    if(!title){
      console.log("name is null");
      return;
    }
    console.log(title);
    axios.post(`${url}/api/v1/folder/create`,{
      folder_name:title
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       if(data.status===200){
         getAllFolders();
         handleModalClose();
         setTitle("");
       }
       console.log(data.message);
     }).catch(err=>{
        if(err.response.data.message){
          console.log(err.response.data.message);
        }
        else{
          console.log(err);
        }
     })
  }
  return (
    <div className='max-w-1/5' >
        {folders.map(({folder_name,_id})=>{
          return <Folder folder_name={folder_name} active ={active} folder_id={_id}  deleteFolderFromArray={deleteFolderFromArray}></Folder>
        })}
        <ListItem disablePadding>
            <ListItemButton onClick={handleModalOpen}>
              <ListItemIcon>
                <AddIcon></AddIcon>
              </ListItemIcon>
              <ListItemText primary="Create Folder" />
            </ListItemButton>
          </ListItem>




  <Modal
  open={modalOpen}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box>
  <div className="relative p-4 w-full max-w-md h-full md:h-auto m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={handleModalClose}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create Folder</h3>
               
                 <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Folder Name</label>
                  <input value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                  }} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Folder Name" required />
                </div>
               
               
                
                <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={createFolder}>Done</button>
                
              </form>
            </div>
          </div>
  </Box>
</Modal>

        {/* {
          videos.map((video) => (
            <div>
                {video}
            </div>
          ))
        } */}

    </div>
  )
}
