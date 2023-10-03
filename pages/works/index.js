import Image from 'next/image';
import React from 'react'
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import VerifiedIcon from '@mui/icons-material/Verified';
import InputIcon from '@mui/icons-material/Input';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Link from 'next/link';

const Works = (props) => {
  return (
    <div style={{backgroundColor:"#D4E2D4"}}>
    <div className='container pt-5'>
      {props?.servicer ? 
      <> <div className="row">
      <div className="col-12 text-center">
        <h2 className=''>How It Works</h2>
        <p>Lybley introduces subscription-based home care encompassing the repair or replacement of members' appliances and systems. Through our Certified Lybley contractors, including you, who receive job assignments via our Lybley Pro app, exceptional service is guaranteed. The process is truly that simple, with us managing the remaining aspects seamlessly.</p>
      </div>
  </div>
  <div className="row text-center pt-5 pb-5 mt-2 mt-md-5 mt-lg-5">
   <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
      <SystemSecurityUpdateGoodIcon color='primary' fontSize='large' />
      <h5 className='p-2'>Sign Up</h5>
      <p>Complete the form provided below, sharing details about your expertise and location. We'll reach out to you promptly.</p>
   </div>
   <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
   <VerifiedIcon color='primary' fontSize='large' />
   <h5 className='p-2'>Stay ready</h5>
   <p>
   You're familiar with the scenario — issues never arise according to a schedule, yet our clients will rely on our assistance.
   </p>
   </div>
   <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
  <CurrencyRupeeIcon color='primary' fontSize='large' />
  <h5 className='p-2'> 
      Get paid
  </h5>
  <p>Recognizing the significance of your efforts, we offer compensation at an equitable rate and schedule. It's a mutually beneficial arrangement.</p>
   </div>
  </div>
  <Link href="/pricing"><div className='text-center pb-5'><button className='btn rounded-pill btn-dark'><small style={{fontSize:"13px"}}>LEARN MORE</small></button></div></Link>
  </>
      :
       <> <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
            <div className='text-center'>
            {/* <img src="https://www.nicepng.com/png/detail/182-1827086_home-appliances-transparent-images-panasonic-ne-1054f-1000w.png" alt="..." className='img-fluid' width="400px" height="400px" /> */}
             <img src= "/appliances.png" alt="..." className='img-fluid' width="400px" height="400px" />
            </div>
            </div>
            <div className="col-12 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-center flex-column col-md-6 col-lg-6">
              <h2 className=''>How It Works</h2>
              <p>Lybley offers a subscription-based home care solution that encompasses appliance and system repair or replacement for our members. Simply choose the plan that suits you, complete the registration, and experience peace of mind as we take over from that point onward. Dealing with unexpected breakdowns can be hassle-free with us, ensuring you don't have to deal with unnecessary complications during such times.</p>
            </div>
        </div>
        <div className="row text-center pt-5 pb-5 mt-2 mt-md-5 mt-lg-5">
         <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
            <SystemSecurityUpdateGoodIcon color='primary' fontSize='large' />
            <h5 className='p-2'>Sign Up</h5>
            <p>Explore plans tailored to your needs, whether safeguarding essentials or prioritizing key elements, we've got you covered.</p>
         </div>
         <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
         <VerifiedIcon color='primary' fontSize='large' />
         <h5 className='p-2'>Rest Easy</h5>
         <p>
         Whenever you require assistance, our team of expert Certified Lybley Service technicians is prepared to step in and lend a hand.
         </p>
         </div>
         <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
        <InputIcon color='primary' fontSize='large' />
        <h5 className='p-2'> 
            We're ready
        </h5>
        <p>Access your account by logging in or utilize the convenient Lybley app to inform us about the situation and set up a schedule that suits you.</p>
         </div>
        </div>
        <div className='text-center pb-5'><button className='btn rounded-pill btn-primary fw-bold'><small>LEARN MORE</small></button></div>
        </>}
    </div>
    </div>
  )
}

export default Works;