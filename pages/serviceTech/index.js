import Image from 'next/image'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const ServiceTech = () => {
    return (
        <>
            <h2 className='text-center pt-5 fw-bold'>Our service techs have a heart</h2>
            {/* <div className='marquee'>

                <div className='content'>
                    <div className='row d-flex'>
                        <div className='col- col-md-4 col-lg-4 mt-5  '>

                        </div>
                        <div className='col-12 col-md-4 col-lg-4 mt-5  '>
                            <div className='row align-items-center   '>
                                <div className='col-12 col-md-4 text-md-start text-center'>
                                    <img className='rounded-circle   serviceTechImg' src="https://hairstylecamp.com/wp-content/uploads/straight-hairstyle-for-men-with-glasses.jpg.webp" alt='' />
                                </div>
                                <div className='col-12 col-md-8'>
                                    <div className=' p-3 ps-md-2 mt-md-0 mt-3 text-md-start text-center'>
                                        <h3>Hi , I'm Raj</h3>
                                        <h3> I'm  Certified LY3LEY</h3>
                                        <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 mt-5  '>
                            <div className='row align-items-center   '>
                                <div className='col-12 col-md-4 text-md-start text-center'>
                                    <img className='rounded-circle   serviceTechImg' src="https://hairstylecamp.com/wp-content/uploads/straight-hairstyle-for-men-with-glasses.jpg.webp" alt='' />
                                </div>
                                <div className='col-12 col-md-8'>
                                    <div className=' p-3 ps-md-2 mt-md-0 mt-3 text-md-start text-center'>
                                        <h3>Hi , I'm Raj</h3>
                                        <h3> I'm  Certified LY3LEY</h3>
                                        <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>  */}
            <div>
                <Carousel>
                    <Carousel.Item >
                        <div className='row align-items-center '>
                            <div className='col-12 col-md-4  text-center'>
                                <img className='rounded-circle   serviceTechImg' src="https://hairstylecamp.com/wp-content/uploads/straight-hairstyle-for-men-with-glasses.jpg.webp" alt='' />
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <div className=' p-3 ps-md-2 mt-md-0 mt-3 text-md-start text-center'>
                                    <h3>Hi , I'm Raj</h3>
                                    <h3> I'm  Certified LY3LEY</h3>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-2'> </div>
                        </div>

                    </Carousel.Item  >
                    <Carousel.Item>
                        <div className='row align-items-center '>
                            <div className='col-12 col-md-4  text-center'>
                                <img className='rounded-circle   serviceTechImg' src="https://hairstylecamp.com/wp-content/uploads/straight-hairstyle-for-men-with-glasses.jpg.webp" alt='' />
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <div className=' p-3 ps-md-2 mt-md-0 mt-3 text-md-start text-center'>
                                    <h3>Hi , I'm Raj</h3>
                                    <h3> I'm  Certified LY3LEY</h3>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-2'> </div>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='row align-items-center '>
                            <div className='col-12 col-md-4  text-center'>
                                <img className='rounded-circle   serviceTechImg' src="https://hairstylecamp.com/wp-content/uploads/straight-hairstyle-for-men-with-glasses.jpg.webp" alt='' />
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <div className=' p-3 ps-md-2 mt-md-0 mt-3 text-md-start text-center'>
                                    <h3>Hi , I'm Raj</h3>
                                    <h3> I'm  Certified LY3LEY</h3>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-2'> </div>
                        </div>
                        <Carousel.Caption>
                            {/* <h3>Third Demo</h3>   */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default ServiceTech