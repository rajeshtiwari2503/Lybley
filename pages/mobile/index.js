import React from 'react'

const Mobile = (props) => {
    return (
        <div className='' style={{ backgroundColor: "#FFFCE1" }}>
            <div className="container" >
                <div className="row w-100">
                    <div className="col-12 col-md-6 py-5w mt-md-5 pt-5">
                        <div className="ps-md-5 pt-md-4">
                            <h1 className='fw-bold'>Home maintenance meets high tech</h1>
                            <p className='mt-5'>
                                We bring the commitment of Lybley to life via a user-friendly app and website portal designed for clarity, ease, and friendliness. Whether you're seeking assistance through the app or the website, we'll inquire about your needs, location, and preferred timeframe. Following this, a Lybley Certified expert will be dispatched, swiftly restoring a hassle-free living experience.</p>
                            {/* <div className="form-group d-flex">
                            <input type="text" name="number" className='shadow form-control rounded-end-0 w-50 ps-3' placeholder='Enter Mobile Number' /><button className='shadow btn btn-primary rounded-start-0'>GET APP LINK</button>
                        </div>
                        <div className="pb-4 text-center mt-4 me-5">
                            <h6 className='fw-bold' style={{color:"yellow"}}><i> DOWNLOAD LY3LEY APP</i></h6>
                            <div>
                                <img className='me-2 bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/playstore_trans.png?w=256&q=75" width="160px" alt="" />
                                <img className='bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/appstore_trans.png?w=256&q=75" width="160px" alt="" />
                            </div>
                        </div> */}
                            <div className="text-center">
                                {props?.servicer ? <img src="/technician.png" width="250px" alt=".." />
                                    : <div className='d-flex align-items-bottom'> <img   src="https://www.seekpng.com/png/full/388-3885990_man-looking-at-a-phone-looking-at-phone.png" width="325px" alt=".." /></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-5 pt-4">
                        <img src="https://crdms.images.consumerreports.org/prod/products/cr/models/407621-smartphones-apple-iphone-14-pro-10032754.png" className='card-img-top' width="600px" alt="" />
                        <p className='mt-4'>Effortlessly schedule services or seek assistance for projects through the Lybley app. Just inform us about the service you require, along with the location and preferred time, and experience the convenience firsthand. It's as simple as that.</p>
                        <div className="pb-4 text-center mt-4">
                            <h6 className='fw-bold'><i>COMMING SOON DOWNLOAD LYBLEY APP</i></h6>
                            <div>
                                <img className='me-2 bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/playstore_trans.png?w=256&q=75" width="150px" alt="" />
                                <img className='bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/appstore_trans.png?w=256&q=75" width="150px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile