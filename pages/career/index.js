import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import style from "./career.module.css"
import Diversity2Icon from '@mui/icons-material/Diversity2';

const Career = () => {
    return (
        <>
            <div className={`${style.whatHead}`}>
                <div className='align-items-center text-center'>
                    <div className={`${style.whatText} pt-5 `}  >
                        JOIN US
                    </div>
                    <div>
                        We’re a fast-growing team that’s bringing joy to homeowners
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-primary'>SEE OPEN POSITIONS</button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#b6e6fa" }} >
                <div className='container'>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6 mb-5 p-5">
                            <div className='fw-bold fs-2 mt-5'>
                                We are on a mission
                            </div>
                            <div className='mt-4'>
                                Lybley is a subscription home care company delivering quick and effective home repair and maintenance with innovative technology, dedicated people, and forward-looking leadership.
                            </div>
                            <div className='mt-4'>
                                Headquartered in San Francisco, California, with offices in Phoenix, Arizona, and Belgrade, Serbia, our company sits squarely within the insuretech, prop-tech, and subscription industries. We currently offer services in 14 regions across eight states. We are on pace to grow our subscriber base and service area smartly and quickly.
                            </div>
                            <div className='mt-4 '>
                                Our culture here is collaborative, dynamic, and data-driven. If you want to work with a stellar and seasoned leadership team with a winning track record and at the forefront of the multi-billion dollar home service industry, this just might be the team for you.
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 px-5 pt-md-5 pt-lg-5 mb-5 pt-2">
                            <img src="https://www.pngall.com/wp-content/uploads/8/Woman-PNG-High-Quality-Image.png" className='card-img-top' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='fw-bold fs-3 text-center mt-5 pt-5'>
                    Lybley is a great place to work
                </div>
                <div className='text-center mt-3'>Our company’s values</div>
                <div className="row text-center pt-4 pb-5 mt-2 mt-md-5 mt-lg-5">
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                        <CheckCircleIcon color='primary' fontSize='large' />
                        <h5 className='fw-bold p-2'>#GreatPeople</h5>
                        <p><small>Life is short, and we all spend a lot of time on the job. We’ve chosen to work with great people who share our values.</small></p>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                        <CheckCircleIcon color='primary' fontSize='large' />
                        <h5 className='fw-bold p-2'>#IntegrityFirst</h5>
                        <p>
                            <small> We believe in doing the right thing every time for our subscribers, service techs, partners, employees, advisors, and investors.</small>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                        <CheckCircleIcon color='primary' fontSize='large' />
                        <h5 className='fw-bold p-2'>
                            #CatalystForChange
                        </h5>
                        <p><small>Since we’re pushing to evolve the home care business, we constantly and optimistically pursue opportunities for innovation and growth.</small></p>
                    </div>
                </div>
                <div className="row text-center pt-2 pb-5 mt-2 mt-md-5 mt-lg-5">
                    <div className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center col-lg-2">
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                        <CheckCircleIcon color='primary' fontSize='large' />
                        <h5 className='fw-bold p-2'>#Connect+Communicate</h5>
                        <p><small>We are in the home business, where people gather for support, empathy, and love. We proactively approach our communications to all stakeholders in that spirit.</small></p>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center col-lg-4">
                        <CheckCircleIcon color='primary' fontSize='large' />
                        <h5 className='fw-bold p-2'>#EveryoneIsAnOwner</h5>
                        <p>
                            <small> Super is the sum of us all. We believe that everyone is responsible for the success of our company and charged with solving problems directly and efficiently.</small>
                        </p>
                    </div>
                    <div className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center col-lg-2">
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"red"}}>
                <div className='container pt-5 pb-5'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-7'>
                            <div>
                             <div className='fw-bold text-white fs-3'>Oh, yeah, we have perks</div>
                             <div className='fw-bold text-white mt-3'>Thriving — physically and emotionally — is at the core of our values and benefits.</div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                             <div className=' bg-white p-5 rounded-5'>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Healthcare and dental coverage</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Retirement plans</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Employee Stock Option Program for all employees</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Wellness perks</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Maternity leave</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Unlimited PTO</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3 '> Learning and development resources</div>
                               </div>
                               <div className='d-flex mt-3'>
                                <CheckCircleIcon color='success' />
                                <div className='ms-3'>Hybrid, remote, and flexible work options</div>
                               </div>
                             </div>
                        </div>
                        <div className='col-12 col-md-2'></div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#b4ebed"}}>
                <div className='container pt-5 pb-5'>
                    <div className='row'>
                        <div className='col-12 col-md-2'></div>
                        <div className='col-12 col-md-8'>
                            <div className='mb-5 text-center pt-3'>
                              <Diversity2Icon style={{fontSize:"80px"}} />
                            </div>
                            <div className='text-center fw-bold fs-3'>
                                A commitment to diversity and inclusion
                            </div>
                            <div className='mt-4'>
                                We value diversity here and know that diverse workplaces lead to a culture of innovation and more powerful business outcomes. Therefore, we always treat all employees and job applicants based on merit, qualifications, competence, and talent. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
                            </div>
                            <div className='mt-4'>
                                We will consider for employment qualified applicants with criminal histories in a manner consistent with the requirements of the San Francisco Fair Chance Ordinance. Applicants in need of special assistance or accommodation during the interview process or in accessing our website may contact us by sending an email to assistance(at)hellosuper.com. We will treat your request as confidentially as possible. In your email, please include your name and preferred method of contact, and we will respond as soon as possible.
                            </div>
                        </div>
                        <div className='col-12 col-md-2'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career