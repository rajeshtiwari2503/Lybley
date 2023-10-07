import React, { useState } from 'react'
import { useDataContext } from '../api/userData';
import httpCommon from '@/http-common';


const SubscriberSignup = () => {
  const { data } = useDataContext();
  const [btn, setBtn] = useState("1");
  const [price,setPrice]=useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    closingDate: ""
  });

 const handleChange = (e) => {
    const { currentTarget: input } = e;
    let formData1 = { ...formData };
    formData1[input.name] = input.value;
    setFormData(formData1);
  }

  const subscribePlan = async () => {
    try {
      let body={realEstateAgentName:formData.fname+" "+formData.lname,planDetail:data?.planDetail,closingDate:formData.closingDate,location:data?.location,unit:+data?.unit,name:data?.firstName +" "+ data?.lastName,email:data?.email,contact:+data?.contact,planName:data?.planName,planPrice:btn==="1" ? +data?.planPrice : +price,planTime:btn==="1" ? "Monthly" : "Annually"};
      let response = await httpCommon.post("/registration",body);
      let data1 = response.data;
      alert("Plan subscribed");
    } catch (err) {
      console.log(err);
    }
  }
  const handlePlan=(btn,price)=>{
        setBtn(btn);
        setPrice(price);
   }
  return (
    <div className='bg-light'>
      <div className="row py-3 w-100">

        <div className="col-12 col-md-9 col-lg-9">
          <div className='mt-5' style={{ marginLeft: "150px" }}>
            <h4>Tell us about your home purchase</h4>
            <div className="form-group mt-5">
              <label for="" className='text-muted mb-2'>Buyer's Real Estate Agent's First Name</label>
              <div className="col-5">
                <input type="text" className='form-control' name='fname' value={formData.fname} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-3">
              <label for="" className='text-muted mb-2'>Buyer's Real Estate Agent's Last Name</label>
              <div className="col-5">
                <input type="text" className='form-control' name='lname' value={formData.lname} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mt-3">
              <label for="" className='text-muted mb-2'>Closing Date</label>
              <div className="col-3">
                <input type="date" className='form-control' name='closingDate' value={formData.closingDate} onChange={handleChange} />
              </div>
            </div>
            <div className="mt-2 text-muted">
              <span className=''>Your subscription will begin on closing date you select.</span> <br />
              <span>Your credit card won't be charged until then.</span>
            </div>
            <div className="mt-5 col-5 pb-5 d-flex justify-content-between">
              <button className="btn btn-primary rounded-pill" onClick={subscribePlan}>NEXT</button><button className="btn btn-secondary rounded-pill" onClick={subscribePlan}>SKIP</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-3 bg-dark rounded-4 px-3">
          <div className="d-flex align-items-center p-2"> <img height={70} width={70} className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s" alt="" /> <h4 className='text-white ms-3'>LYBLEY</h4></div>
          <div className="border text-white mt-5 rounded d-flex justify-content-between align-items-center p-2"><div>{data?.planName}</div> <div>{btn==="1" ? `${data?.planPrice} INR/mo` : `${price} INR/an`}</div></div>
          <div className='mt-2'> <a href="#" className='text-decoration-none'>Quick overview of the plan</a></div>
          <div className='border-bottom mt-2'></div>
          <div className="d-flex justify-content-between text-white align-items-center mt-3"> <h6>Total</h6> <h4>{btn==="1" ? `${data?.planPrice} INR/mo` : `${price} INR/an`}</h4></div>
          <div className='bg-secondary rounded-pill p-1 d-flex justify-content-between'><button className={`btn text-white px-5 ${btn === "1" ? "btn-dark rounded-pill" : ""}`} onClick={() => handlePlan("1",data?.planPrice)}>Monthly</button><button className={`btn text-white px-5 ${btn === "2" ? "btn-dark rounded-pill" : ""}`} onClick={() => handlePlan("2",+data?.planPrice*12)}>Annually</button></div>
        </div>
      </div>
    </div>
  )
}

export default SubscriberSignup;