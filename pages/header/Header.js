import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';

const Header = () => {
  return (
    <div>
        <div className="row bg-dark text-white">
            <div className="col-12 col-md-6 col-lg-6"></div>
            <div className="col-12 col-md-5 col-lg-5">
                <div className='d-flex justify-content-around'>
                    <small className='hover fw-bold p-2'>HOMEOWNER</small>
                    <small className='hover fw-bold p-2'>REALTOR</small>
                    <small className='hover fw-bold p-2'>SERVICER</small>
                    <small className='hover fw-bold p-2'>TIPS</small>                
                    </div>
            </div>
        </div>
        <div className="row shadow">
            <div className="col-5 text-center p-4">
                <button className='header-btn mx-3 py-1 rounded-pill'><small className='fw-bold'>REQUEST SERVICE</small></button>
                <button className='header-btn py-1 rounded-pill'><small className='fw-bold'>CHECK CLAIM STATUS</small>
                </button>
            </div>
            <div className="col-2 text-center d-flex flex-column justify-content-center align-items-center">
              <div className='pt-1'><DraftsIcon color='primary' fontSize='large' /></div>
              <div className='space fw-bold'>L3BLEY</div>
            </div>
            <div className="col-5 d-flex p-4 justify-content-around align-items-center">
                <small className='fw-bold'>PLANS</small> <small className='fw-bold'>WHAT IS SUPER</small> 
                <button className='header-btn py-1 rounded-pill'><small className='fw-bold'>LOGIN</small></button> <button className='py-1 price-btn rounded-pill'><small className='fw-bold'>SEE PRICING</small></button>
            </div>
        </div>
    </div>
  )
}

export default Header;