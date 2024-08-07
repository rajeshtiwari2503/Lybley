import Image from 'next/image';
import React from 'react'
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import VerifiedIcon from '@mui/icons-material/Verified';
import InputIcon from '@mui/icons-material/Input';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Link from 'next/link';

const Works = (props) => {

  // d-block d-md-none
  return (
    <>
      {props?.servicer ?
        <div style={{ backgroundColor: "#D4E2D4" }}>
          <div className='container '>
            <> <div className="row">
              <div className="col-12 text-center">
                <div className='fs-5 fw-bold'>How It Works</div>
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
              <div className='text-center pb-5'><button className='btn rounded-pill btn-primary fw-bold'><small>LEARN MORE</small></button></div>
            </>
          </div>
        </div>
        :
        <div style={{ backgroundColor: "#D4E2D4", paddingTop: "100px" }}>

          <>
            <div style={{ marginTop: "130px" }} className='container  d-none d-md-block '>
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">

                  <div className='d-flex justify-content-center    mt-5'>
                    {/* <img src="https://www.nicepng.com/png/detail/182-1827086_home-appliances-transparent-images-panasonic-ne-1054f-1000w.png" alt="..." className='img-fluid' width="400px" height="400px" /> */}
                    {/* <img src="/appliances.png" alt="..." className='img-fluid' width="400px" height="400px" /> */}
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/NQN8S5Ro2ZQ?si=ZSWjSdsNE1SNA0uS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br />

                  </div>
                </div>
                <div className="col-12 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-center flex-column col-md-6 col-lg-6">
                  {/* <div className='fs-2 fw-bold mt-5 mb-4'>How It Works</div> */}
                  <h4 className='mt-5 '>Welcome to Lybley Home Warranty, your trusted partner in home care solutions. Our subscription-based plans provide comprehensive coverage for your home appliances and systems, ensuring you never have to worry about unexpected breakdowns. Experience peace of mind with our reliable repair and replacement services. </h4>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "-60px" }}className='  d-block d-md-none '>
              <div className='container '>
                <div className="row align-items-center ms-2 me-2">
                  <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                    <div className='d-flex justify-content-center     mt-5'>
                      {/* <img src="https://www.nicepng.com/png/detail/182-1827086_home-appliances-transparent-images-panasonic-ne-1054f-1000w.png" alt="..." className='img-fluid' width="400px" height="400px" /> */}
                      {/* <img src="/appliances.png" alt="..." className='img-fluid' width="400px" height="400px" /> */}
                      <iframe width="100%" height="300" src="https://www.youtube.com/embed/NQN8S5Ro2ZQ?si=ZSWjSdsNE1SNA0uS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br />

                    </div>

                  </div>
                  <div className="col-12 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-center flex-column col-md-6 col-lg-6">
                    {/* <div className='fs-2 fw-bold mt-5 mb-4'>How It Works</div> */}
                    <h4 className='mt-5 '>Welcome to Lybley Home Warranty, your trusted partner in home care solutions. Our subscription-based plans provide comprehensive coverage for your home appliances and systems, ensuring you never have to worry about unexpected breakdowns. Experience peace of mind with our reliable repair and replacement services. </h4>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#8de4af" }} >
              <div className='container'>
                <div className='fs-2 fw-bold mt-5 mb-4 pt-5 text-center'>How It Works</div>
                <div className="row text-center   pb-3 mt-2 mt-md-5 mt-lg-5">
                  <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                    <SystemSecurityUpdateGoodIcon color='primary' fontSize='large' />
                    <div className='fw-bold fs-4 p-2'>Sign Up</div>
                    <p>Explore plans tailored to your needs, whether safeguarding essentials or prioritizing key elements, we've got you covered.</p>
                  </div>
                  <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                    <VerifiedIcon color='primary' fontSize='large' />
                    <div className='fw-bold fs-4 p-2'>Rest Easy</div>
                    <p>
                      Whenever you require assistance, our team of expert Certified Lybley Service technicians is prepared to step in and lend a hand.
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                    <InputIcon color='primary' fontSize='large' />
                    <div className='fw-bold fs-4 p-2'>
                      We're ready
                    </div>
                    <p>Access your account by logging in or utilize the convenient Lybley app to inform us about the situation and set up a schedule that suits you.</p>
                  </div>
                </div>
                <div className='text-center pb-5'>
                  <Link className='text-decoration-none' href={"/pricing"}>
                    <button className='btn rounded-pill btn-primary fw-bold'><small>LEARN MORE</small></button>
                  </Link>
                </div>
              </div>
            </div>
          </>

        </div>}

    </>
  )
}

export default Works;