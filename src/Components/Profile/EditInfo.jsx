import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Form from './Form';




export default function EditInfo(props) {
   
  return (
    <div className='flex justify-center'>
   

      <Modal
        open={props.open}
        className='ml-96 mt-32'
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="inline-block w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-sm bg-white p-4 max-w-xl">
          <Form info={props.info} username={props.username} email={props.email} handleClose={props.handleClose}></Form>
        </Box>
      </Modal>
    </div>
  )
}
