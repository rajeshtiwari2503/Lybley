import httpCommon from '@/http-common'
import React, { useState } from 'react'

const ServicerSignup = () => {

  const [formData,setFormData]=useState({
    servicerName:"",
    businessPhone:"",
    businessAddress:"",
    yearOfStartBusniess:"",
    servicerWebsite:"",
    betterBusinessBureauReviewPage:"",
  });

  const registration = async () => {
    try {
      let response = await httpCommon.post("/servicerRegistration",{...formData,businessPhone:+formData?.businessPhone});
      let { data } = response;
    } catch (err) {
      console.log(err);
    }
  }
   
  const handleChange=(e)=>{
     const {currentTarget : input}=e;
     let formData1={...formData};
     formData1[input.name]=input.value;
     setFormData(formData1);
}

  return (
    <div className='bg-light'>
      <div className="row py-3 w-100">

        <div className="col-12 col-md-9 col-lg-9">
          <div className='mt-5' style={{ marginLeft: "150px" }}>
            <h3 className='text-muted'>Please tell us about your business</h3>
            <div className="form-group mt-5">
              <label for="" className='text-muted mb-2'>SERVICER NAME</label>
              <div className="col-6">
                <input type="text" className='form-control' name='servicerName' value={formData.servicerName} placeholder='Servicer Name' onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-4">
              <label for="" className='text-muted mb-2'>BUSINESS PHONE</label>
              <div className="col-6">
                <input type="text" className='form-control' name='businessPhone' value={formData.businessPhone} placeholder='Business Phone' onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-4">
              <label for="" className='text-muted mb-2'>BUSINESS ADDRESS</label>
              <div className="col-6">
                <input type="text" className='form-control' name='businessAddress' value={formData.businessAddress} placeholder='Business Address' onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-4">
              <label for="yearPicker" className='text-muted mb-2'>YEAR OF STARTING THE BUSINESS</label>
              <div className="col-6">
                <input type="date" id="yearPicker" className='form-control' name="yearOfStartBusniess" value={formData.yearOfStartBusniess} min="1900" max="2099" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-4">
              <label for="" className='text-muted mb-2'>SERVICER WEBSITE(OPTIONAL)</label>
              <div className="col-6">
                <input type="text" className='form-control' name='servicerWebsite' value={formData.servicerWebsite} placeholder='Servicer Website(optional)' onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-4">
              <label for="" className='text-muted mb-2'>YELP OR BETTER BUSINESS BUREAU REVIEW PAGE (OPTIONAL)</label>
              <div className="col-6">
                <input type="text" className='form-control' name='betterBusinessBureauReviewPage' value={formData.betterBusinessBureauReviewPage} placeholder='Yelp or Better Business Bureau Review Page (optional)' onChange={handleChange} />
              </div>
            </div>
            <div className="mt-5 pb-5">
              <button className="btn btn-success" onClick={registration}>NEXT</button>
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