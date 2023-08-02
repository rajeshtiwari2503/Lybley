import Image from 'next/image';
import React from 'react'
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import VerifiedIcon from '@mui/icons-material/Verified';
import InputIcon from '@mui/icons-material/Input';

const Works = () => {
  return (
    <div class="" style={{backgroundColor:"#D4E2D4"}}>
    <div className='container pt-5'>
        <div className="row w-100">
            <div className="col-12 col-md-6 col-lg-6">
            <div className='text-center'>
             <img src="https://serviceservotech.com/wp-content/uploads/2023/06/Professional-Home-Appliance-Repair-800x576.webp" alt="..." className='img-fluid' width="400px" height="400px" />
            </div>
            </div>
            <div className="col-12 d-flex justify-content-center flex-column col-md-6 col-lg-6">
              <h2 className=''>How It Works</h2>
              <p>Lybley is subscription care for the home that covers our members' repair or replacement of appliances or systems. Pick your plan, sign-up, and rest easy knowing that we've got it from here. After all, the last thing you need when something breaks is a bunch of drama.</p>
            </div>
        </div>
        <div className="row w-100 text-center pt-5 pb-5 mt-5">
         <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
            <SystemSecurityUpdateGoodIcon color='primary' fontSize='large' />
            <h5 className='p-2'>Sign Up</h5>
            <p>Find the plan that best fits your need. Cover the most essential to the most important.</p>
         </div>
         <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
         <VerifiedIcon color='primary' fontSize='large' />
         <h5 className='p-2'>Rest Easy</h5>
         <p>
         Our team of Certified Super service techs is ready to help when you need us.
         </p>
         </div>
         <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
        <InputIcon color='primary' fontSize='large' />
        <h5 className='p-2'> 
            We're ready
        </h5>
        <p>Log in to your account or launch the Super app, let us know what's happening, and schedule.</p>
         </div>
        </div>
        <div className='text-center pb-5'><button className='btn rounded-pill btn-primary fw-bold'><small>LEARN MORE</small></button></div>
    </div>
    </div>
  )
}

export default Works;