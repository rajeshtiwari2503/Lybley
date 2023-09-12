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
import Link from 'next/link'
const Servicer = () => {
    return (
        <div>
            <div>
                <div className={`${style.whatHead}`}>
                    <div className='align-items-center text-center'>
                        <div className={`${style.whatText} pt-5 text-white`}  >
                            WHAT A TEAM
                        </div>
                        <div>
                    <Link href={"/servicer-signup"}>     <button className='btn btn-primary'>GET STARTED</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Works servicer={true} />
                </div>
                <div 
                className='bg-dark'
                // style={{ backgroundColor: "#15939a" }}
                >
                    <div className='container'>
                        <div className='row align-items-center p-5 text-white'>
                            <div className='col-12 col-md-6 col-lg-6 p-md-3 p-1'>
                                <div className='text-center'>
                                    <img className='img-card-top  servicerImgWdth'
                                    //  src='https://e7.pngegg.com/pngimages/400/819/png-clipart-car-maintenance-automobile-repair-shop-motor-vehicle-service-air-conditioning-professional-tshirt-swimming-pool.png' alt='tips'
                                     src='/technician.png' alt='tips'
                                      />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 p-md-3 p-1'>
                                <div className='ps-md-5 '>
                                    <div className='fw-bold fs-3'>
                                    Don't just take our word for it — hear from one of our Certified Lybley service technicians:
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
                                    Is Lybley right for me?
                                </div>
                                <div>
                                An excellent query. Service technicians across the nation affirm that Lybley is the most seamless method they've employed to expand their business. It streamlines their marketing efforts, saving both time and money, while also minimizing collection-related challenges and risks, since we manage these aspects comprehensively.
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
                                Our distinctive business approach, which refrains from requesting discounts on your expertise and values higher compensation for exceptional service, empowers our Certified Lybley service technicians to earn more right from their first job. Put an end to settling for inadequate rates from home warranty companies.
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
                                We provide you with retail-rate assignments, alongside the usual repair and replacement appointments from our subscribers, serving as an additional income source. Furthermore, since you're not required to advertise for these services, your business operational costs are reduced.
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
                                Conventional home warranty firms often capitalize on providers who struggle with submitting claims accurately. However, our approach is different. You excel in your craft, while we manage the scheduling and payouts. Occasionally, we might seek some information, but our main aim is to alleviate your administrative workload.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                className='bg-dark'
                //  style={{ backgroundColor: "#caaef3" }}
                 >
                    <div className='container'>
                        <div className='row pt-5 '>
                            <div className='col-12 col-md-2 col-lg-2'></div>
                            <div className='col-12 col-md-8 col-lg-8 text-center'>
                                <div className='fw-bold fs-2 text-white '>
                                    How do I get started?
                                </div>
                                <div className='mt-3 text-white'>
                                The process is straightforward. Just click the button below, share your location and the nature of your work. We'll have a discussion about some details and reach out to you as required. Our only request is that you maintain punctuality, deliver quality work, and offer a reasonable rate. In return, we commit to reciprocating the same level of dedication.
                                </div>
                                <div className='mt-5 mb-5'>
                                <Link href={"/servicer-signup"}>   <button className='btn btn-light rounded' >SIGN UP FOR A FREE ACCOUNT</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-2 col-lg-2'></div>
                    </div>
                </div>
                <div  style={{ backgroundColor: "#b6e6fa" }} className='d-md-block d-none '>
                    <div className='container pb-5'>
                        <div className='pt-5 fw-bold fs-2 text-center'>
                            How does Lybley compare?
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
                            <div className='  col-2 pt-3 text-center rounded-4' 
                             style={{ background: "#f4f4f4" }}
                            >
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
                            <div style={{width:"250px",textAlign:"left",fontSize:"10px"}} className='ps-2 bg-white m-0 p-0 pt-5 mt-5 rounded-4'>

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
                            <div className='   pt-3 text-center rounded-4' style={{ background: "#f4f4f4" }}>
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
                <Mobile servicer={true}/>
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