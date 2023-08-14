import React, { useEffect, useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CRMHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router=useRouter();
  const [user,setUser]=useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      const obj=localStorage.getItem("crmUser");
      const user=JSON.parse(obj);
      setUser(user);
    }
},[])
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    localStorage.removeItem("crmUser");
    router.push("/sign-in");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="px-2 ">
      <InfoIcon fontSize='large' style={{cursor:"pointer",color:"white"}} />
      </div>
      <div className="px-2">
      <NotificationsIcon fontSize='large' style={{cursor:"pointer",color:"white"}} />
      </div>
      <div className="px-2 d-flex">
     {user &&  <div className='text-white me-2 '>{user.name}</div>}
      <AccountCircleIcon fontSize='large' style={{cursor:"pointer",color:"white"}} onClick={handleClick} />
      {/* <div className="d-flex align-items-center text-center">
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className="m-0 p-0"
                >
                </Button>

              </div> */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}><Link className="text-decoration-none text-dark" href="#">Profile</Link></MenuItem>
                <hr className="m-0 p-0"></hr>
                <MenuItem onClick={handleLogout} >Logout</MenuItem>
              </Menu>

      </div>
      <div className="px-2">
      <SettingsIcon fontSize='large' style={{cursor:"pointer",color:"white"}} />
      </div>
      </div>
      </div>
  )
}

export default CRMHeader