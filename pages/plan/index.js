import React from "react";
import style from "./plan.module.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Plan = () => {
    return (
        <>
            <div className={`${style.planWd}`}>
                <div className={`${style.bg_black}`}>
                    <div className="text-white text-center ps-2 pe-2 mt-5">
                        <h2 className="">We have a plan (for your home)</h2>
                        <div className="row w-100  mt-3">
                            <div className="col-12 col-md-3 col-lg-3"></div>
                            <div className="col-12 col-md-6 col-lg-6 ">
                                <p className="text-center ">Shield the vital appliances and systems within your home, or extend coverage to encompass practically every aspect of your property with Lybley's diverse range of home subscription plans. Survey your living space, consider the level of coverage that suits your needs, and initiate the straightforward registration process to get started.</p>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3"></div>
                        </div>
                    </div>
                    <div className={`shadow bg-body p-2 mt-3 mt-md-0 ${style.popUp}`}>
                        <h5 className="text-center text-white mt-4">Saving Estimator</h5>
                        <div className="row text-white mt-3 ">
                            <div className="col-12 col-md-6 col-lg-6">
                                <h1 className="text-center">Save an average of 8 INR</h1>
                                <h1 className="text-center">with a Lybley Signature plan.</h1></div>

                            <div className="col-12 col-md-6 col-lg-6"></div>
                        </div>
                        <div className="container d-none d-md-block d-lg-block">
                            <div className="row text-white mt-5  m-0">
                                <div className="col-12 d-flex justify-content-center">
                                    <div className={`${style.upArrow} text-center`}>

                                    </div>
                                </div>
                                           
                                <div style={{marginTop:"-110px"}} className="col-12 d-flex justify-content-center" >
                                    <img  className="card-img-top" style={{width:"200px",height:"134px"}} src="https://consumer.bluestarindia.com/pub/media/catalog/product/cache/306dd014bf4d3bf54df1536b8c4e0b54/i/a/ia318tku-gallery-images-01.png"    alt="" />
                                
                                </div>
                                    <div style={{marginTop:"-140px" ,paddingLeft:"620px"}}className="col-12 ">
                                    <div className="d-flex justify-content-end align-items-center flex-column">
                                        <h5>AC</h5>

                                        <small>Replacement cost: 2,500 INR <br />
                                            Lybley cost: 65 INR/month
                                        </small>

                                    
                                    </div>
                                    </div>
                                <div style={{marginTop:"-25px"}} className="col-12 col-md-6 pe-1  d-flex justify-content-end align-items-center col-lg-6">
                      
                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Washing Machine</h5>

                                        <small>Replacement cost: 2,500 INR <br />
                                            Lybley cost: 65 INR/month
                                        </small>

                                    </div>
                                    <img src="https://jamesandco.in/cdn/shop/products/220_d2a97d5a-5762-48cd-bb2c-eb0cda803c1e.jpg?v=1666345325" width="200px" height="180px" alt="..." />
                                </div>
                                
                                <div style={{marginTop:"-25px"}}  className="col-12 col-md-6    ps-1   d-flex justify-content-start align-items-center col-lg-6">
                                    <img src="https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/3-door-french-door/pdp/rf27t5501sg-aa/360/RF27T5501SG-01.jpg?$product-details-jpg$" width="200px" height="180px" alt="..." />

                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Refrigerator</h5>

                                        <small>Replacement cost: 2,500 INR <br />
                                            Lybley cost: 65 INR/month
                                        </small>

                                    </div>
                                </div>
                            </div>
                            <div className="row   text-white py-2 m-0">
                                <div className="col-12 col-md-6 pe-1 d-flex justify-content-end align-items-center col-lg-6">
                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Microwave</h5>

                                        <small>Replacement cost: 2,500 INR <br />
                                            Lybley cost: 65 INR/month
                                        </small>

                                    </div>
                                    <img src="https://img.freepik.com/free-vector/microwave-oven-with-light-inside-isolated-white-background-kitchen-appliances_134830-658.jpg?w=2000" width="200px" height="180px" alt="..." />
                                </div>
                                <div className="col-12 col-md-6 ps-1 mt-4 mt-md-0 mt-lg-0 d-flex justify-content-start align-items-center col-lg-6">
                                    <img src="https://www.zebrs.com/uploads/zebrs/products/havells-3-l-instant-water-geyser-instanio-white-mustard-150685_l.jpg" width="200px" height="180px" alt="..." />

                                    <div className="d-flex justify-content-center px-3 align-items-center flex-column">
                                        <h5>Geyser</h5>

                                        <small>Replacement cost: 2,500 INR <br />
                                            Super cost: 65 INR/month
                                        </small>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container d-block d-md-none d-lg-none">
                            <div className="row w-100">
                            <div className="col-12 d-flex justify-content-center">
                                    <div className={`${style.upArrow} text-center`}>

                                    </div>
                                </div>
                                <div style={{marginTop:"-100px"}} className="col-12 d-flex justify-content-center" >
                                    <img   src="https://consumer.bluestarindia.com/pub/media/catalog/product/cache/306dd014bf4d3bf54df1536b8c4e0b54/i/a/ia318tku-gallery-images-01.png" width="100px" height="" alt="" />
                                
                                </div>
                                <div className="col-6 text-end pe-1">
                                <img src="https://cdn.moglix.com/p/rXhRvvqtb7uKB-xxlarge.jpg" width="150px" height="130px" alt="..." />
                                </div>
                                <div className="col-6 text-start ps-1">
                                <img src="https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/3-door-french-door/pdp/rf27t5501sg-aa/360/RF27T5501SG-01.jpg?$product-details-jpg$" width="150px" height="130px" alt="..." />
                                </div>
                            </div>
                            <div className="row w-100 mt-2">
                                <div className="col-6 text-end pe-1">
                                <img src="https://m.media-amazon.com/images/I/51+085ENXjL._AC_UF894,1000_QL80_.jpg" width="150px" height="130px" alt="..." />

                                </div>
                                <div className="col-6 text-start ps-1">
                                <img src="https://www.zebrs.com/uploads/zebrs/products/havells-3-l-instant-water-geyser-instanio-white-mustard-150685_l.jpg" width="150px" height="130px" alt="..." />

                                </div>
                            </div>
                            <div className="row w-100 text-white mt-3">
                                <div className="col-5 text-end">
                                        <h4 className="fw-bold mt-2">AC</h4>
                                        </div>
                                        <div className="col-7 text-start"><small>Replacement cost: 2,500 INR <br />
                                            Lybley cost: 65 INR/month</small>
                                        </div>  
                             </div>
                             <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                        <h4 className="fw-bold mt-2">Stovetop</h4>
                                        </div>
                                        <div className="col-7 text-start"><small>Replacement cost: 2,500 INR <br />
                                            Lybley cost: 65 INR/month</small>
                                        </div>  
                             </div>
                             <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                        <h4 className="fw-bold mt-2">Refrigerator</h4>
                                        </div>
                                        <div className="col-7 text-start"><small>Replacement cost: 2,500 INR<br />
                                            Lybley cost: 65 INR/month</small>
                                        </div>  
                             </div>
                             <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                        <h4 className="fw-bold mt-2">Air Cooler</h4>
                                        </div>
                                        <div className="col-7 text-start"><small>Replacement cost: 2,500 INR<br />
                                            Lybley cost: 65 INR/month</small>
                                        </div>  
                             </div>
                             <div className="row text-white mt-2">
                                <div className="col-5 text-end">
                                        <h4 className="fw-bold mt-2">Geyser</h4>
                                        </div>
                                        <div className="col-7 text-start"><small>Replacement cost: 2,500 INR<br />
                                            Lybley cost: 65 INR/month</small>
                                        </div>  
                             </div>
                             <div className="d-block d-md-none d-lg-none text-end mt-3 ">
                            <button className="btn btn-warning rounded-pill  ">Learn More</button>
                        </div>
                        </div>
                        <div className=" d-none d-md-block d-lg-block text-end px-3 mt-4 me-5">
                            <button className="btn btn-warning rounded-pill px-3">Learn More</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Plan;