import React from "react";
import style from "./plan.module.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Plan = () => {
    return (
        <>
            <div className={style.planWd}>
                <div className={`${style.bg_black}`}>
                    <div className="text-white text-center mt-5">
                    <h2 className="">We have a plan (for your home)</h2>
                    <div className="row w-100 mt-3">
                        <div className="col-12 col-md-3 col-lg-3"></div>
                        <div className="col-12 col-md-6 col-lg-6">
                    <p className="">Cover your home's most essential appliances and systems, or your just about everything on the property with Super's range of subscriptions for your home. Take a look around your home, think about what level fits you, and start the easy sign-up process.</p>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3"></div>
                    </div>
                    </div>
                    <div className={`shadow bg-body p-2 ${style.popUp}`}>
                        <h5 className="text-center text-white mt-4">Saving Estimator</h5>
                        <div className="row text-white mt-5 ">
                            <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="text-center">Save an average of $499</h1>
                        <h1 className="text-center">with a Lybley Signature plan.</h1></div>
                            <div className="col-12 col-md-6 col-lg-6"></div>
                        </div>
                         <div className="container">
                        <div className="row text-white mt-5  m-0">
                           <div className="col-12 col-md-6  d-flex justify-content-end align-items-center col-lg-6">
                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Stovetop</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                                <img src="https://cdn.moglix.com/p/rXhRvvqtb7uKB-xxlarge.jpg" width="200px" alt="..." />
                           </div>
                           <div className="col-12 col-md-6 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-start align-items-center col-lg-6">
                           <img src="https://cdn.moglix.com/p/rXhRvvqtb7uKB-xxlarge.jpg" width="200px" alt="..." />

                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Stovetop</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                           </div>
                        </div>
                        <div className="row   text-white py-4 m-0">
                           <div className="col-12 col-md-6 d-flex justify-content-end align-items-center col-lg-6">
                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Stovetop</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                                <img src="https://cdn.moglix.com/p/rXhRvvqtb7uKB-xxlarge.jpg" width="200px" alt="..." />
                           </div>
                           <div className="col-12 col-md-6 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-start align-items-center col-lg-6">
                           <img src="https://cdn.moglix.com/p/rXhRvvqtb7uKB-xxlarge.jpg" width="200px" alt="..." />

                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Stovetop</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                           </div>
                        </div>
                        </div>
                        <div className="text-end px-5">
                        <button className="btn btn-warning rounded-pill px-3">Learn More</button>
                    </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Plan;