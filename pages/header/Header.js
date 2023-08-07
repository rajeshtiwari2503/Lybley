import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'react-bootstrap';

 

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='text-center mt-5 '>
        <div className='fw-bold fs-2' >
          Check request status
        </div>
        <Modal.Body className='p-5'>

          <div>
            Please provide the following info so you can check the status of your request.
          </div>
          <div className='mt-5 mb-5'>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Number"
              name="number"
              autoComplete="email"
              autoFocus
            // onChange={handleChange}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // autoFocus
            // onChange={handleChange}
            />
          </div>
          <Button onClick={props.onHide}>Submit</Button>

        </Modal.Body>
      </div >
    </Modal >
  );
}
const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);


  return (
    <>
    <div className='sticky-top'>
      <div className="bg-dark text-white ">
        <div className="row w-100 ">
          <div className="col-12 col-md-3 col-lg-3"></div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className='d-flex justify-content-around text-center ms-4'>
              <small className='hover fw-bold p-2'>HOMEOWNER</small>
              <small className='hover fw-bold p-2'>REALTOR</small>
              <Link href={"/servicer"} className='text-decoration-none hover fw-bold p-2 text-white' > <small className='hover fw-bold p-2'>SERVICER</small></Link>
             <Link href={"/tips"} className='text-decoration-none hover fw-bold p-2 text-white' > <small className=''>TIPS</small></Link>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3"></div>
        </div>
      </div>
      </div>
      <div>
      <div className='' style={{ backgroundColor: "#c8d8e4", }}>
        <div className='container '>
 
        <div className="row  d-flex justify-content-center ">
 
            <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-center p-4">
             <Link className='text-decoration-none' href={"/requestService"}>
               <button className='header-btn mx-3 py-1 rounded-pill'><small className='fw-bold headerNavFont'>REQUEST SERVICE</small></button>
             </Link>
              <button onClick={() => setModalShow(true)} className='header-btn py-1 rounded-pill'><small className='fw-bold headerNavFont'>CHECK CLAIM STATUS</small>
              </button>
            </div>
            <div className="col-12 col-md-2 col-lg-2 justify-content-center d-flex flex-column justify-content-center align-items-center">
              {/* <div className='pt-1'><DraftsIcon color='primary' fontSize='large' /></div>
              <div className='space fw-bold'>L3BLEY</div> */}
              <img className='card-img-top1 rounded' height={70} width={70} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s"} />
            </div>
            <div className="col-12 col-md-5 col-lg-5 d-flex p-4 justify-content-center align-items-center">
              <div className='d-flex'>
              <div className='pe-2'>
              <small className='fw-bold headerNavFont' style={{cursor: "pointer"}}
               onClick={() =>{setOpen1(false); setOpen(!open); }}
               aria-controls="collapse-example"
               aria-expanded={open}
              >PLANS</small>
              </div>
              <div>
              <small className='fw-bold headerNavFont' style={{cursor: "pointer",}} 
              onClick={() =>{setOpen(false); setOpen1(!open1); }}
              aria-controls="collapse-example1"
              aria-expanded={open1}
              >WHAT IS L3BLEY</small>
              </div>
              <div className='d-flex' >
              <Link className='text-decoration-none' href={"/login"}>
                <button className='header-btn py-1 ms-2 me-2 rounded-pill'><small className='fw-bold headerNavFont'>LOGIN</small></button>
                </Link>
                <Link className='text-decoration-none' href={"/pricing"}>
                  <button className='py-1 price-btn rounded-pill'><small className='fw-bold headerNavFont'>SEE PRICING</small></button>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Collapse in={open} 
      style={{position:"absolute",backgroundColor: "white",width:"100%"}}
      >
        <div id="collapse-example" 
        onMouseLeave={()=> setOpen(false)}
        aria-controls="collapse-example"
        aria-expanded={open}
        >
          <div className="container" >
           <div className="row p-4">
            <div className="col-12 col-md-4 col-lg-4 p-4 border-end border-1 border-dark">
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum eveniet nulla laboriosam. Maxime consectetur officia a facere dolorum ducimus, doloremque maiores.</h6>
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, asperiores expedita reprehenderit autem alias doloremque, ex tempore maxime vel labore aperiam architecto eos perspiciatis culpa?</h6>
            </div>
            <div className="col-12 col-md-4 col-lg-4 p-4 text-center border-end border-1 border-dark">
              <h6>Simple</h6>
              <small>Your plan for protecting vital home system</small>
              <h6 className='mt-3'>Signature</h6>
              <small>Just the right coverage for extra busy home</small>
              <h6 className='mt-3'>Lux</h6>
              <small>Maximum coverage for major peace of mind</small>
              <button className='mt-4 btn btn-outline-primary rounded-pill'>SEE PLAN</button>
            </div>
            <div className="col-12 col-md-4 col-lg-4 p-4">
              <h6>Testimonial</h6>
              <iframe width="250" height="140" src="https://www.youtube.com/embed/P36YNPR6RDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br/>
              <small>Lybley's subscribers tell us how our service is a trusted part of their day-to-day lives.</small> <br/>
              <a href="#" className='text-decoration-none'>See More</a>
            </div>
           </div>
          </div>
        </div>
      </Collapse>
      <Collapse in={open1} 
      style={{position:"absolute",backgroundColor: "white",width:"100%"}}
      >

        <div id="collapse-example1"
        onMouseLeave={()=> setOpen1(false)}
        aria-controls="collapse-example1"
        aria-expanded={open1}

        >
          <div className="container">
           <div className="row p-4">
            <div className="col-12 col-md-4 col-lg-4 p-4 border-end border-1 border-dark">
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum eveniet nulla laboriosam. Maxime consectetur officia a facere dolorum ducimus, doloremque maiores.</h6>
              <ul>
                <li>Expert and respected service techs</li>
                <li>Phenomenal customer service</li>
                <li>Robust technology</li>
                <li>Budget friendly</li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 p-4 border-end pb-0 border-1 border-dark">
             <div className="row">
              <div className="col-6">
                <h6 className='p-0 m-0'>About Us</h6>
                <small>We're a technology company that offer subscribers care for the home</small> <br/>
                <a href="#" className='text-decoration-none'><small>Read More</small></a>
              </div>
              <div className="col-6">
              <h6 className='p-0 m-0'>Tips</h6>
                <small>Top winter pruning tips for healthy trees and shrubs</small> <br/>
                <a href="#" className='text-decoration-none'><small>Read More</small></a>
              </div>
             </div>
             <div className="row mt-2">
              <div className="col-6">
                <h6 className='p-0 m-0'>FAQs</h6>
                <h6>What is Lybley?</h6>
                <small>Lybley is subcription care for the home that covers the cost of repair or replacement...</small> <br/>
                <a href="#" className='text-decoration-none'><small>Read More</small></a>
              </div>
              <div className="col-6">
              <h6 className='p-0 m-0'>News</h6>
                <small>08/04/2023</small> - <small className='fw-bold'>Lybley continues growth momentum with acquisitions of theree home warrenty business</small> <br/>
                <a href="#" className='text-decoration-none'><small>Read More</small></a>
              </div>
             </div>
            </div>
            <div className="col-4 p-4">
              <h6>Testimonial</h6>
              <iframe width="250" height="140" src="https://www.youtube.com/embed/P36YNPR6RDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br/>
              <small>Lybley's subscribers tell us how our service is a trusted part of their day-to-day lives.</small> <br/>
              <a href="#" className='text-decoration-none'>See More</a>
            </div>
           </div>
          </div>
        </div>
      </Collapse>
    </div>
      <>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
    </>
  )
}

export default Header;