import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Subscription from '../subscription';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventIcon from '@mui/icons-material/Event';
import GradeIcon from '@mui/icons-material/Grade';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Faqs from '../faqs';
import Available from '../available';
// import style from "./price.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   customAccordion: {
//     border: 'none',
//     boxShadow: 'none',
//     '&:before': {
//       display: 'none',
//     },
//   },
// });


const Pricing = () => {
    // const classes=useStyles();
    return (
        <>
        <div  >
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-12 col-md-3  col-lg-3'></div>
                    <div className='col-12 col-md-6 col-lg-6 shadow rounded' style={{ backgroundColor: "#5396B9" }}>
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
                            <div className='col-12 text-center text-white mt-5'>
                                Is this a home you are purchasing or have purchased within the last 15 days?
                            </div>
                            <div className='col-12 mt-3 mb-3 text-center'>
                                <button className='btn btn-primary' >SHOW PRICES</button>
                            </div>
                            <div className='col-12 text-center text-white'>
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

                            <div className="col-12 col-md-4 col-lg-4 mt-5 shadow bg-white rounded-4">
                                <h5 className='text-center mt-2'>Simple</h5>
                                <div className='text-center'>our plan for protecting vital home systems</div>
                                <div className="p-3">
                                    <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                        <h5 className='text-center'> Want to see your price?</h5>
                                        <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                        <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                    </div>
                                </div>
                                <div className=" mt-3 d-flex text-muted justify-content-around">
                                    <CancelIcon /> <div>It's Covered upgrade</div><InfoIcon />
                                </div>
                                <div className="mt-2 d-flex text-muted pb-3 justify-content-around">
                                    <CancelIcon /> <div>Max Limits Upgrade</div><InfoIcon />
                                </div>
                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                            <div> <CheckCircleIcon color='primary' />  Range/Oven/Cooktop</div>
                                            <div> <CheckCircleIcon color='primary' /> Built-in Microwave </div>
                                            <div> <CheckCircleIcon color='primary' /> Garbage Disposal </div>
                                            <div>  <CheckCircleIcon color='primary' /> Trash Compactor </div>
                                            <div> <CheckCircleIcon color='primary' />  Range Exhaust Fan </div>
                                            <div className='text-muted'> <CheckCircleIcon />  Kitchen Refrigerator w/ Ice Maker & Dispenser </div>
                                            <div className='text-muted'> <CheckCircleIcon />  Clothes Washer </div>
                                            <div className='text-muted'> <CheckCircleIcon />  Clothes Dryer </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Systems</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div><CheckCircleIcon color='primary' /> Air Conditioning </div>
                                            <div><CheckCircleIcon color='primary' /> Heating System / Heat Pump</div>
                                            <div><CheckCircleIcon color='primary' /> Ductwork</div>
                                            <div><CheckCircleIcon color='primary' /> Interior Plumbing</div>
                                            <div><CheckCircleIcon color='primary' /> Plumbing Stoppages</div>
                                            <div><CheckCircleIcon color='primary' /> Water Heater</div>
                                            <div><CheckCircleIcon color='primary' /> Interior Electrical</div>
                                            <div><CheckCircleIcon color='primary' /> Ceiling Fans</div>
                                            <div><CheckCircleIcon color='primary' /> Central Vacuum</div>
                                            <div><CheckCircleIcon color='primary' /> Garage Door Openers</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Outdoor</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div className='text-muted'><CancelIcon /> Gas Fireplaces & Outdoor Gas Fire Pots/Pits</div>
                                            <div className='text-muted'><CancelIcon /> Landscape Lighting</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                           <div className='text-muted'><CancelIcon /> Smart Home Devices</div>
                                           <div className='text-muted'><CancelIcon /> Warming & Cooling Drawers</div>
                                           <div className='text-muted'><CancelIcon /> Enhanced Plumbing Upgrade</div>
                                           <div className='text-muted'><CancelIcon /> It's Covered upgrade</div>
                                           <div className='text-muted'><CancelIcon /> Washer & Dryer</div>
                                           <div className='text-muted'><CancelIcon /> Kitchen Refrigerator w/ Ice Maker & Dispenser</div>
                                           <div className='text-muted'><CancelIcon /> Water Softener and Reverse Osmosis</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                                <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                                <hr />
                                <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                            
                                <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                            </div>
                            <div className="col-12 col-md-4 text-white col-lg-4 mt-3 mt-md-0 mt-lg-0 bg-dark shadow rounded-4">
                                <div className="px-4"><h5 className='fw-bold text-center bg-warning p-2 text-dark rounded-bottom '>MOST POPULER</h5></div>
                                <h5 className='text-center mt-2'>Signature</h5>
                                <div className='text-center'>Just the right coverage for extra busy homes</div>
                                <div className="p-3">
                                    <div className='rounded mt-3 bg-secondary rounded-5 pt-4'>
                                        <h5 className='text-center'> Want to see your price?</h5>
                                        <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                        <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                    </div>
                                </div>
                                <div className=" mt-3 d-flex justify-content-around">
                                    <CheckCircleIcon color='primary' /> <div>It's Covered upgrade</div><InfoIcon />
                                </div>
                                <div className="mt-2 d-flex text-secondary pb-3 justify-content-around">
                                    <CancelIcon /> <div>Max Limits Upgrade</div><InfoIcon />
                                </div>
                                <Accordion style={{ border: "0px", boxShadow: "none" }} className='bg-dark text-white'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                            <div> <CheckCircleIcon color='primary' />  Range/Oven/Cooktop</div>
                                            <div> <CheckCircleIcon color='primary' /> Built-in Microwave </div>
                                            <div> <CheckCircleIcon color='primary' /> Garbage Disposal </div>
                                            <div>  <CheckCircleIcon color='primary' /> Trash Compactor </div>
                                            <div> <CheckCircleIcon color='primary' />  Range Exhaust Fan </div>
                                            <div> <CheckCircleIcon color='primary' />  Kitchen Refrigerator w/ Ice Maker & Dispenser </div>
                                            <div> <CheckCircleIcon color='primary' />  Clothes Washer </div>
                                            <div> <CheckCircleIcon color='primary' />  Clothes Dryer </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }} className='bg-dark text-white'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Systems</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div><CheckCircleIcon color='primary' /> Air Conditioning </div>
                                            <div><CheckCircleIcon color='primary' /> Heating System / Heat Pump</div>
                                            <div><CheckCircleIcon color='primary' /> Ductwork</div>
                                            <div><CheckCircleIcon color='primary' /> Interior Plumbing</div>
                                            <div><CheckCircleIcon color='primary' /> Plumbing Stoppages</div>
                                            <div><CheckCircleIcon color='primary' /> Water Heater</div>
                                            <div><CheckCircleIcon color='primary' /> Interior Electrical</div>
                                            <div><CheckCircleIcon color='primary' /> Ceiling Fans</div>
                                            <div><CheckCircleIcon color='primary' /> Central Vacuum</div>
                                            <div><CheckCircleIcon color='primary' /> Garage Door Openers</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }} className='bg-dark text-white'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Outdoor</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div className='text-secondary'><CancelIcon /> Gas Fireplaces & Outdoor Gas Fire Pots/Pits</div>
                                            <div className='text-secondary'><CancelIcon /> Landscape Lighting</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }} className='bg-dark text-white'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                           <div className='text-secondary'><CancelIcon /> Smart Home Devices</div>
                                           <div className='text-secondary'><CancelIcon /> Warming & Cooling Drawers </div>
                                           <div className='text-secondary'><CancelIcon /> Enhanced Plumbing Upgrade</div>
                                           <div><CheckCircleIcon color='primary' /> It's Covered upgrade</div>
                                          <div><CheckCircleIcon color='primary' />  Washer & Dryer</div>
                                           <div><CheckCircleIcon color='primary' /> Kitchen Refrigerator w/ Ice Maker & Dispenser</div>
                                           <div className='text-secondary'><CancelIcon /> Water Softener and Reverse Osmosis </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                                <div className='ps-2 '><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                                <hr />
                                <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                                <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 mt-3 mt-md-5 mt-lg-5 shadow bg-white rounded-4">
                                <h5 className='text-center mt-2'>Lux</h5>
                                <div className='text-center'>Maximum coverage for major peace of mind</div>
                                <div className="p-3">
                                    <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                        <h5 className='text-center'> Want to see your price?</h5>
                                        <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                        <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                    </div>
                                </div>
                                <div className=" mt-3 d-flex justify-content-around">
                                    <CheckCircleIcon color='primary' /> <div>It's Covered upgrade</div><InfoIcon />
                                </div>
                                <div className="mt-2 d-flex pb-3 justify-content-around">
                                    <CheckCircleIcon color='primary' /> <div>Max Limits Upgrade</div><InfoIcon />
                                </div>
                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                            <div> <CheckCircleIcon color='primary' />  Range/Oven/Cooktop</div>
                                            <div> <CheckCircleIcon color='primary' /> Built-in Microwave </div>
                                            <div> <CheckCircleIcon color='primary' /> Garbage Disposal </div>
                                            <div>  <CheckCircleIcon color='primary' /> Trash Compactor </div>
                                            <div> <CheckCircleIcon color='primary' />  Range Exhaust Fan </div>
                                            <div> <CheckCircleIcon color='primary' />  Kitchen Refrigerator w/ Ice Maker & Dispenser </div>
                                            <div> <CheckCircleIcon color='primary' />  Clothes Washer </div>
                                            <div> <CheckCircleIcon color='primary' />  Clothes Dryer </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Systems</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div><CheckCircleIcon color='primary' /> Air Conditioning </div>
                                            <div><CheckCircleIcon color='primary' /> Heating System / Heat Pump</div>
                                            <div><CheckCircleIcon color='primary' /> Ductwork</div>
                                            <div><CheckCircleIcon color='primary' /> Interior Plumbing</div>
                                            <div><CheckCircleIcon color='primary' /> Plumbing Stoppages</div>
                                            <div><CheckCircleIcon color='primary' /> Water Heater</div>
                                            <div><CheckCircleIcon color='primary' /> Interior Electrical</div>
                                            <div><CheckCircleIcon color='primary' /> Ceiling Fans</div>
                                            <div><CheckCircleIcon color='primary' /> Central Vacuum</div>
                                            <div><CheckCircleIcon color='primary' /> Garage Door Openers</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Outdoor</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div><CheckCircleIcon color='primary' /> Gas Fireplaces & Outdoor Gas Fire Pots/Pits</div>
                                            <div><CheckCircleIcon color='primary' /> Landscape Lighting</div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ border: "0px", boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                           <div><CheckCircleIcon color='primary' /> Smart Home Devices</div>
                                           <div><CheckCircleIcon color='primary' /> Warming & Cooling Drawers</div>
                                           <div><CheckCircleIcon color='primary' /> Enhanced Plumbing Upgrade</div>
                                           <div><CheckCircleIcon color='primary' /> It's Covered upgrade</div>
                                           <div><CheckCircleIcon color='primary' /> Washer & Dryer</div>
                                           <div><CheckCircleIcon color='primary' /> Kitchen Refrigerator w/ Ice Maker & Dispenser</div>
                                           <div><CheckCircleIcon color='primary' /> Water Softener and Reverse Osmosis </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                                <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                                <hr />
                                <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
            
                                <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                            </div>
                            <div className='shadow mt-4 rounded-4 text-center p-3'><h5>A $95 copay applies to covered services and is payable at the time a service appointment is scheduled.</h5></div>
                            <div className='shadow mt-3 rounded-4 text-center p-3'><h5>Real Estate Agent?  <a href="" className='text-decoration-none'>Click here</a></h5></div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-lg-2"></div>

            </div>
            <Subscription />
            <div
            // style={{ backgroundColor: "#D4E2D4" }}
            >
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
                <div className="container">
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
                </div>
                <div className='text-center mt-3'><small>These services are not available in all markets and price vary depending on location.</small></div>
            </div>
            <div style={{ backgroundColor: "#FFFCE1" }}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src="https://static.vecteezy.com/system/resources/previews/023/986/318/original/an-open-gift-box-containing-photo-frames-and-graduation-caps-perfect-for-congratulation-png.png" className='card-img-top' alt="..." />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column col-lg-6">
                            <h2 className='py-3'>Congratulations on your new home!</h2>
                            <p>Whether you're moving into your first house or your next one, Super's In the Clear plan will help take away the worry of finding a broken appliance or system that wasn't disclosed during the purchase process.</p>
                            <p>Signing up for In the Clear is easy: submit the home inspection report you got when buying the house and we'll check it over for eligible appliances and systems that passed inspection.</p>
                            <p>Subscribers who find a broken appliance or system that's not covered with their plan shouldn't worry. We add $50 in Maintenance Rewards to your account.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-center text-white py-5">
                <h2>Sign up for Lybley’s home care subscription today</h2>
                <button className='btn btn-primary rounded-pill mt-4'><small>GET STARTED</small></button>
            </div>
            <Faqs />
            <div className="container d-md-block d-none mt-5" >
                <h2 className='text-center fw-bold'>What's Covered</h2>
                <div className="">
                    <div className="">
                        <div className="row border mt-4">
                            <div className="col-6 border p-4"><h5>Appliance</h5></div>
                            <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Simple</h5></div>
                            <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Signature</h5></div>
                            <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Lux</h5></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                    </div>
                </div>
                <div className="row border mt-4">
                    <div className="col-6 border p-4"><h5>Systems</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Simple</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Signature</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Lux</h5></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border">
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>

                <div className="row border mt-4">
                    <div className="col-6 border p-4"><h5>Additional Items</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Simple</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Signature</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Lux</h5></div>
                </div>
                <h2 className='text-center mt-5 fw-bold'>Optional Coverage</h2>
                <div className="row border mt-4">
                    <div className="col-4 border p-4"><h5>Optional Coverage</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Simple</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Signature</h5></div>
                    <div className="col-2 border p-4 text-center" style={{ backgroundColor: "#5396B9" }}><h5>Lux</h5></div>
                    <div className="col-2 border p-4 text-center"><h5>Price</h5></div>
                </div>
                <div className="row border">
                    <div className="col-4 border p-4"><div>It's Covered upgrade</div></div>
                    <div className="col-2 border p-4 text-center"><div>See below</div></div>
                    <div className="col-2 border p-4 text-center"><div>See below</div></div>
                    <div className="col-2 border p-4 text-center"><div>See below</div></div>
                    <div className="col-2 border p-4 text-center"><div>Fill out the form</div></div>
                </div>
            </div>
            <div className="container d-md-none d-block mt-5" >
                <h2 className='text-center fw-bold'>What's Covered</h2>
                <div className="" style={{fontSize:"10px"}}>
                    <div className="">
                        <div className="row border mt-4">
                            <div className="col-6 border p-4"><div>Appliance</div></div>
                            <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                            <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                            <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                        <div className="row border">
                            <div className="col-6 border p-4"><div>Dishwasher</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                            <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                        </div>
                    </div>
                </div>
                <div className="row border mt-4" style={{fontSize:"10px" ,fontWeight:"bold"}}>
                    <div className="col-6 border p-4"><div>Systems</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border"style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border"style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>
                <div className="row border" style={{fontSize:"10px"}}>
                    <div className="col-6 border p-4"><div>Dishwasher</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                    <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                </div>

                <div className="row border mt-4" style={{fontSize:"10px" ,fontWeight:"bold"}}>
                    <div className="col-6 border p-4"><div>Additional Items</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                </div>
                <h2 className='text-center mt-5 fw-bold'>Optional Coverage</h2>
                <div className="row border mt-4" style={{fontSize:"10px" ,fontWeight:"bold"}}>
                    <div className="col-3 border p-4"><div>Optional Coverage</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                    <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                    <div className="col-3 border pt-4 text-center"><div>Price</div></div>
                </div>
                <div className="row border"style={{fontSize:"10px"}}>
                    <div className="col-3 border p-4"><div>It's Covered upgrade</div></div>
                    <div className="col-2 border p-4 text-center"><div>See below</div></div>
                    <div className="col-2 border p-4 text-center"><div>See below</div></div>
                    <div className="col-2 border p-4 text-center"><div>See below</div></div>
                    <div className="col-3 border p-4 text-center"><div>Fill out the form</div></div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row pt-3 pb-3" style={{ backgroundColor: "#F5DEB3" }}>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                        <UpgradeIcon fontSize='large' />
                        <h2 className='py-2'>It's Covered Upgrade</h2>
                        <div>Rest easy knowing that every part needed for your repair is handled with the It's Covered upgrade.</div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <h5>Heating</h5>
                        <h5 className='pt-1'>Indoor Plumbing</h5>
                        <h5 className='pt-5' style={{ paddingTop: "2px" }}>Water Heater</h5>
                        <h5 className='pt-3'>Enhanced Stoppage Coverage</h5>
                        <h5 className='pt-1'>Indoor Electrical</h5>
                        <h5 className='pt-4'>Range/Cooktop/Oven</h5>
                        <h5 className='pt-5'>Lining Dishwasher</h5>
                        <h5 className='pt-1'>Microwave Oven</h5>
                        <h5 className='pt-1'>Garage Door</h5>
                        <h5 className='pt-1'>Permits & Code Upgrades</h5>
                        <h5 className='pt-1'>Refrigerant Recapture & disposal</h5>
                        <h5 className='pt-1'>Equipment Disposal</h5>
                        <h5 className='pt-1'>Structural Modification</h5>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <div>Registers and grills</div>
                        <div className='pt-1'>Faucets and shower-heads, pressure regulators, instant hot water dispensers, sewage ejectors, toilets of like quality, and costs to locate</div>
                        <div style={{ paddingTop: "3px" }}>
                            Expansion tanks and problems caused by sediment</div>
                        <div className='pt-4'>
                            Built-in lighting fixtures, smoke detectors, and doorbells</div>
                        <div className='pt-2'>Rotisseries, racks, handles, knobs, dials, and interior</div>
                        <div style={{ paddingTop: "25px" }}>Racks, rollers, and baskets</div>
                        <div className='pt-2'>Door glass, interior linings, and shelves</div>
                        <div style={{ paddingTop: "10px" }}>Springs, hinges, and remote transmitters</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div style={{ paddingTop: "100px" }}>To accomodate replacement equipment</div>
                    </div>
                </div>
            </div>
            <Available />
        </div>
        </>
    )
}

export default Pricing;