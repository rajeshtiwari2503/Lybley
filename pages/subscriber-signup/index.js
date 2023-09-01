import React, { useState } from 'react'

const SubscriberSignup = () => {

  const [btn,setBtn]=useState("1");
  return (
    <div className='bg-light'>
     <div className="row py-3 w-100">
     
      <div className="col-12 col-md-9 col-lg-9">
      <div className='mt-5' style={{marginLeft:"150px"}}>
      <h4>Tell us about your home purchase</h4>
      <div className="form-group mt-5">
        <label for="" className='text-muted mb-2'>Buyer's Real Estate Agent's First Name</label>
        <div className="col-5">
        <input type="text" className='form-control' name='name'/>
        </div>
      </div>
      <div className="form-group mt-3">
        <label for="" className='text-muted mb-2'>Buyer's Real Estate Agent's Last Name</label>
        <div className="col-5">
        <input type="text" className='form-control' name='name'/>
        </div>
      </div>
      <div className="form-group mt-3">
        <label for="" className='text-muted mb-2'>Closing Date</label>
        <div className="col-3">
        <input type="date" className='form-control' name='name'/>
        </div>
      </div>
      <div className="mt-2 text-muted">
      <span className=''>Your subscription will begin on closing date you select.</span> <br/>
      <span>Your credit card won't be charged until then.</span>
      </div>
      <div className="mt-5 pb-5">
      <button className="btn btn-primary rounded-pill">NEXT</button>
      </div>
      </div>
      </div>
      <div className="col-12 col-md-3 col-lg-3 bg-dark rounded-4 px-3">
         <div className="d-flex align-items-center p-2"> <img height={70} width={70} className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s" alt="" /> <h4 className='text-white ms-3'>LYBLEY</h4></div>
         <div className="border text-white mt-5 rounded d-flex justify-content-between align-items-center p-2"><div>Simple 1200 monthly <br/> buyes</div> <div>50 INR/mo</div></div>
        <div className='mt-2'> <a href="#" className='text-decoration-none'>Quick overview of the plan</a></div>
        <div className='border-bottom mt-2'></div>
        <div className="d-flex justify-content-between text-white align-items-center mt-3"> <h6>Total</h6> <h4>50 INR/mo</h4></div>
        <div className='bg-secondary rounded-pill p-1 d-flex justify-content-between'><button className={`btn text-white px-5 ${btn==="1" ? "btn-dark rounded-pill" : ""}`} onClick={()=>setBtn("1")}>Monthly</button><button className={`btn text-white px-5 ${btn==="2" ? "btn-dark rounded-pill" : ""}`} onClick={()=>setBtn("2")}>Annually</button></div>
      </div>
     </div>
    </div>
  )
}

export default SubscriberSignup;