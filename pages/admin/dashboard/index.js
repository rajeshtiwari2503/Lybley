import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h2 className='text-center mt-2'>Dashboard</h2>
      <h4 className='mt-5'>Complaint as per status</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> 0 Pen / 90</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> In progress 20</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> Past pending 50</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> On hold 25</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> Cancelled 20</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
        <div className="card py-4 shadow" style={{backgroundColor:"#E6E6FA"}}> Closed 100</div>
        </div>
      </div>
      <h4 className='mt-5'>Complaint as per Tat in city</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
          <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>0-24</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>24-48</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>48+</div>
        </div>
      </div>

      <h4 className='mt-5'>Complaint as per Tat out city</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
          <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>0-24</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>24-48</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>48+</div>
        </div>
      </div>

      <h4 className='mt-5'>Calls as per category</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}>Washing Machine</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}>Mixer Grinder</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}>Air Cooler</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}>Refrigerator</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}>Air Condition</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
        <div className="card py-4 shadow" style={{backgroundColor:"#E6E6FA"}}>Fan</div>
        </div>
      </div>
      <h4 className='mt-5'>Calls as per Brand</h4>
      <div className="row mt-2">
        <div className="col-6 text-center col-md-6 col-lg-6">
          <div className="card shadow py-4" style={{backgroundColor:"#FFE4C4"}}>
            <h5 className='fw-bold'>Novamax</h5>
            <p>180p - 1800</p>
            <p>700 | 100 in | 20pp | 1800</p>
          </div>
        </div>
        <div className="col-6 text-center col-md-6 col-lg-6">
        <div className="card shadow py-4" style={{backgroundColor:"#FFE4C4"}}>
           <h5 className='fw-bold'>Bajaj</h5>
            <p>180p - 1800</p>
            <p>700 | 100 in | 20pp | 1800</p></div>
        </div>
      </div>

      <h4 className='mt-5'>Part pending calls Overview</h4>
       <h5>Total pending - 200</h5>
       <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-3 col-lg-3">
          <div className="card bg-light shadow py-4">Novamax 50</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-3 col-lg-3">
        <div className="card bg-light shadow py-4">Bajaj 50</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-3 col-lg-3">
        <div className="card bg-light shadow py-4">Rosifo 50</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-3 col-lg-3">
        <div className="card bg-light shadow py-4">Lybley 50</div>
        </div>
      </div>

      <h4 className='mt-5'>Complaint by location</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
          <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Delhi</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Noida</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Mumbai</div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
          <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Gurugran</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Pune</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Chandigarh</div>
        </div>
      </div>
      <h4 className='mt-5'>Complaint based on SP - Pending calls only</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
          <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Delhi</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Noida</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Mumbai</div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
          <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Gurugran</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Pune</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-4 col-lg-4">
        <div className="card shadow py-4" style={{backgroundColor:"#F4FFDC"}}>Chandigarh</div>
        </div>
      </div>

      <h4 className='mt-5'>Complaint...</h4>
      <div className="row mt-2">
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> Dial calls</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> Monthly calls</div>
        </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> calls</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> calls</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
          <div className="card py-4 shadow " style={{backgroundColor:"#E6E6FA"}}> calls</div>
          </div>
        <div className="col-6 fw-bold text-center col-md-2 col-lg-2">
        <div className="card py-4 shadow" style={{backgroundColor:"#E6E6FA"}}> calls TAT</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard