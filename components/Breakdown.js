import React from 'react'

const Breakdown = () => {
  return (
    <div> 
         <div style={{ backgroundColor: "#FFFCE1" }}>
                    <div className="container mt-4">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 col-lg-6">
                                {/* <img src="https://static.vecteezy.com/system/resources/previews/023/986/318/original/an-open-gift-box-containing-photo-frames-and-graduation-caps-perfect-for-congratulation-png.png" className='card-img-top' alt="..." /> */}
                               <div style={{width:"400px"  }}>  <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXARaOCorl57-s-rAczclD9SJ-v3VIvd_Zag&usqp=CAU" className='card-img-top' alt="..." />
                               </div>  
                                </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center flex-column col-lg-6">
                                <h2 className='py-3 fw-bold'>बेफिक्र with own and sudden home appliances breakdown!</h2>
                                <p>Whether you're embarking on the journey of homeownership for the first time or stepping into your next abode, Lybley's In the Clear plan is designed to alleviate the apprehension of encountering hidden appliance or system complications that might have slipped through the cracks during the purchase process.</p>
                                <p>Opting for the In the Clear plan is a seamless process: share the home inspection report you acquired during the house purchase, and our team will meticulously review it to identify the eligible appliances and systems that successfully passed inspection.</p>
                                <p>For subscribers who come across malfunctioning appliances or systems not covered by their existing plan, there's no need for undue concern. We generously augment your account with 50 INR in Maintenance Rewards, underscoring our commitment to providing a worry-free experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-dark text-center text-white py-5">
                    <h2>Sign up for Lybley’s home care subscription today</h2>
                    <button className='btn btn-primary rounded-pill mt-4' onClick={scrollToTop}><small>GET STARTED</small></button>
                </div> */}
    </div>
  )
}

export default Breakdown