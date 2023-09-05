import React, { useEffect, useState } from 'react'
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
           {props.showMax ?<> <div className='fw-bold fs-4 text-center'>Max Limits Upgrade</div>
            <div className='mt-4'>Increased coverage limits for all major appliances and key systems.</div> </>:
           <> <div className='fw-bold fs-4 text-center'>It's Covered upgrade</div>
            <div className='mt-4'>Extended coverage for a variety of parts and components—from garage door springs to oven knobs.</div></>}
            <div className='mt-4'><button className='btn btn-primary rounded-pill' onClick={() =>{ props.setModalShow(false); props.setShowMax(false)}}><small>GOT IT</small></button></div>
  
          </Modal.Body>
        </div >
      </Modal >
    );
  }

const Pricing = () => {
    const { data } = useDataContext();
    const [homeData,setHomeData]=React.useState({});
    const [plans,setPlans]=React.useState([]);
    const [expanded, setExpanded] = React.useState('panel1');
    const [expanded2, setExpanded2] = React.useState('panel2');
    const [expanded3, setExpanded3] = React.useState('panel3');

    const handleChange = (panel) => (event, newExpanded) => {
        panel === "panel1" ? setExpanded(newExpanded ? panel : false) : panel === "panel2" ? setExpanded2(newExpanded ? panel : false) : setExpanded3(newExpanded ? panel : false);
    };
  
    const [modalShow, setModalShow] = useState(false);
    const [showMax,setShowMax]=useState(false);
    useEffect(()=>{
     getPlans();
    },[]);
    const openModel=()=>{
        setShowMax(true)
        setModalShow(true);
    }

    const validationSchema = Yup.object().shape({
        location: Yup.string()
        .required('Location is required')
        .min(4, 'location must be at least 4 characters')
        .max(40, 'location must not exceed 40 characters'),
        firstName: Yup.string()
        .required('FirstName is required')
        .min(3, 'firstName must be at least 3 characters')
        .max(40, 'firstName must not exceed 40 characters'),
        lastName: Yup.string()
        .required('LastName is required')
        .min(3, 'lastName must be at least 3 characters')
        .max(40, 'lastName must not exceed 40 characters'),
        unit: Yup.string().required("Unit number is required").min(1, "Min 1 digit is required").max(10, "Max 10 digit is required"),
        homeSize:Yup.string().required("Home Size is required in sqft"),
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
        // alert(data.homeSize);
        // let regData={location:data?.location,unit:+data?.unit,name:data?.firstName +" "+ data?.lastName,email:data?.email,contact:+data?.contact,}
        // try {
             
        //     let response = await httpCommon.post("/registration",regData)
        //     let { data } = response;
        //     ToastMessage(data)
        // }
        // catch (err) {
        //     console.log(err)
        // }
    }

    const getPlans=async()=>{
        try{
          let response=await httpCommon.get("/getPlans");
          let {data}=response;
          setPlans(data);
        }catch(err){
          console.log(err);
        }
    }
    let homeShieldLite=plans?.find(p1=>p1?.planName==="Home Shield Lite");
    let homeShieldBasic=plans?.find(p1=>p1?.planName==="Home Shield Basic");
    let homeShieldPlus=plans?.find(p1=>p1?.planName==="Home Shield Plus");
    let homeShieldProPlus=plans?.find(p1=>p1?.planName==="Home Shield Pro Plus");
    
    return (
        <>
            <div  >
                <div className='container'>
                   {!(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?  <div className='row pt-5'>
                        <div className='col-12 col-md-3  col-lg-3'></div>
                        <div className='col-12 col-md-6 col-lg-6 shadow rounded' style={{ backgroundColor: "#5396B9" }}>
                            
                                <div className='row p-5'>
                                    <div className='col-8 col-md-8 col-lg-8 '>
                                        <input type='text' className='form-control' placeholder='Enter Location'value={data?.city} name="location" {...register('location')} />
                                        <div className='text-danger'> {errors.location?.message}</div>
                                    </div>
                                    <div className='col-4 col-md-4 col-lg-4 '>
                                        <input type='number' className='form-control' placeholder='Unit' value={data?.unit} name="unit" {...register('unit')} />
                                        <div className='text-danger'> {errors.unit?.message}</div>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        <input type='number' className='form-control' placeholder='Home Size in sqft' name="homeSize"  {...register('homeSize')}/>
                                        <div className='text-danger'> {errors.homeSize?.message}</div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                        <input type='text' className='form-control' placeholder='First Name' name="firstName"  {...register('firstName')}/>
                                        <div className='text-danger'> {errors.firstName?.message}</div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                        <input type='text' className='form-control' placeholder='Last Name' name="lastName"
                                             {...register('lastName')}
                                        />
                                   
                                  <div className='text-danger'> {errors.lastName?.message}</div>

                                   
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                    <input type='email' className='form-control' placeholder=' Enter Email address'  name="email"{...register('email')} />
                                    <div className='text-danger'> {errors.email?.message}</div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                                    <input type='number' className='form-control' placeholder='Enter Mobile Number'  name="contact" {...register('contact')}/>
                                    <div className='text-danger'> {errors.contact?.message}</div>
                                </div>
                                <div className='col-12 text-center text-white mt-5'>
                                    Is this a home you are purchasing or have purchased within the last 15 days?
                                </div>
                                <div className='col-12 mt-3 mb-3 text-center'>
                                    <button className='btn btn-primary' type='button'onClick={handleSubmit(handleRegistration)} >SHOW PRICES</button>
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
            <div className='row mt-2'>
                <div className="col-md-3 col-lg-3 col-12"></div>
                <div className="col-md-6 col-lg-6 col-12 text-center">
                    <small>By clicking SHOW PRICES, you consent to receiving communication from Lybley Home Inc. through calls, emails, and/or text messages, and acknowledge your acceptance of our Terms and Conditions & Privacy Policy. Standard messaging and data rates may apply.</small>
                    <div className="col-md-3 col-lg-3 col-12"></div>
                </div>
            </div>}
            <div className="row mt-5">
                <div className="col-12 col-md-1 col-lg-1"></div>
                <div className="col-12 col-md-10 col-lg-10">
                    <div className="row">

                        <div className="col-12 col-md-3 col-lg-3 mt-5 shadow bg-white rounded-4">
                            <h6 className='text-center fw-bold rounded-3 bg-dark pt-2 pb-2 text-white'>{homeShieldLite?.planName}</h6>
                            <div className='text-center'>our plan for protecting vital home systems</div>
                             
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                            <div className='pt-3'>
                            <h2 className='text-center'>{((+homeData?.homeSize*(+homeShieldLite?.price))/12).toFixed(0)} INR</h2>
                            <div className='text-center'><small>paid monthly</small></div>
                            <div className='text-center'><small>{(+homeData?.homeSize*(+homeShieldLite?.price))} INR paid annually</small></div>
                            <div className='p-3'>
                           <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>
                            </div></div>
                                  :
                            <div className="p-3">
                                <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                    <h5 className='text-center'> Want to see your price?</h5>
                                    <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                    <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                </div>
                            </div>
}
                            <div className=" mt-3 d-flex text-muted justify-content-start ms-3">
                                <CancelIcon /> <div className='ps-2 pe-2'>In Upgraded</div><InfoIcon onClick={()=>setModalShow(true)} />
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
                                     { homeShieldLite?.appliances?.map(a1=>
                                     a1?.checked===false ? <div className='text-muted'> <CancelIcon   />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />  {a1?.value}</div>
                                     )
                                     }
                                    {/* <div className='text-muted'> <CancelIcon    />  Air Condition</div> 
                                    <div className='text-muted'> <CancelIcon   /> Refrigerator</div> 
                                    <div className='text-muted'> <CancelIcon   /> T V</div>
                                        <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                        <div> <CheckCircleIcon color='primary' />  Gas Stove</div>
                                        <div> <CheckCircleIcon color='primary' /> Chimney </div>
                                        <div> <CheckCircleIcon color='primary' /> Washing Machine </div>
                                        <div>  <CheckCircleIcon color='primary' /> RO </div>
                                        <div> <CheckCircleIcon color='primary' />  Ceiling Fan </div>
                                        <div> <CheckCircleIcon color="primary" />  Mixer </div>
                                        <div> <CheckCircleIcon color="primary" />  Induction </div>
                                        <div> <CheckCircleIcon color="primary" />  Taster </div>
                                        <div> <CheckCircleIcon color="primary" />  Geyser </div> */}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* <Accordion expanded={expanded2 === 'panel2'} onChange={handleChange('panel2')} style={{ border: "0px", boxShadow: "none" }}>
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
                                        <div className='d-flex'><CheckCircleIcon color='primary' /><div className='ps-1'> Heating System / Heat Pump</div></div>
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
                            </Accordion> */}

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
                                    { homeShieldLite?.plus?.map(a1=>
                                     a1?.checked===false ? <div className='text-muted'> <CancelIcon   />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />{a1?.value}</div>
                                     )
                                     }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                            <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                            <hr />
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                           <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>

                           :
                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                            }
                            <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 mt-5 shadow bg-white rounded-4">
                            <h6 className='text-center fw-bold rounded-3 bg-dark pt-2 pb-2 text-white'>{homeShieldBasic?.planName} </h6>
                            <div className='text-center'>our plan for protecting vital home systems</div>

                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                            <div className='pt-3'>
                            <h2 className='text-center'>{((+homeData?.homeSize*(+homeShieldBasic?.price))/12).toFixed(0)} INR</h2>
                            <div className='text-center'><small>paid monthly</small></div>
                            <div className='text-center'><small>{(+homeData?.homeSize*(+homeShieldBasic?.price))} INR paid annually</small></div>
                            <div className='p-3'>
                            <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>
                            </div></div> :
                            <div className="p-3">
                                <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                    <h5 className='text-center'> Want to see your price?</h5>
                                    <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                    <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                </div>
                            </div>}
                            <div className=" mt-3 d-flex text-muted justify-content-start ms-3">
                                <CancelIcon /> <div className='ps-2 pe-2'>In Upgraded</div><InfoIcon onClick={()=>setModalShow(true)} />
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
                                    { homeShieldBasic?.appliances?.map(a1=>
                                     a1?.checked===false ? <div className='text-muted'> <CancelIcon   />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />  {a1?.value}</div>
                                     )
                                     }
                                    {/* <div className='text-muted'> <CancelIcon    />  Air Condition</div> 
                                    <div className='text-muted'> <CancelIcon   /> Refrigerator</div> 
                                    <div className='text-muted'> <CancelIcon   /> T V</div> 
                                        <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                        <div> <CheckCircleIcon color='primary' />  Gas Stove</div>
                                        <div> <CheckCircleIcon color='primary' /> Chimney </div>
                                        <div> <CheckCircleIcon color='primary' /> Washing Machine </div>
                                        <div>  <CheckCircleIcon color='primary' /> RO </div>
                                        <div> <CheckCircleIcon color='primary' />  Ceiling Fan </div>
                                        <div> <CheckCircleIcon color="primary" />  Mixer </div>
                                        <div> <CheckCircleIcon color="primary" />  Induction </div>
                                        <div> <CheckCircleIcon color="primary" />  Taster </div>
                                        <div> <CheckCircleIcon color="primary" />  Geyser </div> */}
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
                                    { homeShieldBasic?.plus?.map(a1=>
                                     a1?.checked===false ? <div className='text-muted'> <CancelIcon   />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />{a1?.value}</div>
                                     )
                                     }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                            <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                            <hr />
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                           <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>

                           :
                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                            }

                            <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                        </div>
                        <div className="col-12 col-md-3 text-white col-lg-3 mt-3 mt-md-0 mt-lg-0 bg-dark shadow rounded-4">
                            <div className="px-3"><h5 className='fw-bold text-center bg-warning p-1 text-dark rounded-bottom '>MOST POPULER</h5></div>
                            <h6 className='text-center  pb-2 pt-3'>{homeShieldPlus?.planName}</h6>
                            <div className='text-center'>Just the right coverage for extra busy homes</div>
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                            <div className='pt-3'>
                            <h2 className='text-center'>{((+homeData?.homeSize*(+homeShieldPlus?.price))/12).toFixed(0)} INR</h2>
                            <div className='text-center'><small>paid monthly</small></div>
                            <div className='text-center'><small>{(+homeData?.homeSize*(+homeShieldPlus?.price))} INR paid annually</small></div>
                            <div className='p-3'>
                            <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>
                            </div></div>:
                            <div className="p-3">
                                <div className='rounded mt-3 bg-secondary rounded-5 pt-3'>
                                    <h5 className='text-center'> Want to see your price?</h5>
                                    <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                    <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                </div>
                            </div>}
                            <div className=" mt-3 d-flex text-muted justify-content-start ms-3">
                                <CheckCircleIcon color='primary' /> <div className='ps-2 pe-2 text-white'>In Upgraded</div><InfoIcon color='disabled' onClick={()=>setModalShow(true)}/>
                            </div>
                            <div className="mt-2 d-flex text-muted pb-3 justify-content-start ms-3">
                                <CancelIcon color='disabled' /> <div className='ps-2 pe-2 text-secondary'>Brand for Brand</div><InfoIcon color='disabled' onClick={openModel}/>
                            </div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ border: "0px", boxShadow: "none" }} className='bg-dark text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h5 className='fw-bold'>Appliances</h5></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    { homeShieldPlus?.appliances?.map(a1=>
                                     a1?.checked===false ? <div> <CancelIcon color='disable'  />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />  {a1?.value}</div>
                                     )
                                     }
                                    {/* <div> <CheckCircleIcon color='primary' />  Air Condition</div> 
                                    <div> <CancelIcon color='disable' /> Refrigerator</div> 
                                    <div> <CancelIcon color='disable' /> T V</div> 
                                     <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                        <div> <CheckCircleIcon color='primary' />  Gas Stove</div>
                                        <div> <CheckCircleIcon color='primary' /> Chimney </div>
                                        <div> <CheckCircleIcon color='primary' /> Washing Machine </div>
                                        <div>  <CheckCircleIcon color='primary' /> RO </div>
                                        <div> <CheckCircleIcon color='primary' />  Ceiling Fan </div>
                                        <div> <CheckCircleIcon color="primary" />  Mixer </div>
                                        <div> <CheckCircleIcon color="primary" />  Induction </div>
                                        <div> <CheckCircleIcon color="primary" />  Taster </div>
                                        <div> <CheckCircleIcon color="primary" />  Geyser </div> */}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            

                            <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange('panel3')} style={{ border: "0px", boxShadow: "none" }} className='bg-dark text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h5 className='fw-bold'>Plus</h5></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    { homeShieldPlus?.plus?.map(a1=>
                                     a1?.checked===false ? <div> <CancelIcon color='disable'   />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />{a1?.value}</div>
                                     )
                                     }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                            <div className='ps-2 '><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                            <hr />
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                           <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>

                           :
                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                            }
                            <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 mt-3 mt-md-5 mt-lg-5 shadow bg-white rounded-4">
                            <h6 className='text-center fw-bold rounded-3 bg-dark pt-2 pb-2 text-white'>{homeShieldProPlus?.planName}</h6>
                            <div className='text-center'>Maximum coverage for major peace of mind</div>
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                            <div className='pt-3'>
                            <h2 className='text-center'>{((+homeData?.homeSize*(+homeShieldProPlus?.price))/12).toFixed(0)} INR</h2>
                            <div className='text-center'><small>paid monthly</small></div>
                            <div className='text-center'><small>{(+homeData?.homeSize*(+homeShieldProPlus?.price))} INR paid annually</small></div>
                            <div className='p-3'>
                            <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>
                            </div></div> :
                            <div className="p-3">
                                <div className='rounded mt-3 bg-light rounded-5 pt-3'>
                                    <h5 className='text-center'> Want to see your price?</h5>
                                    <div className='text-center p-2'>Please complete the form above to see a custom quote for your home.</div>
                                    <div className='bg-primary rounded-5 text-center text-white p-2'><small>FILL OUT THE FORM</small></div>
                                </div>
                            </div>}
                            <div className=" mt-3 d-flex justify-content-start ms-3">
                                <CheckCircleIcon color='primary' /> <div className='ps-2 pe-2'>In Upgrade</div><InfoIcon onClick={()=>setModalShow(true)} />
                            </div>
                            <div className="mt-2 d-flex pb-3 justify-content-start ms-3">
                                <CheckCircleIcon color='primary' /> <div className='ps-2 pe-2'>Brands for Brands</div><InfoIcon onClick={openModel} />
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
                                    { homeShieldProPlus?.appliances?.map(a1=>
                                     (a1?.checked && <div> <CheckCircleIcon color='primary' />  {a1?.value}</div>)
                                     )
                                     }
                                    {/* <div> <CheckCircleIcon color='primary' />  Air Condition</div> 
                                    <div> <CheckCircleIcon color='primary' /> Refrigerator</div> 
                                    <div> <CheckCircleIcon color='primary' /> T V</div> 
                                    <div> <CheckCircleIcon color='primary' />  Dishwasher</div>
                                        <div> <CheckCircleIcon color='primary' />  Gas Stove</div>
                                        <div> <CheckCircleIcon color='primary' /> Chimney </div>
                                        <div> <CheckCircleIcon color='primary' /> Washing Machine </div>
                                        <div>  <CheckCircleIcon color='primary' /> RO </div>
                                        <div> <CheckCircleIcon color='primary' />  Ceiling Fan </div>
                                        <div> <CheckCircleIcon color="primary" />  Mixer </div>
                                        <div> <CheckCircleIcon color="primary" />  Induction </div>
                                        <div> <CheckCircleIcon color="primary" />  Taster </div>
                                        <div> <CheckCircleIcon color="primary" />  Geyser </div> */}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                           
                            {/* <Accordion style={{ border: "0px", boxShadow: "none" }}>
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
                                    </Accordion> */}
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
                                    { homeShieldProPlus?.plus?.map(a1=>
                                     a1?.checked===false ? <div className='text-muted'> <CancelIcon   />{a1?.value} </div> :
                                      <div> <CheckCircleIcon color='primary' />{a1?.value}</div>
                                     )
                                     }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <h5 className='fw-bold ps-2 mt-2'>Optional Coverage</h5>
                            <div className='ps-2'><small>You can add Optional Coverage to your plan. <a href="" className='text-decoration-none'>See Details and Pricing</a></small></div>
                            <hr />
                            {(homeData && homeData?.location && homeData?.firstName && homeData?.homeSize) ?
                           <Link href="/subscriber-signup" className='text-decoration-none'> <div className='bg-primary rounded-5 text-center text-white p-2'><small>SELECT PLAN</small></div></Link>

                           :
                            <div className="p-3 text-center"> <div className=' btn btn-primary rounded-pill text-center text-white p-2'><small>FILL OUT THE FORM</small></div></div>
                            }

                            <div className='text-center pb-2'><a href="" className='text-decoration-none'><small>SEE COVERAGE LIMITS</small></a></div>
                        </div>
                        <div className='shadow mt-4 rounded-4 text-center p-3'><h5>A $95 copay applies to covered services and is payable at the time a service appointment is scheduled.</h5></div>
                        <div className='shadow mt-3 rounded-4 text-center p-3'><h5>Real Estate Agent?  <a href="" className='text-decoration-none'>Click here</a></h5></div>

                    </div>
                </div>
            </div>
            <div className="col-12 col-md-1 col-lg-1"></div>

        </div >
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
                                    <div class="col-12 col-md-8 col-lg-8 text-center">Lybley's subscription-based home care introduces a fresh approach to guaranteeing homeownership tranquility. Our Certified Lybley service technicians, along with beneficial maintenance reminders, the Maintenance Marketplace, and the Maintenance Rewards program, collectively provide this assurance. We're excited for you to immerse yourself in the Lybley experience.</div>
                                    <div class="col-12 col-md-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center pt-5 pb-5 mt-2 mt-md-5 mt-lg-5">
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                                <MonetizationOnIcon color='primary' fontSize='large' />
                                <h5 className='p-2'>Copay</h5>
                                <p>When scheduling service for a covered repair, a standard copay is applicable. Irrespective of the duration the technician spends at your residence or whether the repair necessitates multiple visits, only one charge per claim will be incurred.</p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                                <EventIcon color='primary' fontSize='large' />
                                <h5 className='p-2'>Reminders</h5>
                                <p>
                                Amidst your busy life, we're here to help. Regular maintenance reminders on our Tips page cover tasks like air filter changes and dryer vent cleaning. Choose between DIY or tapping into our Maintenance Marketplace for assistance.
                                </p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                                <GradeIcon color='primary' fontSize='large' />
                                <h5 className='p-2'>
                                    Maintenance Rewards
                                </h5>
                                <p>Spread the Lybley love, and we're here to show our gratitude when you refer friends, family, or neighbors to our home warranty subscription. Your referrals earn you Maintenance Rewards applied directly to your account.</p>
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
                                    <div class="col-12 col-md-8 col-lg-8 text-center">Count on our Lybley Certified technicians to assist with tasks essential for maintaining your home's prime condition and preventing future expensive issues. Here's a glimpse of what we offer*:</div>
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
                                <p>Whether you're embarking on the journey of homeownership for the first time or stepping into your next abode, Lybley's In the Clear plan is designed to alleviate the apprehension of encountering hidden appliance or system complications that might have slipped through the cracks during the purchase process.</p>
                                <p>Opting for the In the Clear plan is a seamless process: share the home inspection report you acquired during the house purchase, and our team will meticulously review it to identify the eligible appliances and systems that successfully passed inspection.</p>
                                <p>For subscribers who come across malfunctioning appliances or systems not covered by their existing plan, there's no need for undue concern. We generously augment your account with 50 INR in Maintenance Rewards, underscoring our commitment to providing a worry-free experience.</p>
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
                    <div className="" style={{ fontSize: "10px" }}>
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
                    <div className="row border mt-4" style={{ fontSize: "10px", fontWeight: "bold" }}>
                        <div className="col-6 border p-4"><div>Systems</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-6 border p-4"><div>Dishwasher</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>3000 INR</div></div>
                        <div className="col-2 border p-4 text-center" ><div>10000 INR</div></div>
                    </div>

                    <div className="row border mt-4" style={{ fontSize: "10px", fontWeight: "bold" }}>
                        <div className="col-6 border p-4"><div>Additional Items</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                    </div>
                    <h2 className='text-center mt-5 fw-bold'>Optional Coverage</h2>
                    <div className="row border mt-4" style={{ fontSize: "10px", fontWeight: "bold" }}>
                        <div className="col-3 border p-4"><div>Optional Coverage</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Simple</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Signature</div></div>
                        <div className="col-2 border pt-4 text-center" style={{ backgroundColor: "#5396B9" }}><div>Lux</div></div>
                        <div className="col-3 border pt-4 text-center"><div>Price</div></div>
                    </div>
                    <div className="row border" style={{ fontSize: "10px" }}>
                        <div className="col-3 border p-4"><div>It's Covered upgrade</div></div>
                        <div className="col-2 border p-4 text-center"><div>See below</div></div>
                        <div className="col-2 border p-4 text-center"><div>See below</div></div>
                        <div className="col-2 border p-4 text-center"><div>See below</div></div>
                        <div className="col-3 border p-4 text-center"><div>Fill out the form</div></div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row pt-3 pb-3" style={{ backgroundColor: "#F5DEB3" }}>
                        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center col-lg-5">
                            <UpgradeIcon fontSize='large' />
                            <h2 className='py-2'>It's Covered Upgrade</h2>
                            <div className='text-center'>Rest easy knowing that every part needed for your repair is handled with the It's Covered upgrade.</div>
                        </div>
                        <div className="col-12 mt-md-0 mt-lg-0 mt-4 col-md-7 col-lg-7">
                            <div className="row">
                                <h6 className="col-6 fw-bold">Heating</h6>
                                <div className="col-6">Registers and grills</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Indoor Plumbing</h6>
                                <div className="col-6">Faucets and shower-heads, pressure regulators, instant hot water dispensers, sewage ejectors, toilets of like quality, and costs to locate</div>
                            </div>

                            <div className="row">
                                <h6 className="col-6 fw-bold">Water Heater</h6>
                                <div className="col-6">Expansion tanks and problems caused by sediment</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Enhanced Stoppage Coverage</h6>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Indoor Electrical</h6>
                                <div className="col-6">Built-in lighting fixtures, smoke detectors, and doorbells</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Range/Cooktop/Oven</h6>
                                <div className="col-6">Rotisseries, racks, handles, knobs, dials, and interior</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Lining Dishwasher</h6>
                                <div className="col-6">
                                    Racks, rollers, and baskets</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Microwave Oven</h6>
                                <div className="col-6">
                                    Door glass, interior linings, and shelves</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Garage Door</h6>
                                <div className="col-6">
                                    Springs, hinges, and remote transmitters</div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Permits & Code Upgrades</h6>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Refrigerant Recapture & disposal
                                </h6>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Equipment Disposal</h6>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <h6 className="col-6 fw-bold">Structural Modification</h6>
                                <div className="col-6">
                                    To accomodate replacement equipment</div>
                            </div>
                        </div>
                    </div>
                </div>
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