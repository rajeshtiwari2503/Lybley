import React, { useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Subscription from '../subscription';
import Faqs from '../faqs';
import Available from '../available';
// import style from "./price.module.css";
import Modal from 'react-bootstrap/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import httpCommon from '@/http-common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDataContext } from '../api/userData';
import ToastMessage from '../admin/common/ToastMessage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeHumming from '@/components/HomeHumming';
import MarketPlace from '@/components/MarketPlace';
import Breakdown from '@/components/Breakdown';
import PlanCoveredTable from '@/components/PlanCoveredTable';

 
function MyVerticallyCenteredModal(props) {



    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='text-center pt-3 rounded' style={{ backgroundColor: "aliceblue" }}>
                <Modal.Body className='p-4'>
                    {props.showMax ? <> <div className='fw-bold fs-4 text-center'>Max Limits Upgrade</div>
                        {/* <div className='mt-4'>Increased coverage limits for all major appliances and key systems.</div> </> : */}
                        <div className='mt-4'>We regret to inform you that we are unable to offer direct brand-for-brand replacements for certain products.</div> </> :
                        <> <div className='fw-bold fs-4 text-center'>It's Covered upgrade</div>
                            {/* <div className='mt-4'>Extended coverage for a variety of parts and components—from garage door springs to oven knobs.</div></> */}
                            <div className='mt-4'>We're thrilled to offer you an exclusive opportunity to   your home appliances plan,to repair completely free of cost. </div></>
                            }
                    <div className='mt-4'><button className='btn btn-primary rounded-pill' onClick={() => { props.setModalShow(false); props.setShowMax(false) }}><small>GOT IT</small></button></div>

                </Modal.Body>
            </div >
        </Modal >
    );
}

const Pricing = () => {
    const { data } = useDataContext();
    const [homeData, setHomeData] = React.useState({});
    // const [plans, setPlans] = React.useState([

    //     {
    //         _id: '64f1c4ea1eb82a1659c7241e', planName: 'Home Shield Lite', price: 100, appliances: [{ value: 'Air Conditions', checked: false },

    //         { value: 'Refrigerator', checked: false },

    //         { value: 'TV', checked: false },

    //         { value: 'Dishwasher', checked: true },

    //         { value: 'Gas Stove', checked: true },

    //         { value: 'Washing Machine', checked: true },

    //         { value: 'RO', checked: true },

    //         { value: 'Ceiling Fan', checked: true },

    //         { value: 'Mixer', checked: true },

    //         { value: 'Induction', checked: true },

    //         { value: 'Taster', checked: true },

    //         { value: 'Geyser', checked: true },

    //         { value: 'Chimney', checked: true }], plus:  [{value: 'Smart Home Devices', checked: true},

    //         {value: 'Plumbering', checked: false},

    //         {value: 'Electrician work', checked: false}]
    //     },

    //     { _id: '64f1e93e81ee741b5de6ca84', planName: 'Home Shield Basic', price: 108,  appliances: [{ value: 'Air Conditions', checked: false },

    //     { value: 'Refrigerator', checked: false },

    //     { value: 'TV', checked: false },

    //     { value: 'Dishwasher', checked: true },

    //     { value: 'Gas Stove', checked: true },

    //     { value: 'Washing Machine', checked: true },

    //     { value: 'RO', checked: true },

    //     { value: 'Ceiling Fan', checked: true },

    //     { value: 'Mixer', checked: true },

    //     { value: 'Induction', checked: true },

    //     { value: 'Taster', checked: true },

    //     { value: 'Geyser', checked: true },

    //     { value: 'Chimney', checked: true }], plus:  [{value: 'Smart Home Devices', checked: true},

    //     {value: 'Plumbering', checked: false},

    //     {value: 'Electrician work', checked: false}] },

    //     { _id: '64f1eadc81ee741b5de6ca88', planName: 'Home Shield Plus', price: 200,  appliances: [{ value: 'Air Conditions', checked: true },

    //     { value: 'Refrigerator', checked: false },

    //     { value: 'TV', checked: false },

    //     { value: 'Dishwasher', checked: true },

    //     { value: 'Gas Stove', checked: true },

    //     { value: 'Washing Machine', checked: true },

    //     { value: 'RO', checked: true },

    //     { value: 'Ceiling Fan', checked: true },

    //     { value: 'Mixer', checked: true },

    //     { value: 'Induction', checked: true },

    //     { value: 'Taster', checked: true },

    //     { value: 'Geyser', checked: true },

    //     { value: 'Chimney', checked: true }], plus:  [{value: 'Smart Home Devices', checked: true},

    //     {value: 'Plumbering', checked: false},

    //     {value: 'Electrician work', checked: false}]  },

    //     { _id: '64f1ec8281ee741b5de6ca8c', planName: 'Home Shield Pro Plus', price: 250,  appliances: [{ value: 'Air Conditions', checked: true },

    //     { value: 'Refrigerator', checked: true },

    //     { value: 'TV', checked: true },

    //     { value: 'Dishwasher', checked: true },

    //     { value: 'Gas Stove', checked: true },

    //     { value: 'Washing Machine', checked: true },

    //     { value: 'RO', checked: true },

    //     { value: 'Ceiling Fan', checked: true },

    //     { value: 'Mixer', checked: true },

    //     { value: 'Induction', checked: true },

    //     { value: 'Taster', checked: true },

    //     { value: 'Geyser', checked: true },

    //     { value: 'Chimney', checked: true }], plus:  [{value: 'Smart Home Devices', checked: true},

    //     {value: 'Plumbering', checked: true},

    //     {value: 'Electrician work', checked: true}]  }

    // ]);
    const [expanded, setExpanded] = React.useState('panel1');
    const [expanded2, setExpanded2] = React.useState('panel2');
    const [expanded3, setExpanded3] = React.useState('panel3');
    const [plans, setPlans] = React.useState([]);

    const router = useRouter();


    const { saveData } = useDataContext();



    const handleChange = (panel) => (event, newExpanded) => {
        panel === "panel1" ? setExpanded(newExpanded ? panel : false) : panel === "panel2" ? setExpanded2(newExpanded ? panel : false) : setExpanded3(newExpanded ? panel : false);
    };

    const [modalShow, setModalShow] = useState(false);
    const [showMax, setShowMax] = useState(false);
    useEffect(() => {
        getPlans();
    }, []);
    const openModel = () => {
        setShowMax(true)
        setModalShow(true);
    }

    const validationSchema = Yup.object().shape({
        location: Yup.string()
            .required('City is required')
            .min(4, 'City must be at least 4 characters')
            .max(40, 'City must not exceed 40 characters'),
        unit: Yup.string().required("Number of House years old required").min(1, "Min 1 digit is required").max(10, "Max 10 digit is required"),
        homeSize: Yup.string().required("Home Size is required in sqft"),
        pincode: Yup.string()
            .required('Pincode is required')
            .min(6, 'Pincode must be at least 6 characters')
            .max(6, 'Pincode must not exceed 6 characters'),
        firstName: Yup.string()
            .required('FirstName is required')
            .min(3, 'firstName must be at least 3 characters')
            .max(40, 'firstName must not exceed 40 characters'),
        lastName: Yup.string()
            .required('LastName is required')
            .min(3, 'lastName must be at least 3 characters')
            .max(40, 'lastName must not exceed 40 characters'),

        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        contact: Yup.string().required("Mobile number is required").min(10, "Min 10 digit is required").max(10, "Max 10 digit is required"),


    });
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });


    const handleRegistration = async (data) => {
        setHomeData(data);
    }

    const handlePlan = (planName, price) => {
        let plan = plans?.find(p1 => p1?.planName === planName);
        let data = { ...homeData, planDetail: plan, planName: planName, planPrice: price };
        saveData(data);
        router.push("/subscriber-signup");
    }

    const getPlans = async () => {
        try {
            let response = await httpCommon.get("/getPlans");
            let { data } = response;
            setPlans(data);
        } catch (err) {
            console.log(err);
        }
    }
    let homeShieldLite = plans?.find(p1 => p1?.planName === "Home Shield Lite");
    let homeShieldBasic = plans?.find(p1 => p1?.planName === "Home Shield Basic");
    let homeShieldPlus = plans?.find(p1 => p1?.planName === "Home Shield Plus");
    let homeShieldProPlus = plans?.find(p1 => p1?.planName === "Home Shield Pro Plus");

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleModal = (e) => {
        setModalShow(true);
    }
    return (
        <>
            <div  >
                <div className='container'>
                    {!(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ? <div className='row pt-5'>
                        <div className='col-12 col-md-3  col-lg-3'></div>
                        <div className='col-12 col-md-6 col-lg-6 shadow rounded' style={{ backgroundColor: "#5396B9" }}>

                            <div className='row p-5'>
                                <div className='col-12 col-md-7 col-lg-7 mt-4'>
                                    <input type='text' className='form-control' placeholder='Enter City' value={data?.city} name="location" {...register('location')} />
                                    <div className='text-danger'> {errors.location?.message}</div>
                                </div>
                                <div className='col-12 col-md-5 col-lg-5  mt-4'>
                                    <input type='number' className='form-control' placeholder='House years old' value={data?.unit} name="unit" {...register('unit')} />
                                    <div className='text-danger'> {errors.unit?.message}</div>
                                </div>
                                <div className='col-12 col-md-7 col-lg-7  mt-4'>
                                    <input type='number' className='form-control' placeholder='Home Size in sqft' name="homeSize"  {...register('homeSize')} />
                                    <div className='text-danger'> {errors.homeSize?.message}</div>
                                </div>
                                <div className='col-12 col-md-7 col-lg-5 mt-4'>
                                    <input type='number' className='form-control' placeholder='Pincode' name="pincode"  {...register('pincode')} />
                                    <div className='text-danger'> {errors.pincode?.message}</div>
                                </div>

                                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                    <input type='text' className='form-control' placeholder='First Name' name="firstName"  {...register('firstName')} />
                                    <div className='text-danger'> {errors.firstName?.message}</div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                    <input type='text' className='form-control' placeholder='Last Name' name="lastName"
                                        {...register('lastName')}
                                    />

                                    <div className='text-danger'> {errors.lastName?.message}</div>


                                </div>
                                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                    <input type='email' className='form-control' placeholder=' Enter Email address' name="email"{...register('email')} />
                                    <div className='text-danger'> {errors.email?.message}</div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                    <input type='number' className='form-control' placeholder='Enter Mobile Number' name="contact" {...register('contact')} />
                                    <div className='text-danger'> {errors.contact?.message}</div>
                                </div>
                                {/* <div className='col-12 text-center text-white mt-5'>
                                    Is this a home you are purchasing or have purchased within the last 15 days?
                                </div> */}
                                <div className='col-12 mt-5 mb-3 text-center'>
                                    <button className='btn btn-primary' type='button' onClick={handleSubmit(handleRegistration)} >SHOW PRICES</button>
                                </div>
                                <div className='col-12 text-center text-white'>
                                    Don't worry - this is all we need to show your customized prices below
                                </div>
                            </div>

                        </div>
                        <div className='col-12 col-md-3  col-lg-3'></div>
                    </div> :
                        <div className="text-center mt-3">
                            <h4 >{homeData?.location || homeData?.city}</h4>
                            <div><small>Home size: {homeData?.homeSize} sq ft</small></div>
                            <div><small>More than 100 Lybley subscribers already in your neigborhood </small> </div>
                            <h4>{homeData?.firstName}, here are plans tailored for your home in {homeData?.location || homeData?.city}</h4>
                        </div>
                    }
                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ? "" :
                        <div className='row mt-2 '>
                            <div className="col-md-3 col-lg-3 col-12"></div>
                            <div className="col-md-6 col-lg-6 col-12 text-center">
                                <small>By clicking SHOW PRICES, you consent to receiving communication from Lybley Home Inc. through calls, emails, and/or text messages, and acknowledge your acceptance of our Terms and Conditions & Privacy Policy. Standard messaging and data rates may apply.</small>
                                <div className="col-md-3 col-lg-3 col-12"></div>
                            </div>
                        </div>}
                    <div className="row mt-5  pt-5 pb-5 rounded-4" style={{backgroundColor:"#c8d8e4"}}>
                        <div className="col-12 col-md-1 col-lg-1"></div>
                        <div className="col-12 col-md-10 col-lg-10">
                            <div className="row justify-content-center">

                                {/* <div className="col-12 col-md-3 col-lg-3 mt-5 shadow bg-white rounded-4">
                                    <h6 className='text-center fw-bold rounded-3 bg-dark pt-2 pb-2 text-white'>{homeShieldLite?.planName}</h6>
                                    <div className='text-center'>our plan for protecting vital home systems</div>

                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='pt-3'>
                                            <h2 className='text-center'>{((+homeData?.homeSize * (+homeShieldLite?.price)) / 12).toFixed(0)} INR</h2>
                                            <div className='text-center'><small>paid monthly</small></div>
                                            <div className='text-center'><small>{(+homeData?.homeSize * (+homeShieldLite?.price))} INR paid annually</small></div>
                                            <div className='p-3'>
                                                <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldLite?.planName, ((+homeData?.homeSize * (+homeShieldLite?.price)) / 12).toFixed(0))}><small>SELECT PLAN</small></div>
                                            </div></div>
                                        :
                                        <div className="p-3">
                                            <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                                <h5 className='text-center'> Want to see your price?</h5>
                                                <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                                <div className="  text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2' onClick={scrollToTop}><small>FILL OUT THE FORM</small></div></div>
                                            </div>
                                        </div>
                                    }
                                    <div className=" mt-3 d-flex text-muted justify-content-start ms-3">
                                        <CancelIcon /> <div className='ps-2 pe-2'>In Upgraded</div><InfoIcon onClick={() => setModalShow(true)} />
                                    </div>
                                    <div className="mt-2 d-flex text-muted pb-3 justify-content-start ms-3">
                                        <CancelIcon /> <div className='ps-2 pe-2'>Brand for Brand</div><InfoIcon onClick={openModel} />
                                    </div>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ border: "0px", boxShadow: "none" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {homeShieldLite?.appliances?.map(a1 =>
                                                    a1?.checked === false ? <div className='text-muted'> <CancelIcon /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' />  {a1?.value}</div>
                                                )
                                                }

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange('panel3')} style={{ border: "0px", boxShadow: "none" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {homeShieldLite?.plus?.map(a1 =>
                                                    a1?.checked === false ? <div className='text-muted'> <CancelIcon /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' /> {a1?.value}</div>
                                                )
                                                }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <div className='text-center '>
                                        <Link className='text-decoration-none text-white bg-primary p-2 rounded-pill' href={"/planDetails"} >
                                            Plan Details
                                        </Link>
                                    </div>
                                    <hr />
                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldLite?.planName, ((+homeData?.homeSize * (+homeShieldLite?.price)) / 12).toFixed(0))}><small>SELECT PLAN</small></div>

                                        : <>
                                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2' onClick={handleModal}><small>QUICK OVERVIEW</small></div></div>
                                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2' onClick={scrollToTop}><small>FILL OUT THE FORM</small></div></div>
                                        </>
                                    }

                                </div> */}
                                <div className="col-12 col-md-4 col-lg-4 mt-5 shadow bg-white rounded-4">
                                    <h6 className='text-center fw-bold rounded-3 bg-dark pt-2 pb-2 text-white'>{homeShieldBasic?.planName} </h6>
                                    <div className='text-center'>Our plan for protecting vital home systems</div>

                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='pt-3'>
                                            <h2 className='text-center'>{((+homeData?.homeSize * (+homeShieldBasic?.price)) / 12).toFixed(0)} INR</h2>
                                            <div className='text-center'><small>paid monthly</small></div>
                                            <div className='text-center'><small>{(+homeData?.homeSize * (+homeShieldBasic?.price))} INR paid annually</small></div>
                                            <div className='p-3'>
                                                <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldBasic?.planName, ((+homeData?.homeSize * (+homeShieldBasic?.price)) / 12).toFixed(0))}><small style={{fontSize:"12px",cursor:"pointer"}}>SELECT PLAN</small></div>
                                            </div></div> :
                                        <div className="p-3">
                                            <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                                <h5 className='text-center'> Want to see your price?</h5>
                                                <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                                <div className="  text-center"> <div className=' btn btn-primary rounded-pill text-center text-white ps-2 pe-2 mb-4' onClick={scrollToTop}><small style={{fontSize:"11px",cursor:"pointer"}}>FILL OUT THE FORM</small></div></div>
                                            </div>
                                        </div>}
                                    <div className=" mt-3 d-flex text-muted justify-content-start ms-3">
                                        <CancelIcon /> <div className='ps-2 pe-2'> Upgraded</div><InfoIcon onClick={() => setModalShow(true)} />
                                    </div>
                                    <div className="mt-2 d-flex text-muted pb-3 justify-content-start ms-3">
                                        <CancelIcon /> <div className='ps-2 pe-2'>Brand for Brand</div><InfoIcon onClick={openModel} />
                                    </div>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ border: "0px", boxShadow: "none" ,marginTop:"-1px"}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{marginTop:"-20px"}}>
                                            <Typography>
                                                {homeShieldBasic?.appliances?.map(a1 =>
                                                    a1?.checked === false ? <div className='text-muted'> <CancelIcon /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' /> {a1?.value}</div>
                                                )
                                                }

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange('panel3')} style={{ border: "0px", boxShadow: "none" ,marginTop:"-20px"}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{marginTop:"-20px"}}>
                                            <Typography>
                                                {homeShieldBasic?.plus?.map(a1 =>
                                                    a1?.checked === false ? <div className='text-muted'> <CancelIcon /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' /> {a1?.value}</div>
                                                )
                                                }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <div className='text-center '>
                                        <Link style={{fontSize:"11px"}} className='text-decoration-none text-white bg-primary p-2 rounded-pill' href={"/planDetails"} >
                                            Plan Details
                                        </Link>
                                    </div>
                                    <hr />
                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldBasic?.planName, ((+homeData?.homeSize * (+homeShieldBasic?.price)) / 12).toFixed(0))} style={{fontSize:"11px",cursor:"pointer"}}> SELECT PLAN </div>

                                        : <>
                                            {/* <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2' onClick={handleModal}><small>QUICK OVERVIEW</small></div></div> */}
                                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center  text-white p-2 mb-3'  onClick={scrollToTop} style={{fontSize:"11px"}}> FILL OUT THE FORM </div></div>
                                        </>
                                    }

                                </div>
                                <div className="col-12 col-md-4 text-white col-lg-4 mt-3 mt-md-0 mt-lg-0 bg-dark shadow rounded-4">
                                    <div className="px-3"><h5 className='fw-bold text-center bg-warning p-1 text-dark rounded-bottom '>MOST POPULER</h5></div>
                                    <h6 className='text-center  pb-2 pt-3'>{homeShieldPlus?.planName}</h6>
                                    <div className='text-center'>Just the right coverage for extra busy homes</div>
                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='pt-3'>
                                            <h2 className='text-center'>{((+homeData?.homeSize * (+homeShieldPlus?.price)) / 12).toFixed(0)} INR</h2>
                                            <div className='text-center'><small>paid monthly</small></div>
                                            <div className='text-center'><small>{(+homeData?.homeSize * (+homeShieldPlus?.price))} INR paid annually</small></div>
                                            <div className='p-3'>
                                                <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldPlus?.planName, ((+homeData?.homeSize * (+homeShieldPlus?.price)) / 12).toFixed(0))}><small style={{fontSize:"12px",cursor:"pointer"}}>SELECT PLAN</small></div>
                                            </div></div> :
                                        <div className="p-3">
                                            <div className='rounded mt-3 bg-secondary rounded-5 pt-3'>
                                                <h5 className='text-center'> Want to see your price?</h5>
                                                <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                                <div className="  text-center"> <div className=' btn btn-primary rounded-pill text-center text-white ps-2 pe-2 mb-4' onClick={scrollToTop}><small style={{fontSize:"11px",cursor:"pointer"}}>FILL OUT THE FORM</small></div></div>
                                            </div>
                                        </div>}
                                    <div className=" mt-3 d-flex text-muted justify-content-start ms-3">
                                        <CheckCircleIcon color='primary' /> <div className='ps-2 pe-2 text-white'>In Upgraded</div><InfoIcon color='disabled' onClick={() => setModalShow(true)} />
                                    </div>
                                    <div className="mt-2 d-flex text-muted pb-3 justify-content-start ms-3">
                                        <CancelIcon color='disabled' /> <div className='ps-2 pe-2 text-secondary'>Brand for Brand</div><InfoIcon color='disabled' onClick={openModel} />
                                    </div>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ border: "0px", boxShadow: "none" ,marginTop:'-1px'}} className='bg-dark text-white'>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{marginTop:"-20px"}}>
                                            <Typography>
                                                {homeShieldPlus?.appliances?.map(a1 =>
                                                    a1?.checked === false ? <div> <CancelIcon color='disable' /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' /> {a1?.value}</div>
                                                )
                                                }

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange('panel3')} style={{ border: "0px", boxShadow: "none",marginTop:"-20px" }} className='bg-dark text-white'>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{marginTop:"-20px"}}>
                                            <Typography>
                                                {homeShieldPlus?.plus?.map(a1 =>
                                                    a1?.checked === false ? <div> <CancelIcon color='disable' /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' /> {a1?.value}</div>
                                                )
                                                }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <div className='text-center '>
                                        <Link style={{fontSize:"11px"}} className='text-decoration-none text-white bg-primary p-2 rounded-pill' href={"/planDetails"} >
                                            Plan Details
                                        </Link>
                                    </div>
                                    <hr />
                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldPlus?.planName, ((+homeData?.homeSize * (+homeShieldPlus?.price)) / 12).toFixed(0))} style={{fontSize:"11px",cursor:"pointer"}}>SELECT PLAN </div>

                                        : <>
                                            {/* <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2' onClick={handleModal}><small>QUICK OVERVIEW</small></div></div> */}
                                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2 mb-3' onClick={scrollToTop}style={{fontSize:"11px",cursor:"pointer"}}>FILL OUT THE FORM </div></div>
                                        </>
                                    }

                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mt-3 mt-md-5 mt-lg-5 shadow bg-white rounded-4">
                                    <h6 className='text-center fw-bold rounded-3 bg-dark pt-2 pb-2 text-white'>{homeShieldProPlus?.planName}</h6>
                                    <div className='text-center'>Maximum coverage for major peace of mind</div>
                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='pt-3'>
                                            <h2 className='text-center'>{((+homeData?.homeSize * (+homeShieldProPlus?.price)) / 12).toFixed(0)} INR</h2>
                                            <div className='text-center'><small>paid monthly</small></div>
                                            <div className='text-center'><small>{(+homeData?.homeSize * (+homeShieldProPlus?.price))} INR paid annually</small></div>
                                            <div className='p-3'>
                                                <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldProPlus?.planName, ((+homeData?.homeSize * (+homeShieldProPlus?.price)) / 12).toFixed(0))}><small style={{fontSize:"12px",cursor:"pointer"}}>SELECT PLAN</small></div>
                                            </div></div> :
                                        <div className="p-3">
                                            <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                                <h5 className='text-center'> Want to see your price?</h5>
                                                <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                                <div className="  text-center"> <div className=' btn btn-primary rounded-pill text-center text-white ps-2 pe-2 mb-4' onClick={scrollToTop}><small style={{fontSize:"11px",cursor:"pointer"}}>FILL OUT THE FORM</small></div></div>
                                            </div>
                                        </div>}
                                    <div className=" mt-3 d-flex justify-content-start ms-3">
                                        <CheckCircleIcon color='primary' /> <div className='ps-2 pe-2'>In Upgrade</div><InfoIcon onClick={() => setModalShow(true)} />
                                    </div>
                                    <div className="mt-2 d-flex pb-3 justify-content-start ms-3">
                                        <CheckCircleIcon color='primary' /> <div className='ps-2 pe-2'>Brands for Brands</div><InfoIcon onClick={openModel} />
                                    </div>
                                    <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')} style={{ border: "0px", boxShadow: "none",marginTop:"-1px" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{marginTop:"-20px"}}>
                                            <Typography>
                                                {homeShieldProPlus?.appliances?.map(a1 =>
                                                    (a1?.checked && <div> <CheckCircleIcon color='primary' />  {a1?.value}</div>)
                                                )
                                                }

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange('panel3')} style={{ border: "0px", boxShadow: "none",marginTop:"-20px" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"

                                        >
                                            <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{marginTop:"-20px"}}>
                                            <Typography>
                                                {homeShieldProPlus?.plus?.map(a1 =>
                                                    a1?.checked === false ? <div className='text-muted'> <CancelIcon /> {a1?.value} </div> :
                                                        <div> <CheckCircleIcon color='primary' /> {a1?.value}</div>
                                                )
                                                }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <div className='text-center '>
                                        <Link className='text-decoration-none text-white bg-primary p-2 rounded-pill' href={"/planDetails"}style={{fontSize:"11px",cursor:"pointer"}} >
                                            Plan Details
                                        </Link>
                                    </div>
                                    <hr />
                                    {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                                        <div className='bg-primary rounded-5 text-center text-white p-2' onClick={() => handlePlan(homeShieldProPlus?.planName, ((+homeData?.homeSize * (+homeShieldProPlus?.price)) / 12).toFixed(0))} style={{fontSize:"11px",cursor:"pointer"}}>SELECT PLAN </div>
                                        : <>
                                            {/* <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2' onClick={handleModal}><small>QUICK OVERVIEW</small></div></div> */}
                                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2 mb-3' onClick={scrollToTop} style={{fontSize:"11px",cursor:"pointer"}}>FILL OUT THE FORM </div></div>
                                        </>
                                    }


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-1 col-lg-1"></div>

                </div >
                <Subscription />
                <div

                >
                    <HomeHumming />

                    <MarketPlace />
                </div>
                <Breakdown />
                <Faqs />
                {/* <PlanCoveredTable /> */}
                <Available />
            </div >
            <MyVerticallyCenteredModal
                show={modalShow}
                // onHide={() => setModalShow(false)}
                showMax={showMax}
                setShowMax={setShowMax}
                setModalShow={setModalShow}
            />
        </>
    )
}

export default Pricing;