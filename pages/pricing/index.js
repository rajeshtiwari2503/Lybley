import React from 'react'

const Pricing = () => {
  return (
    <div className='container'> 
        <div className='row '>
            <div className='col-12 col-md-3  col-lg-3'></div>
            <div className='col-12 col-md-6 col-lg-6 bg-info'>
                <div className='row p-5'>
                    <div className='col-8 col-md-8 col-lg-8 '>
                    <input type='text' className='form-control' placeholder='Enter Location' />       
                    </div>
                    <div className='col-4 col-md-4 col-lg-4 '>
                    <input type='number' className='form-control' placeholder='Unit' />       
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='text' className='form-control' placeholder='First Name' />       
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='text' className='form-control' placeholder='Last Name' />      
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='email' className='form-control' placeholder=' Enter Email address' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='number' className='form-control' placeholder='Enter Mobile Number' />
                    </div>
                    <div className='col-12 text-center mt-5'>
                    Is this a home you are purchasing or have purchased within the last 15 days?
                    </div>
                    <div className='col-12 mt-3 mb-3 text-center'>
                        <button className='btn btn-primary' >SHOW PRICES</button>
                    </div>
                    <div className='col-12 text-center'>
                    Don't worry - this is all we need to show your customized prices below
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-3  col-lg-3'></div>
        </div>
    </div>
  )
}

export default Pricing