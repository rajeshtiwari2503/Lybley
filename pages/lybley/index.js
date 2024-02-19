import Link from 'next/link'
import React from 'react'

const Lybley = () => {
  return (
    <div >
          <div className="container">
           <div className="row p-4">
            <div className="col-12 col-md-4 col-lg-4 p-4  ">
              <h6>For homeowners seeking steadfast service, consistent expenses, and a sense of security, Lybley presents subscription care tailored to the needs of your home.</h6>
              <ul>
                <li>Expert and respected service techs</li>
                <li>Phenomenal customer service</li>
                <li>Robust technology</li>
                <li>Budget friendly</li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 p-4   pb-0 ">
             <div className="row">
              <div className="col-6">
                <h6 className='p-0 m-0'>About Us</h6>
                <small>We're a technology company that offer subscribers care for the home</small> <br/>
                <Link href="about" className='text-decoration-none'><small onClick={()=> setOpen1(false)}>Read More</small></Link>
              </div>
              <div className="col-6">
              <h6 className='p-0 m-0'>Tips</h6>
                <small>Top winter pruning tips for healthy trees and shrubs</small> <br/>
                <Link href="tips" className='text-decoration-none'><small onClick={()=> setOpen1(false)}>Read More</small></Link>
              </div>
             </div>
             <div className="row mt-2">
              <div className="col-6">
                <h6 className='p-0 m-0'>FAQs</h6>
                <h6>What is Lybley?</h6>
                <small>Lybley is subcription care for the home that covers the cost of repair or replacement...</small> <br/>
                <Link href="faqs" className='text-decoration-none'><small onClick={()=> setOpen1(false)}>Read More</small></Link>
              </div>
              <div className="col-6">
              <h6 className='p-0 m-0'>News</h6>
                <small>08/04/2023</small> - <small className='fw-bold'>Lybley continues growth momentum with acquisitions of theree home warrenty business</small> <br/>
                <a href="#" className='text-decoration-none'><small>Read More</small></a>
              </div>
             </div>
            </div>
            <div className="col-12  p-4">
              <h6>Testimonial</h6>
             
              <iframe width="250" height="140" src="https://www.youtube.com/embed/dol47wR40kw?si=YYTbhBsFTyD4gKKq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br />
              {/* <iframe width="250" height="140" src="https://www.youtube.com/embed/P36YNPR6RDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br/> */}
              <div className='mt-3'><small >Lybley's subscribers tell us how our service is a trusted part of their day-to-day lives.</small> <br/></div>
             <div className='mt-3'> <a href="#" className='text-decoration-none'>See More</a></div>
            </div>
           </div>
          </div>
    </div>
  )
}

export default Lybley