import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  

const DropDownMenu = () => {

    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };

  const sendLoggedOutInfo = ({ extensionId, authInfo})=>{
    // eslint-disable-next-line no-undef
    chrome.runtime.sendMessage(extensionId, { authInfo }, response => {
        if (!response.success) {
          console.log('error sending message', response);
          return response;
        }
        console.log(response)
      });

}

  const logMeOut = ()=>{
    console.log("loggging out");

    // sending logged out info to extension
    let authObj =  JSON.stringify({"loggedInStatus":false,"authToken":null});
    sendLoggedOutInfo({ extensionId: 'mddgplepaeofegeediconadgglhkokkg', authInfo: authObj})
    localStorage.removeItem('token');
    // setloggedInStatus(false); 

    // redirect to login
    navigate('/login');
}

    return (
        <div className='absolute right-12' >
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx = {{transform: "scale(1.5)"}}
        >
          <AssignmentIndIcon style={{ color: "#0091ad"}}/>
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
          <MenuItem onClick={() => {
              logMeOut()
              handleClose()
          }} >Logout</MenuItem>
        </Menu>
      </div>
    );
}


export default DropDownMenu