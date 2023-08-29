import React, { useState } from 'react'

const ServicerSignup = () => {


  return (
    <div className='bg-light'>
     <div className="row py-3 w-100">
     
      <div className="col-12 col-md-9 col-lg-9">
      <div className='mt-5' style={{marginLeft:"150px"}}>
      <h3 className='text-muted'>Please tell us about your business</h3>
      <div className="form-group mt-5">
        <label for="" className='text-muted mb-2'>SERVICER NAME</label>
        <div className="col-6">
        <input type="text" className='form-control' name='name' placeholder='Servicer Name'/>
        </div>
      </div>
      <div className="form-group mt-4">
        <label for="" className='text-muted mb-2'>BUSINESS PHONE</label>
        <div className="col-6">
        <input type="text" className='form-control' name='name' placeholder='Business Phone'/>
        </div>
      </div>
      <div className="form-group mt-4">
        <label for="" className='text-muted mb-2'>BUSINESS ADDRESS</label>
        <div className="col-6">
        <input type="text" className='form-control' name='name' placeholder='Business Address'/>
        </div>
      </div>
      <div className="form-group mt-4">
        <label for="yearPicker" className='text-muted mb-2'>YEAR OF STARTING THE BUSINESS</label>
        <div className="col-6">
         <input type="date" id="yearPicker" className='form-control' name="year" min="1900" max="2099" />
        </div>
      </div>
      <div className="form-group mt-4">
        <label for="" className='text-muted mb-2'>SERVICER WEBSITE(OPTIONAL)</label>
        <div className="col-6">
        <input type="text" className='form-control' name='name' placeholder='Servicer Website(optional)'/>
        </div>
      </div>
      <div className="form-group mt-4">
        <label for="" className='text-muted mb-2'>YELP OR BETTER BUSINESS BUREAU REVIEW PAGE (OPTIONAL)</label>
        <div className="col-6">
        <input type="text" className='form-control' name='name' placeholder='Yelp or Better Business Bureau Review Page (optional)'/>
        </div>
      </div>
      <div className="mt-5 pb-5">
      <button className="btn btn-success">NEXT</button>
      </div>
      </div>
      </div>
      <div className="col-12 col-md-3 col-lg-3 rounded-4 px-3">
    
      </div>
     </div>
    </div>
  )
}

export default ServicerSignup;