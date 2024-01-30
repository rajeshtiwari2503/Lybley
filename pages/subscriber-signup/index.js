import React, { useState } from 'react'
import { useDataContext } from '../api/userData';
import httpCommon from '@/http-common';
import axios from 'axios';
import { useRouter } from 'next/router';


const SubscriberSignup = () => {
  const { data } = useDataContext();
  const userData = data;
  const [btn, setBtn] = useState("1");
  const [price, setPrice] = useState(data?.planPrice);

  const router = useRouter()
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

  // const subscribePlan = async () => {
  //   try {
  //     let body={realEstateAgentName:formData.fname+" "+formData.lname,planDetail:data?.planDetail,closingDate:formData.closingDate,location:data?.location,unit:+data?.unit,name:data?.firstName +" "+ data?.lastName,email:data?.email,contact:+data?.contact,planName:data?.planName,planPrice:btn==="1" ? +data?.planPrice : +price,planTime:btn==="1" ? "Monthly" : "Annually"};
  //     let response = await httpCommon.post("/registration",body);
  //     let data1 = response.data;
  //     alert("Plan subscribed");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  const handlePlan = (btn, price) => {
    setBtn(btn);
    setPrice(price);
  }

  const payment = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const totalPrice = +price
      let response = await httpCommon.post("/payment", { amount: totalPrice });
      let { data } = response;

      const options = {
        key: "rzp_live_yEWZ902y0STtSb", // Enter the Key ID generated from the Dashboard
        amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Lybley Home Appliances", //your business name
        description: "Payment for order",
        image: "https://lybley-webapp-collection.s3.amazonaws.com/PNG-031.png-1684751868223-284237810",
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (orderDetails) {
          try {
            let body = { realEstateAgentName: formData.fname + " " + formData.lname, planDetail: userData?.planDetail, closingDate: formData.closingDate, location: userData?.location, unit: +userData?.unit, name: userData?.firstName + " " + userData?.lastName, email: userData?.email, contact: +userData?.contact, planName: userData?.planName, planPrice: btn === "1" ? +userData?.planPrice : +price, planTime: btn === "1" ? "Monthly" : "Annually" };

            let response = await axios.post("https://lybleybackend-production.up.railway.app/registrationAndPayment", { response: orderDetails, customerData: body });
            let { data } = response;
            if (data?.status === true) {
              router.push("/");
            }
          } catch (err) {
            console.log(err);
          }
        },
        prefill: {
          name: formData.fname + " " + formData.lname, //your customer's name
          email: userData.email,
          contact: userData.contact
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='bg-light'>
      <div className='container'>
        <div className="row py-3 px-3">
          <div className=" d-block d-md-none col-12 col-md-3 col-lg-3 bg-dark rounded-4 px-3">
            <div className="d-flex align-items-center p-2 mt-3"> <img height={70} width={70} className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s" alt="" /> <h4 className='text-white ms-3'>LYBLEY</h4></div>
            <div className='bg-secondary rounded-pill p-1 d-flex justify-content-between mt-3'><button className={`btn text-white px-3 ${btn === "1" ? "btn-dark rounded-pill" : ""}`} onClick={() => handlePlan("1", data?.planPrice)}>Monthly</button><button className={`btn text-white px-3 ${btn === "2" ? "btn-dark rounded-pill" : ""}`} onClick={() => handlePlan("2", +data?.planPrice * 12)}>Annually</button></div>
            <div className="border text-white mt-3 rounded d-flex justify-content-between align-items-center p-2"><div>{data?.planName}</div> <div>{btn === "1" ? `${data?.planPrice} INR/mo` : `${price} INR/an`}</div></div>
            <div className='mt-2'> <a href="#" className='text-decoration-none'>Quick overview of the plan</a></div>
            <div className='border-bottom mt-2'></div>
            <div className="d-flex justify-content-between text-white align-items-center mt-3 mb-2"> <h6>Total</h6> <h4>{btn === "1" ? `${data?.planPrice} INR/mo` : `${price} INR/an`}</h4></div>
          </div>
          <div className="col-12  col-md-8 col-lg-8">
            <div className='mt-5'  >
              <h4>Tell us about your home purchase</h4>
              <div className="form-group mt-5">
                <label for="" className='text-muted mb-2'>Buyer's Real Estate Agent's First Name</label>
                <div className="col-12 col-md-6">
                  <input type="text" className='form-control' name='fname' value={formData.fname} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group mt-3">
                <label for="" className='text-muted mb-2'>Buyer's Real Estate Agent's Last Name</label>
                <div className="col-12 col-md-6">
                  <input type="text" className='form-control' name='lname' value={formData.lname} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group mt-3">
                <label for="" className='text-muted mb-2'>Closing Date</label>
                <div className="col-12 col-md-6">
                  <input type="date" className='form-control' name='closingDate' value={formData.closingDate} onChange={handleChange} />
                </div>
              </div>
              <div className="mt-2 text-muted">
                <span className=''>Your subscription will begin on closing date you select.</span> <br />
                <span>Your credit card won't be charged until then.</span>
              </div>
              <div className="mt-5 col-5 pb-5 d-flex justify-content-between">
                <button className="btn btn-primary rounded-pill" onClick={payment}>Payment</button>
                <button className="btn btn-primary rounded-pill" onClick={payment}>Skip</button>
              </div>
            </div>
          </div>
          <div className=" d-none d-md-block col-12 col-md-4 col-lg-4 bg-dark rounded-4 px-3">
            <div className="d-flex align-items-center p-2"> <img height={70} width={70} className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s" alt="" /> <h4 className='text-white ms-3'>LYBLEY</h4></div>
            <div className="border text-white mt-5 rounded d-flex justify-content-between align-items-center p-2"><div>{data?.planName}</div> <div>{btn === "1" ? `${data?.planPrice} INR/mo` : `${price} INR/an`}</div></div>
            <div className='mt-2'> <a href="#" className='text-decoration-none'>Quick overview of the plan</a></div>
            <div className='border-bottom mt-2'></div>
            <div className="d-flex justify-content-between text-white align-items-center mt-3"> <h6>Total</h6> <h4>{btn === "1" ? `${data?.planPrice} INR/mo` : `${price} INR/an`}</h4></div>
            <div className='bg-secondary rounded-pill p-1 d-flex justify-content-between'><button className={`btn text-white px-5 ${btn === "1" ? "btn-dark rounded-pill" : ""}`} onClick={() => handlePlan("1", data?.planPrice)}>Monthly</button><button className={`btn text-white px-5 ${btn === "2" ? "btn-dark rounded-pill" : ""}`} onClick={() => handlePlan("2", +data?.planPrice * 12)}>Annually</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriberSignup;