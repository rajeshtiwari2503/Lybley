import Link from 'next/link'
import React from 'react'

const MVPlans = () => {
  return (
    <div >
      <div className="container" >
        <div className="row p-4">
          <div className="col-12  ">
            <h6>Lybley's home subscription care offers homeowners a trifecta of predictability, reliability, and comfort.</h6>
            <h6>Irrespective of the plan you select, our certified Lybley service technicians stand prepared to swiftly repair or replace your home's appliances and systems whenever unexpected issues arise.</h6>
          </div>
          <div className="col-12   p-4 d-flex justify-content-center">
            <div>
              {/* <div className='fw-bold fs-5'>Home Shield Lite</div>
                  <small>Your plan for protecting vital home system</small> */}
              <div className='fw-bold fs-5'>Home Shield Basic</div>
              <small>Just the right coverage for extra busy home</small>
              <div className='fw-bold fs-5 mt-3'>Home Shield Plus</div>
              <small>Maximum coverage for major peace of mind</small>
              <div className='fw-bold fs-5 mt-3'>Home Shield Pro Plus</div>
              <small>Maximum coverage for major peace of mind</small>
              <div>
                <button className='mt-4 btn btn-outline-primary rounded-pill'  ><Link href={"pricing"} className='text-decoration-none' >SEE PLAN</Link> </button>
              </div>
            </div>
          </div>
          <div className="col-12   p-4">
            <h6>Testimonial</h6>
            {/* <iframe width="250" height="140" src="https://www.youtube.com/embed/P36YNPR6RDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br /> */}
            <div className='mt-3'><small >Lybley's subscribers tell us how our service is a trusted part of their day-to-day lives.</small> <br /></div>
            <div className='mt-3'> <a href="#" className='text-decoration-none'>See More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MVPlans