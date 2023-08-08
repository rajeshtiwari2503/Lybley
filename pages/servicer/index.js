import React from 'react'
import Works from '../works'
import Faqs from '../faqs'
import Mobile from '../mobile'
import ServiceTech from '../serviceTech'
import PaidIcon from '@mui/icons-material/Paid';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import style from "./servicer.module.css"
const Servicer = () => {
    return (
        <div>
            <div>
                <div className={`${style.whatHead}`}>
                    <div className='align-items-center text-center'>
                        <div className={`${style.whatText} pt-5 `}  >
                            WHAT A TEAM
                        </div>
                        <div>
                            <button className='btn btn-primary'>GET STARTED</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Works />
                </div>
                <div style={{ backgroundColor: "#15939a" }}>
                    <div className='container'>
                        <div className='row align-items-center p-5 text-white'>
                            <div className='col-12 col-md-6 col-lg-6 p-md-3 p-1'>
                                <div className='text-center'>
                                    <img className='img-card-top  servicerImgWdth' src='https://e0.pxfuel.com/wallpapers/414/230/desktop-wallpaper-appliance-recalls-archives-home-appliances.jpg' alt='tips' />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 p-md-3 p-1'>
                                <div className='ps-md-5 '>
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
                <div style={{ backgroundColor: "#d4e2d4" }}>
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
                <div style={{ backgroundColor: "#caaef3" }}>
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
                <div  style={{ backgroundColor: "#b6e6fa" }} className='d-md-block d-none '>
                    <div className='container pb-5'>
                        <div className='pt-5 fw-bold fs-2 text-center'>
                            How does Super compare?
                        </div>
                        <div className={`  row  m-0 p-0 `} >
                            <div  className='  col-5 bg-white m-0 p-0 pt-5 mt-5 rounded-4 '>

                                <div className='pt-5'></div>
                                <div  className='border-top ps-4 pe-4 pt-2 pb-2'>
                                    Offers larger payments for home warranty covered breakdowns
                                </div>
                                <div className='border-top ps-4 pe-4 pt-4 pb-4'>
                                    Handles collecting payments directly from a client
                                </div>
                                <div className='border-top ps-4 pe-4 pt-3 pb-4'>
                                    Saves time and money by not advertising or buying leads
                                </div>
                                <div className='border-top ps-4 pe-4 pt-2 pb-2'>
                                    Reduces paperwork by not requiring claims submissions for covered breakdowns
                                </div>
                                <div className='border-top ps-4 pe-4 pt-2 pb-2'>
                                    Frees up time to work (and earn) by not responding to bid requests in an online marketplace
                                </div>
                                <div className='border-top ps-4 pe-4 pt-4 pb-4'>
                                    Provides opportunities for retail rate jobs
                                </div>
                                <div className='border-top ps-4 pe-4 pt-4 pb-4'>
                                    Handles customer service
                                </div>
                                <div className='border-top ps-4 pe-4 pt-2 pb-2'>
                                    Recoups time and money spent building and managing online profile
                                </div>
                                <div className='border-top ps-4 pe-4 pt-3 pb-3'>
                                    Takes into consideration your feedback of customers
                                </div>

                            </div>
                            <div className='  col-2 pt-3 text-center rounded-4' style={{ background: "#f5881f" }}>
                                <div className='fw-bold fs-2 pt-3'>
                                    <img className='card-img-top rounded' style={{ width: "80px", height: "80px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s' alt='logo' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-5 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='large' />
                                </div>

                            </div>

                            <div className=' col-5 bg-white mt-5   rounded-4'>
                                <div className='d-flex justify-content-between pb-4'>
                                    <div className='ps-5 pt-4 '>
                                        Review sites & marketplaces
                                    </div>
                                    <div className='ps-5 pt-4'>
                                        Home warranty companies
                                    </div>

                                </div>
                                
                                <div className=' row '>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <DoneIcon color='success' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                    <div className=' col-6 border-top d-flex justify-content-center  pt-3 pb-3'>
                                        <CloseIcon color='warning' fontSize='large' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.scrollmenu} d-md-none`}>
                    <div className={`${style.textDiv}`}>
                     <div  style={{ backgroundColor: "#b6e6fa" }}>
                    <div className='container1 pb-5'>
                        <div className='pt-5 fw-bold fs-2 text-center'>
                            How does Super compare?
                        </div>
                        <div className={`  d-flex  m-0 p-0 `} >
                            <div style={{width:"250px",textAlign:"left",fontSize:"10px"}} className='  ps-2  bg-white m-0 p-0 pt-5 mt-5 rounded-4 '>

                                <div className='pt-5'></div>
                                <div  className='border-top pe-2  pt-2 pb-2'>
                                    Offers larger payments for home warranty covered breakdowns
                                </div>
                                <div className='border-top pe-2 pt-3 pb-3'>
                                    Handles collecting payments directly from a client
                                </div>
                                <div className='border-top pe-2  pt-2 pb-2'>
                                    Saves time and money by not advertising or buying leads
                                </div>
                                <div className='border-top  pe-2 pt-2 pb-2'>
                                    Reduces paperwork by not requiring claims submissions for covered breakdowns
                                </div>
                                <div className='border-top  pe-2 pt-2 pb-2'>
                                    Frees up time to work (and earn) by not responding to bid requests in an online marketplace
                                </div>
                                <div className='border-top  pe-2 pt-3 pb-3'>
                                    Provides opportunities for retail rate jobs
                                </div>
                                <div className='border-top pe-2 pt-3 pb-3'>
                                    Handles customer service
                                </div>
                                <div className='border-top  pe-2 pt-2 pb-2'>
                                    Recoups time and money spent building and managing online profile
                                </div>
                                <div className='border-top pe-2 pt-3 pb-3 '>
                                    Takes into consideration your feedback of customers
                                </div>

                            </div>
                            <div className='   pt-3 text-center rounded-4' style={{ background: "#f5881f" }}>
                                <div className='fw-bold fs-2 pt-3'>
                                    <img className='card-img-top rounded' style={{ width: "80px", height: "80px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s' alt='logo' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-5 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-2 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-2 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-2 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-2 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-3 pb-3'>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>
                                <div className='  d-flex justify-content-center  pt-2 '>
                                    <DoneIcon color='success' fontSize='small' />
                                </div>

                            </div>

                            <div  className='   bg-white mt-5   rounded-4'>
                                <div className='d-flex justify-content-between pb-4'>
                                    <div style={{width:"100px",fontSize:"11px"}}className='ps-3 pt-4 '>
                                        Review sites & marketplaces
                                    </div>
                                    <div style={{width:"100px",fontSize:"11px"}} className='ps-3 pt-4'>
                                        Home warranty companies
                                    </div>

                                </div>
                                
                                <div className=' mt-3'>
                                    <div   className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <DoneIcon color='success' fontSize='small' />
                                        <DoneIcon color='success' fontSize='small' />
                                    </div>
                                    
                                    <div   className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <CloseIcon color='warning' fontSize='small' />
                                    </div>
                                   
                                    <div   className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <DoneIcon color='success' fontSize='small' />
                                    </div>
                                   
                                    <div   className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <DoneIcon color='success' fontSize='small' />
                                        <DoneIcon color='success' fontSize='small' />
                                    </div>
                                   
                                    <div  className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <DoneIcon color='success' fontSize='small' />
                                    </div>
                                   
                                    <div   className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <CloseIcon color='warning' fontSize='small' />
                                    </div>
                                    
                                    <div  className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <DoneIcon color='success' fontSize='small' />
                                    </div>
                                   
                                    <div  className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <CloseIcon color='warning' fontSize='small' />
                                    </div>
                                    
                                    <div   className={`${style.reviewDone} align-items-center  border-top d-flex justify-content-between ps-5 pe-5 `}>
                                        <CloseIcon color='warning' fontSize='small' />
                                        <CloseIcon color='warning' fontSize='small' />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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