import React, { useState } from 'react'

const RequestService = () => {
    const [select , setSelect]=useState(1)

  return (
    <div>
        <div className=''>
            <div className='container   p-md-5'>
                 <div className='row   bg-secondary rounded shadow'>
                    <div className='col-12 col-md-6 col-lg-6  ps-md-5 pe-lg-5 mt-5 mb-5 border-end border-2 text-white '>
                        <div> 
                            <div className='fw-bold fs-2 text-white'>Find My Warranty</div>
                            <div className='fw-bold mt-3 text-white'>Look up your warranty to create your service request. Please provide one of the following:</div>
                            <div className='d-flex justify-content-between mt-3'>
                                <div className={ select===1 ?`border-bottom border-3 pb-1 text-warning fw-bold`:`fw-bold text-white`} onClick={()=>setSelect(1)}>Property Address</div>
                                <div className={ select===2 ?`border-bottom border-3 pb-1 text-warning fw-bold`:`fw-bold text-white`}onClick={()=>setSelect(2)}>Mobile Phone</div>
                                <div className={ select===3 ?`border-bottom border-3 pb-1 text-warning fw-bold`:`fw-bold text-white`}onClick={()=>setSelect(3)}>Email</div>
                            </div>
                           {select===1 && <div className='fw-bold mt-3 text-white'>Please fill in the exact address of the property for which you are filing a service request.</div>}
                           {select===2 && <div className='fw-bold mt-3 text-white'>Please fill in the mobile phone number that was used to create the warranty on the property for which you are filing a service request.</div>}
                           {select===3 && <div className='fw-bold mt-3 text-white'>Please fill in the email address that was used to create the warranty on the property for which you are filing a service request.</div>}
                          <div className='mt-4'>
                          {select===1 &&  <input type='text' className='form-control' placeholder='Enter Location' />}
                            {select===2 &&  <input type='number' className='form-control' placeholder='Enter Mobile Number' />}
                            {select===3 &&  <input type='email' className='form-control' placeholder=' Enter Email address' />}
                            </div>
                          <div className='mt-4'>
                            <button  className='btn btn-warning' >SUBMIT</button>
                          </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 ps-md-5 pe-lg-5 mt-md-5 mb-5'>
                        <div> 
                            <div className='fw-bold fs-2 text-white'>Log In</div>
                            <div className='fw-bold mt-3 text-white'>Easily submit service requests by entering your email address and password.</div>
                            <div>
                                 <button className='btn mt-4 btn-warning'>GO TO MY ACCOUNT</button>
                            </div>
                            
                            <div className="pb-4  mt-4">
                            <h6 className='fw-bold text-white'><i> DOWNLOAD LY3LEY APP</i></h6>
                            <div className='mt-4'>
                                <img className='me-2 bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/playstore_trans.png?w=256&q=75" width="150px" alt="" />
                                <img className='bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/appstore_trans.png?w=256&q=75" width="150px" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default RequestService