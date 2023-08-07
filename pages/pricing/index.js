import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Subscription from '../subscription';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventIcon from '@mui/icons-material/Event';
import GradeIcon from '@mui/icons-material/Grade';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Pricing = () => {
    return (
        <div className='bg-light'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-12 col-md-3  col-lg-3'></div>
                    <div className='col-12 col-md-6 col-lg-6 shadow bg-secondary rounded'>
                        <div className='row p-5'>
                            <div className='col-8 col-md-8 col-lg-8 '>
                                <input type='text' className='form-control' placeholder='Enter Location' />
                            </div>
                            <div className='col-4 col-md-4 col-lg-4 '>
                                <input type='number' className='form-control' placeholder='Unit' />
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                <input type='text' className='form-control' placeholder='First Name' />
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                <input type='text' className='form-control' placeholder='Last Name' />
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                <input type='email' className='form-control' placeholder=' Enter Email address' />
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                <input type='number' className='form-control' placeholder='Enter Mobile Number' />
                            </div>
                            <div className='col-12 text-center mt-5'>
                                Is this a home you are purchasing or have purchased within the last 15 days?
                            </div>
                            <div className='col-12 mt-3 mb-3 text-center'>
                                <button className='btn btn-primary' >SHOW PRICES</button>
                            </div>
                            <div className='col-12 text-center'>
                                Don't worry - this is all we need to show your customized prices below
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3  col-lg-3'></div>
                </div>
                <div className='row mt-2'>
                    <div className="col-md-3 col-lg-3 col-12"></div>
                    <div className="col-md-6 col-lg-6 col-12 text-center">
                        <small> By clicking SHOW PRICES, you agree to be contacted by Super Home Inc. via calls, emails and/or text messages, and accept our Terms and Conditions & Privacy Policy. Messaging and data rates may apply.</small>
                        <div className="col-md-3 col-lg-3 col-12"></div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-2 col-lg-2"></div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="row">

                            <div className="col-12 col-md-4 col-lg-4 shadow rounded-4">
                                <h5 className='text-center mt-2'>Simple</h5>
                                <div className='text-center'>our plan for protecting vital home systems</div>
                                <div className="p-3">
                                    <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                        <h6 className='text-center'> Want to see your price?</h6>
                                        <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                        <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                    </div>
                                </div>
                                <div className=" mt-3 d-flex text-muted justify-content-around">
                                    <CancelIcon /> <h6>It's Covered upgrade</h6><InfoIcon />
                                </div>
                                <div className="mt-2 d-flex text-muted justify-content-around">
                                    <CancelIcon /> <h6>Max Limits Upgrade</h6><InfoIcon />
                                </div>
                                <h6 className='fw-bold ps-2 mt-2'>Optional Coverage</h6>
                                <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                                <hr />
                                <div className="p-3"> <div className='bg-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                                <div className='text-center'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                            </div>
                            <div className="col-12 col-md-4 text-white col-lg-4 bg-dark shadow rounded-4">
                                <div className="px-4"><h6 className='fw-bold text-center bg-warning p-2 text-dark rounded-bottom '>MOST POPULER</h6></div>
                                <h5 className='text-center mt-2'>Signature</h5>
                                <div className='text-center'>Just the right coverage for extra busy homes</div>
                                <div className="p-3">
                                    <div className='rounded mt-3 bg-secondary rounded-5 pt-3'>
                                        <h6 className='text-center'> Want to see your price?</h6>
                                        <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                        <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                    </div>
                                </div>
                                <div className=" mt-3 d-flex justify-content-around">
                                    <CheckCircleIcon color='primary' /> <h6>It's Covered upgrade</h6><InfoIcon />
                                </div>
                                <div className="mt-2 d-flex text-secondary justify-content-around">
                                    <CancelIcon /> <h6>Max Limits Upgrade</h6><InfoIcon />
                                </div>
                                <h6 className='fw-bold ps-2 mt-2'>Optional Coverage</h6>
                                <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                                <hr />
                                <div className="p-3"> <div className='bg-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                                <div className='text-center'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 shadow rounded-4">
                                <h5 className='text-center mt-2'>Lux</h5>
                                <div className='text-center'>Maximum coverage for major peace of mind</div>
                                <div className="p-3">
                                    <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                        <h6 className='text-center'> Want to see your price?</h6>
                                        <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                        <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                    </div>
                                </div>
                                <div className=" mt-3 d-flex justify-content-around">
                                    <CheckCircleIcon color='primary' /> <h6>It's Covered upgrade</h6><InfoIcon />
                                </div>
                                <div className="mt-2 d-flex justify-content-around">
                                    <CheckCircleIcon color='primary' /> <h6>Max Limits Upgrade</h6><InfoIcon />
                                </div>
                                <h6 className='fw-bold ps-2 mt-2'>Optional Coverage</h6>
                                <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                                <hr />
                                <div className="p-3"> <div className='bg-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                                <div className='text-center'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                            </div>
                            <div className='shadow mt-4 rounded-4 text-center p-3'><h6>A $95 copay applies to covered services and is payable at the time a service appointment is scheduled.</h6></div>
                            <div className='shadow mt-3 rounded-4 text-center p-3'><h6>Real Estate Agent?  <a href="" className='text-decoration-none'>Click here</a></h6></div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-lg-2"></div>

            </div>
            <Subscription />
            <div style={{ backgroundColor: "#D4E2D4" }}>
                <div className='container pt-5'>
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center'>
                                <h1>Keep your home humming</h1>
                            </div>
                            <div className="row">
                                <div class="col-12 col-md-2 col-lg-2"></div>
                                <div class="col-12 col-md-8 col-lg-8 text-center">Super's subscription care for your home is a new way of ensuring peace of mind in homeownership with our Certified Super service techs, helpful maintenance reminders, the Maintenance Marketplace, and the Maintenance Rewards program. We can't wait for you to experience Super.</div>
                                <div class="col-12 col-md-2 col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center pt-5 pb-5 mt-2 mt-md-5 mt-lg-5">
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                            <MonetizationOnIcon color='primary' fontSize='large' />
                            <h5 className='p-2'>Copay</h5>
                            <p>Pay a standard copay when you book service for a covered repair. There's only one charge per claim, no matter how long the tech is at your home or if the repair takes more than one service visit.</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                            <EventIcon color='primary' fontSize='large' />
                            <h5 className='p-2'>Reminders</h5>
                            <p>
                                Look, a lot is going on in your world. We get it. We post regular maintenance reminders on our Tips page to help you keep on top of things like when it's time to change an air filter or clean your dryer vent. DIY or tap into our Maintenance Marketplace for help.
                            </p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                            <GradeIcon color='primary' fontSize='large' />
                            <h5 className='p-2'>
                                Maintenance Rewards
                            </h5>
                            <p>There's a lot of Super to go around, and we're here to thank you for referring friends, family, and neighbors to our home warranty subscription solution. We apply Maintenance Rewards to your account when you send us a referral.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center'>
                                <LocalGroceryStoreIcon color='primary' fontSize='large' />
                            </div>
                            <h5 className='text-center p-2'>Maintenance Marketplace</h5>
                            <div className="row">
                                <div class="col-12 col-md-2 col-lg-2"></div>
                                <div class="col-12 col-md-8 col-lg-8 text-center">Our Super Certified service techs are available to come out and help with the things you need to keep your home in top condition and prevent costly problems down the line. Here's what we can do*:</div>
                                <div class="col-12 col-md-2 col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                <div className="col-12 col-md-3 col-lg-3"></div>
                <div className="col-12 col-md-3 col-lg-3">
                    <ul>
                        <li>Lock Rekey</li>
                        <li>Preseason HVAC Tune-Up</li>
                        <li>Pest Control</li>
                        <li>Termite Treatment</li>
                        <li>Carpet Cleaning</li>
                        <li>Dryer Vent Cleaning</li>
                        <li>Window Washing</li>
                        <li>Tile & Grout Cleaning</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <ul>
                        <li>Gutter Cleaning</li>
                        <li>Power Washing</li>
                        <li>Chimney Cleaning</li>
                        <li>Ceiling Fan & Light Fixture Installation</li>
                        <li>TV Mounting</li>
                        <li>Lawn Fertilization</li>
                        <li>Lawn Pre-emergent Service</li>
                        <li>Weed Kill Treatment</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 col-lg-3"></div>
            </div>
            <div className='text-center mt-3'><small>These services are not available in all markets and price vary depending on location.</small></div>
            </div>
            
        </div>
    )
}

export default Pricing;