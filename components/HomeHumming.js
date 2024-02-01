import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventIcon from '@mui/icons-material/Event';
import GradeIcon from '@mui/icons-material/Grade';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const HomeHumming = () => {
  return (
    <div className='container pt-5'>
                        <div className="row">
                            <div className="col-12">
                                <div className='text-center fw-bold'>
                                    <h1>Keep your home humming</h1>
                                </div>
                                <div className="row">
                                    <div class="col-12 col-md-2 col-lg-2"></div>
                                    <div class="col-12 col-md-8 col-lg-8 text-center">Lybley's subscription-based home care introduces a fresh approach to guaranteeing homeownership tranquility. Our Certified Lybley service technicians, along with beneficial maintenance reminders, the Maintenance Marketplace, and the Maintenance Rewards program, collectively provide this assurance. We're excited for you to immerse yourself in the Lybley experience.</div>
                                    <div class="col-12 col-md-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center pt-5 pb-5 mt-2 mt-md-5 mt-lg-5">
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                                <MonetizationOnIcon color='primary' fontSize='large' />
                                <h4 className='p-2 fw-bold'>Copay</h4>
                                <p>When scheduling service for a covered repair, a standard copay is applicable. Irrespective of the duration the technician spends at your residence or whether the repair necessitates multiple visits, only one charge per claim will be incurred.</p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                                <EventIcon color='primary' fontSize='large' />
                                <h4 className='p-2 fw-bold'>Reminders</h4>
                                <p>
                                    Amidst your busy life, we're here to help. Regular maintenance reminders on our Tips page cover tasks like air filter changes and dryer vent cleaning. Choose between DIY or tapping into our Maintenance Marketplace for assistance.
                                </p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                                <GradeIcon color='primary' fontSize='large' />
                                <h4 className='p-2 fw-bold'>
                                    Maintenance Rewards
                                </h4>
                                <p>Spread the Lybley love, and we're here to show our gratitude when you refer friends, family, or neighbors to our home warranty subscription. Your referrals earn you Maintenance Rewards applied directly to your account.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='text-center'>
                                    <LocalGroceryStoreIcon color='primary' fontSize='large' />
                                </div>
                                <h4 className='text-center fw-bold p-2'>Maintenance Marketplace</h4>
                                <div className="row">
                                    <div class="col-12 col-md-2 col-lg-2"></div>
                                    <div class="col-12 col-md-8 col-lg-8 text-center">Count on our Lybley Certified technicians to assist with tasks essential for maintaining your home's prime condition and preventing future expensive issues. Here's a glimpse of what we offer*:</div>
                                    <div class="col-12 col-md-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default HomeHumming