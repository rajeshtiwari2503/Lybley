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
                                    <div className=' p-3  mt-md-0 mt-3 text-md-start text-center'>
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
                                    <div className=' p-3  mt-md-0 mt-3 text-md-start text-center'>
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
            <div className='container'>
                <Carousel>
                    <Carousel.Item >
                        <div className='row d-flex align-items-center mt-5 mb-5 '>
                            <div className='col-12 col-md-4  text-center'>
                                <img className='rounded-circle   serviceTechImg' src="https://imilap.com/profileimages/profile_8W5A3113_1.jpg" alt='' />
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <div className=' p-3  mt-md-0 mt-3 text-md-start text-center'>
                                    <h3>Hi , I'm Raj</h3>
                                    <h3> I'm  Certified LYBLEY</h3>
                                    <p className='card-text'>I'm proud to be associated with Lybley because of its dedication to sustainability. We not only provide top-notch technical solutions but also do our part to minimize our environmental impact. It's a company with a conscience.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-2'> </div>
                        </div>

                    </Carousel.Item  >
                    <Carousel.Item>
                        <div className='row d-flex align-items-center mt-5 mb-5'>
                            <div className='col-12 col-md-4  text-center'>
                                <img className='rounded-circle   serviceTechImg' src="https://as2.ftcdn.net/v2/jpg/04/69/16/75/1000_F_469167524_tKvh9WB5U0fn2PZPSQ75G4iMHsXrtp8z.jpg" alt='' />
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <div className=' p-3  mt-md-0 mt-3 text-md-start text-center'>
                                    <h3>Hi , I'm Vineet</h3>
                                    <h3> I'm  Certified LYBLEY</h3>
                                    <p className='card-text'> I've been in the industry for over a decade, and I can confidently say that working with Lybley has been a game-changer. The level of support and resources they provide to their technicians is unparalleled. I'm proud to be a part of this team.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-2'> </div>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='row d-flex align-items-center mt-5 mb-5'>
                            <div className='col-12 col-md-4  text-center'>
                                <img className='rounded-circle   serviceTechImg' src="https://thumbs.dreamstime.com/b/handsome-indian-technician-man-wearing-uniform-over-isolated-yellow-background-smiling-happy-face-looking-pointing-to-212670865.jpg" alt='' />
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <div className=' p-3  mt-md-0 mt-3 text-md-start text-center'>
                                    <h3>Hi , I'm Vikash</h3>
                                    <h3> I'm  Certified LYBLEY</h3>
                                    <p className='card-text'> "The leadership team at Lybley is approachable and supportive. They listen to their technicians' input and are open to new ideas. This collaborative environment fosters a sense of ownership and pride in our work.</p>
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