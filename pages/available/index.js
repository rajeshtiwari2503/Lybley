import React from 'react'

const Available = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-5'>Where is Super available?</h1>
            </div>
            <div className='row w-100'>
                <div className='marquee'>
                    <div className='content'>
                       <div className='d-flex mt-5 mb-5'>
                            <div className='col-12 col-md-3 col-lg-3 mt-5  '>
                                Noida  
                            </div>
                            <div className='col-12 col-md-3 col-lg-3 mt-5  '>
                               Gurugram
                            </div>
                            <div className='col-12 col-md-3 col-lg-3 mt-5 '>
                              Delhi
                            </div>
                            <div className='col-12 col-md-3 col-lg-3 mt-5  '>
                               Punjab
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Available