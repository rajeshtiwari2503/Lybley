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
                        <div className="row text-white mt-3 ">
                            <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="text-center">Save an average of $499</h1>
                        <h1 className="text-center">with a Lybley Signature plan.</h1></div>
                        
                            <div className="col-12 col-md-6 col-lg-6"></div>
                        </div>
                         <div className="container">
                        <div className="row text-white mt-5  m-0">
                        <div className="col-12 d-flex justify-content-center">
                            <div className={`${style.upArrow} text-center`}>
                                {/* <img className={`${style.upArrow} text-center`} src="https://consumer.bluestarindia.com/pub/media/catalog/product/cache/306dd014bf4d3bf54df1536b8c4e0b54/i/a/ia318tku-gallery-images-01.png" width="100px" height="" alt="" /> */}
                            </div>
                            </div>
                           <div className="col-12 col-md-6 pe-1 d-flex justify-content-end align-items-center col-lg-6">
                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Stovetop</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                                <img src="https://cdn.moglix.com/p/rXhRvvqtb7uKB-xxlarge.jpg" width="200px" height="180px"  alt="..." />
                           </div>
                           <div className="col-12 col-md-6 mt-4 ps-1 mt-md-0 mt-lg-0 d-flex justify-content-start align-items-center col-lg-6">
                           <img src="https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/3-door-french-door/pdp/rf27t5501sg-aa/360/RF27T5501SG-01.jpg?$product-details-jpg$" width="200px" height="180px" alt="..." />

                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Refrigerator</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                           </div>
                        </div>
                        <div className="row   text-white py-2 m-0">
                           <div className="col-12 col-md-6 pe-1 d-flex justify-content-end align-items-center col-lg-6">
                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Air Cooler</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                                <img src="https://m.media-amazon.com/images/I/51+085ENXjL._AC_UF894,1000_QL80_.jpg" width="200px" height="180px" alt="..." />
                           </div>
                           <div className="col-12 col-md-6 ps-1 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-start align-items-center col-lg-6">
                           <img src="https://www.zebrs.com/uploads/zebrs/products/havells-3-l-instant-water-geyser-instanio-white-mustard-150685_l.jpg" width="200px" height="180px" alt="..." />

                            <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                              <h6>Geyser</h6>
                              
                              <small>Replacement cost: $2,500 <br/>
                                Super cost: $65/month
                                </small>
                            
                                </div>
                           </div>
                        </div>
                        </div>
                        <div className="text-end px-3 mt-4 me-5">
                        <button className="btn btn-warning rounded-pill px-3">Learn More</button>
                    </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Plan;