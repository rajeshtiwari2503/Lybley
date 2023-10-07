import React from "react";
import style from "./plan.module.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from "next/link";


const Plan = () => {
    return (
        <>
            <div className={`${style.planWd}`}>
                <div className={`${style.bg_black}`}>
                    <div className="text-white text-center mt-5">
                        <div className=" ps-2 pe-2">
                        <h1 className="fw-bold">We have a plan (for your home)</h1>
                        </div>
                        <div className="row  w-100  mt-3">
                             
                            <div className="col-12  d-block d-md-none  ">
                                <p   className="text-md-center text-start ">Shield the vital appliances and systems within your home, or extend coverage to encompass practically every aspect of your property with Lybley's diverse range of home subscription plans. Survey your living space, consider the level of coverage that suits your needs, and initiate the straightforward registration process to get started.</p>
                            </div>
                            <div className="col-12 mt-3 d-md-block d-none  ">
                                <p  style={{ paddingLeft:"200px",paddingRight:"200px"}} className="text-center ">Shield the vital appliances and systems within your home, or extend coverage to encompass practically every aspect of your property with Lybley's diverse range of home subscription plans. Survey your living space, consider the level of coverage that suits your needs, and initiate the straightforward registration process to get started.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={`shadow bg-body p-2 mt-5 mt-md-0 ${style.popUp}`}>
                        <h5 className="text-center text-white mt-4 fw-bold">Saving Estimator</h5>
                        <div className="row text-white mt-4 ">
                            <div className="col-12 col-md-8 col-lg-8">
                                <h1 className="text-center">Save an average of 3 Lacs</h1>
                                <h1 className="text-center">with a Lybley Signature plan.</h1></div>

                            <div className="col-12 col-md-4 col-lg-4"></div>
                        </div>
                        <div className="container d-none d-md-block d-lg-block">
                            <div className="row text-white mt-5  m-0">
                                <div className="col-12 d-flex justify-content-center">
                                    <div className={`${style.upArrow} text-center`}>

                                    </div>
                                </div>

                                <div style={{ marginTop: "-100px" }} className="col-12 d-flex justify-content-center" >
                                    <img className="card-img-top" style={{ width: "150px", height: "120px", paddingBottom: "20px" }} src="Ac .png" alt="" />

                                </div>
                                <div style={{ marginTop: "-140px", paddingLeft: "620px" }} className="col-12 ">
                                    <div className="d-flex justify-content-end align-items-center flex-column">
                                        <h5>AC</h5>

                                        <small>Replacement cost: 40,000 INR <br />
                                            Lybley cost: 340 INR/month
                                        </small>


                                    </div>
                                </div>
                                <div style={{ marginTop: "-26px", marginLeft: "3px" }} className="col-12 col-md-6 pe-1 d-flex justify-content-end align-items-center col-lg-6">

                                    <div className="d-flex justify-content-center px-2 align-items-center flex-column">
                                        <h5>Washing Machine</h5>

                                        <small>Replacement cost: 25,000 INR <br />
                                            Lybley cost: 200 INR/month
                                        </small>

                                    </div>
                                    <div className="bg-white p-3">

                                        <img src="4526667.png" width="170px" height="120px" alt="..." />
                                    </div>
                                </div>

                                <div style={{ marginTop: "-26px", marginLeft: "-6px" }} className="col-12 col-md-6    ps-1   d-flex justify-content-start align-items-center col-lg-6">
                                    <div className="bg-white p-3">
                                        <img src="2486313.png" width="170px" height="120px" alt="..." />
                                    </div>
                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Refrigerator</h5>

                                        <small>Replacement cost: 30,000 INR <br />
                                            Lybley cost: 210 INR/month
                                        </small>

                                    </div>
                                </div>
                            </div>
                            <div className="row text-white " style={{ marginTop: "2px" }}>
                                <div style={{ marginLeft: "3px" }} className="col-12 col-md-6 pe-1 d-flex justify-content-end align-items-center col-lg-6">
                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Microwave</h5>

                                        <small>Replacement cost: 15,000 INR <br />
                                            Lybley cost: 150 INR/month
                                        </small>

                                    </div>
                                    <div className="bg-white p-3">
                                        <img src="Microwave.png" width="170px" height="120px" alt="..." />
                                    </div>
                                </div>
                                <div style={{ marginLeft: "-14px" }} className="col-12 col-md-6   mt-4 mt-md-0 mt-lg-0 d-flex justify-content-start align-items-center col-lg-6">
                                    <div className="bg-white p-3">

                                        <img src="Geyser .png" width="170px" height="120px" alt="..." />
                                    </div>
                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Geyser</h5>

                                        <small>Replacement cost: 10,000 INR <br />
                                            Lybley cost: 70 INR/month
                                        </small>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" container   d-block d-md-none d-lg-none">
                            <div className="row d-flex justify-content-center ">
                                <div className="col-12 d-flex justify-content-center  ">
                                    <div className={`${style.upArrow}  `}>

                                    </div>
                                </div>
                                <div style={{ marginTop: "-100px" }} className="col-12 d-flex justify-content-center" >
                                    <img src="Ac .png" width="90px" height="" alt="" />

                                </div>
                                <div className="col-6 text-end  " style={{ marginTop: "-5px" }}>
                                   
                                <div className="bg-white text-center pt-4 pb-4">
                                    <img src="4526667.png" width="130px" height="130px" alt="..." />
                                </div>
                                </div>

                                <div className="col-6  " style={{ marginLeft: "-21px", marginTop: "-5px" }}>
                                <div className="bg-white   text-center pt-4 pb-4">
                                    
                                    <img src= "2486313.png" width="130px" height="130px" alt="..." />
                                </div>
                                </div>

                            </div>
                            <div className="row d-flex justify-content-center  " style={{ marginTop: "3px" }}>
                                <div className="col-6 text-end  ">
                                    <div className="bg-white text-center pt-4 pb-4">
                                        <img src="Microwave.png" width="130px" height="130px" alt="..." />

                                    </div>
                                </div>
                                <div className="col-6 text-start  " style={{ marginLeft: "-21px" }}>
                                    <div className="bg-white text-center pt-4 pb-4">

                                        <img src="Geyser .png" width="130px" height="130px" alt="..." />

                                    </div>
                                </div>
                            </div>
                            <div className="row w-100 text-white mt-3">
                                <div className="col-5 text-end">
                                    <h4 className="fw-bold mt-2">AC</h4>
                                </div>
                                <div className="col-7 text-start"><small>Replacement cost: 40,000 INR <br />
                                    Lybley cost: 340 INR/month</small>
                                </div>
                            </div>
                            <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                    <h4 className="fw-bold mt-2">Washing Machine</h4>
                                </div>
                                <div className="col-7 text-start"><small>Replacement cost: 25,000 INR <br />
                                    Lybley cost: 200 INR/month</small>
                                </div>
                            </div>
                            <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                    <h4 className="fw-bold mt-2">Refrigerator</h4>
                                </div>
                                <div className="col-7 text-start"><small>Replacement cost: 30,000 INR<br />
                                    Lybley cost: 210 INR/month</small>
                                </div>
                            </div>
                            <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                    <h4 className="fw-bold mt-2">Microwave</h4>
                                </div>
                                <div className="col-7 text-start"><small>Replacement cost: 15,000 INR<br />
                                    Lybley cost: 150 INR/month</small>
                                </div>
                            </div>
                            <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                    <h4 className="fw-bold mt-2">Geyser</h4>
                                </div>
                                <div className="col-7 text-start"><small>Replacement cost: 10,000 INR<br />
                                    Lybley cost: 70 INR/month</small>
                                </div>
                            </div>
                            <div className="d-block d-md-none d-lg-none text-end mt-3 ">
                               <Link href="/pricing"> <button className="btn btn-warning rounded-pill  ">Learn More</button></Link>
                            </div>
                        </div>
                        <div className=" d-none d-md-block d-lg-block text-end px-3 mt-4 me-5">
                        <Link href="/pricing">  <button className="btn btn-warning rounded-pill px-3">Learn More</button></Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Plan;