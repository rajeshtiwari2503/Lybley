import Image from 'next/image'
import React from 'react'

const ServiceTech = () => {
    return (
        <>
            <h2 className='text-center'>Our service techs have a heart</h2>


            <div className='row w-100 '>
                <div className='marquee'>
                    <div className='content'>
                        <div className='  mb-5 d-flex'>
                            <div className='col-12 col-md-4 col-lg-4 mt-5 w-50'>
                                <div className='d-flex align-items-center '>
                                    <Image className='rounded' src="https://serviceservotech.com/wp-content/uploads/2023/06/Professional-Home-Appliance-Repair-800x576.webp" height={200} width={200} alt='' />
                                    <div >
                                        <div className='ps-5'>
                                            <h3>Hi , I'm Raj</h3>
                                            <h3> I'm  Certified LY3LEY</h3>
                                            <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 mt-5 w-50'>
                                <div className='d-flex align-items-center '>
                                    <Image src="https://serviceservotech.com/wp-content/uploads/2023/06/Professional-Home-Appliance-Repair-800x576.webp" height={200} width={200} alt='' />
                                    <div>
                                        <div className='ps-5'>
                                            <h3>Hi , I'm Raj</h3>
                                            <h3> I'm  Certified LY3LEY</h3>
                                            <p  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 mt-5 w-50'>
                                <div className='d-flex align-items-center '>
                                    <Image src="https://serviceservotech.com/wp-content/uploads/2023/06/Professional-Home-Appliance-Repair-800x576.webp" height={200} width={200} alt='' />
                                    <div>
                                        <div className='ps-5'>
                                            <h3>Hi , I'm Raj</h3>
                                            <h3> I'm  Certified LY3LEY</h3>
                                            <p  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceTech