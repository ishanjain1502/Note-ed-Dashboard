import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function Form(props) {
    
  return (
    
  props.info==='personal'? <form className="space-y-4">
      <div className='flex justify-between'>
        <h3 className="font-semibold text-2xl text-gray-600 pb-2 mb-2 border-b-2 border-gray-300">Edit Profile</h3>
        <CloseIcon onClick={props.handleClose}></CloseIcon>
      </div>
  <div className="flex flex-col">
    <label htmlFor="name" className="block mb-2 text-sm font-medium">Display Name</label>
    <input required type="text" name="name" autoComplete="off" className="block w-full border-gray-600 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-wait focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  defaultValue={props.username} />
  </div>
  <div className="flex flex-col">
    <label htmlFor="name" className="block mb-2 text-sm font-medium">Email</label>
    <input required type="text" name="email" autoComplete="off" className="block w-full border-gray-600 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-wait focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  defaultValue={props.email} />
  </div>

  <div className="flex justify-end pt-4 space-x-4 sm:pt-3">
    <button type='button' className="w-full font-semibold disabled:opacity-50 bg-teal-500 focus:ring-2 focus:ring-offset-2 ring-teal-500 text-white rounded shadow hover:bg-teal-600 px-4 py-2" >Save</button>
  </div>
</form>
:

<form className="space-y-4">
    <div className='flex justify-between'>
        <h3 className="font-semibold text-2xl text-gray-600 pb-2 mb-2 border-b-2 border-gray-300">Change Password</h3>
        <CloseIcon onClick={props.handleClose}></CloseIcon>
    </div>
<div className="flex flex-col">
  <label htmlFor="name" className="block mb-2 text-sm font-medium">Password</label>
  <input required type="text" name="name" autoComplete="off" className="block w-full border-gray-600 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-wait focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
</div>
<div className="flex flex-col">
  <label htmlFor="name" className="block mb-2 text-sm font-medium">New Password</label>
  <input required type="text" name="email" autoComplete="off" className="block w-full border-gray-600 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-wait focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
</div>
<div className="flex flex-col">
  <label htmlFor="name" className="block mb-2 text-sm font-medium">Confirm Password</label>
  <input required type="text" name="email" autoComplete="off" className="block w-full border-gray-600 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-wait focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
</div>

<div className="flex justify-end pt-4 space-x-4 sm:pt-3">
  <button className="w-full font-semibold disabled:opacity-50 bg-indigo-500 focus:ring-2 focus:ring-offset-2 ring-indigo-500 text-white rounded shadow hover:bg-indigo-600 px-4 py-2" onClick={props.handleClose}>Save</button>
</div>
</form>
   
  )
}
