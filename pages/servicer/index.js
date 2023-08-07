import React from 'react'
import Works from '../works'
import Faqs from '../faqs'
import Mobile from '../mobile'
import ServiceTech from '../serviceTech'
import PaidIcon from '@mui/icons-material/Paid';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
const Servicer = () => {
    return (
        <div>
            <div>
                <div>

                </div>
                <div>
                    <Works />
                </div>
                <div style={{ backgroundColor: "#15939a" }}>
                    <div className='container'>
                        <div className='row align-items-center p-5 text-white'>
                            <div className='col-12 col-md-6 col-lg-6 p-3'>
                                <div>
                                    <img style={{ width: "500px", height: "400px" }} className='img-card-top' src='https://e0.pxfuel.com/wallpapers/414/230/desktop-wallpaper-appliance-recalls-archives-home-appliances.jpg' alt='tips' />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 p-3'>
                                <div className='ps-5'>
                                    <div className='fw-bold fs-2'>
                                        Check Your Crawl Space for Mold and Leaks
                                    </div>
                                    <div className='mt-5'>
                                        That not-really-a-basement spot under your home that serves as a foundation? That’s your crawl space, not some forbidden zone lurking under the floorboards. It’s a part of your home, and you have to defend it. Take your crawl space from sketchy to solid by checking it for ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundColor:"#d4e2d4"}}>
                    <div className='container'>
                        <div className='row pt-5 '>
                            <div className='col-12 col-md-2 col-lg-2'></div>
                            <div className='col-12 col-md-8 col-lg-8 text-center'>
                                <div className='fw-bold fs-2 '>
                                    Is Super right for me?
                                </div>
                                <div>
                                    Great question. Service techs from around the country tell us that Super is the easiest way they’ve
                                    grown their business. They save time and money on marketing and reduce time and risk on collections
                                    because we handle all those things.
                                </div>
                            </div>
                            <div className='col-12 col-md-2 col-lg-2'></div>
                        </div>
                    </div>
                    <div className='container '>
                        <div className='row mt-5 pb-5'>
                            <div className='col-12 col-md-4 col-lg-4 text-center'>
                                <div>
                                    <PaidIcon color='info' fontSize='large' />
                                </div>
                                <div className='fw-bold fs-5 '>
                                    Larger payouts
                                </div>
                                <div className='mt-2'>
                                    Our business model of never asking you to offer a discount for your expertise and charging more for superior service enables our Certified Super service techs to earn more money from job one. Stop accepting the poor rates from home warranty companies.
                                </div>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 text-center'>
                                <div>
                                    <PaidIcon color='info' fontSize='large' />
                                </div>
                                <div className='fw-bold fs-5 '>
                                    Retail rate jobs
                                </div>
                                <div className='mt-2'>
                                    We deliver retail rate jobs to you, in addition to the regular repair and replacement appointments from our subscribers, as another way to make money. Plus, because you don’t have to advertise for these services, you lower the cost of running your business.
                                </div>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 text-center'>
                                <div>
                                    <MobileFriendlyIcon color='info' fontSize='large' />
                                </div>
                                <div className='fw-bold fs-5 '>
                                    No claims submissions
                                </div>
                                <div className='mt-2'>
                                    Traditional home warranty companies make more from providers who fail to submit claims properly. Here’s our deal — you do great work, we handle the scheduling and payouts. We might ask a question or two, but our goal is to reduce your administrative burden.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundColor:"#caaef3"}}>
                    <div className='container'>
                        <div className='row pt-5 '>
                        <div className='col-12 col-md-2 col-lg-2'></div>
                        <div className='col-12 col-md-8 col-lg-8 text-center'>
                                <div className='fw-bold fs-2 '>
                                How do I get started?
                                </div>
                                <div className='mt-3'>
                                It's pretty simple — click on the button below, let us know where you are and what type of work you do. We'll talk about a few things and contact you when needed. All we ask is that you show up on time, do a good job, and give us a fair rate. We promise to do the same.
                                </div>
                                <div className='mt-5 mb-5'>
                                    <button className='btn btn-light rounded' >SIGN UP FOR A FREE ACCOUNT</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-2 col-lg-2'></div>
                    </div>
                </div>
                <Mobile />
                <ServiceTech />
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-12 col-md-2 col-lg-2'></div>
                        <div className='col-12 col-md-8 col-lg-8'>
                            <Faqs />
                        </div>
                        <div className='col-12 col-md-2 col-lg-2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicer