import React, { useEffect } from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




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
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            /> */}
          </div>
          <Button onClick={props.onHide}>Submit</Button>

        </Modal.Body>
      </div >
    </Modal >
  );
}
const Header = () => {


  const router = useRouter()
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [loginData, setLoginData] = useState({})
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('admin');
    const data = JSON.parse(dataFromLocalStorage)
    setLoginData(data);
  }, []);

  const handleDashboard = () => {

    window.location.href = "/admin/dashboard";
  }

  return (
    <>
      <div className='sticky-top'>
        <div className="bg-dark text-white">
          <div className="row w-100">
            <div className="col-12 col-md-7 col-lg-7"></div>
            <div className="col-12 col-md-4 col-lg-4 d-none d-md-block">
              <div className='d-flex justify-content-around ps-4'>
                <Link href={"/"} className={router.pathname === "/" ? 'text-decoration-none selectNav fw-bold p-md-2 p-1 ' : 'text-decoration-none hover fw-bold p-md-2 p-1 text-white'} > <small className='hover headerNavFont fw-bold p-md-2 p-1' style={{ fontSize: "11px" }}>HOMEOWNER</small></Link>

                <Link href={"/servicer"} className={router.pathname === "/servicer" ? 'text-decoration-none selectNav fw-bold p-md-2 p-1 ' : 'text-decoration-none hover fw-bold p-md-2 text-white p-1'} > <small className='hover headerNavFont fw-bold p-md-2 p-1' style={{ fontSize: "11px" }}>SERVICER</small></Link>
                {/* <Link href={"/tips"} className={router.pathname === "/tips" ? 'text-decoration-none selectNav fw-bold p-md-2 p-1 ' : 'text-decoration-none hover fw-bold p-md-2 text-white p-1'} > <small className='headerNavFont' style={{ fontSize: "11px" }}>TIPS</small></Link> */}
              </div>
            </div>
            <div style={{ height: "40px" }} className="col-12   d-md-none d-block">
              <div className='d-flex justify-content-between align-items-center text-center'>

                <Link href={"/"} className={router.pathname === "/" ? 'text-decoration-none selectNav fw-bold  p-2 ' : 'text-decoration-none hover fw-bold  text-white  p-2'} > <small className='hover headerNavFont fw-bold p-md-2   p-1'>HOMEOWNER</small></Link>

                <Link href={"/servicer"} className={router.pathname === "/servicer" ? 'text-decoration-none selectNav fw-bold    p-2' : 'text-decoration-none hover fw-bold   text-white  p-2 '} > <small className='hover headerNavFont fw-bold p-md-2   p-1'>SERVICER</small></Link>

                {/* <Link href={"/tips"} className={router.pathname === "/tips" ? 'text-decoration-none selectNav fw-bold   p-2' : 'text-decoration-none hover fw-bold   text-white   p-2'} > <small className='headerNavFont  '>TIPS</small></Link> */}

              </div>
            </div>
            <div className="col-12 col-md-1 col-lg-1"></div>
          </div>
        </div>

        <div className='d-none d-md-block' style={{ backgroundColor: "#c8d8e4", }}>
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
                <Link href={"/"}>
                <img className='card-img-top1 rounded' height={70} width={70} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s"} />
              </Link>
            </div>
            <div className="col-12 col-md-5 col-lg-5 d-flex p-4 justify-content-center align-items-center">
              <div className='d-flex'>
                <div className='pe-4'>
                  <small className='fw-bold headerNavFont' style={{ cursor: "pointer" }}
                    onClick={() => { setOpen1(false); setOpen(!open); }}
                    aria-controls="collapse-example"
                    aria-expanded={open}
                  >PLANS</small>
                </div>
                <div>
                  <small className='fw-bold headerNavFont me-2' style={{ cursor: "pointer", }}
                    onClick={() => { setOpen(false); setOpen1(!open1); }}
                    aria-controls="collapse-example1"
                    aria-expanded={open1}
                  >WHAT IS LYBLEY</small>
                </div>
                <div className='d-flex' >

                  {(loginData?.role==="ADMIN" || loginData?.role==="USER") ?
                    <button onClick={() => handleDashboard()} className='header-btn py-1 ms-2 me-3 rounded-pill'><small className='fw-bold headerNavFont'>Dashboard</small></button>
                    : <Link className='text-decoration-none' href={"/login"}>
                      <button className='header-btn py-1 ms-2 me-3 rounded-pill'><small className='fw-bold headerNavFont'>LOGIN</small></button>
                    </Link>
                  }

                  <Link className='text-decoration-none' href={"/pricing"}>
                    <button className='py-1 price-btn rounded-pill'><small className='fw-bold headerNavFont'>SEE PRICING</small></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-md-none d-block' style={{ backgroundColor: "#c8d8e4", }}>
        <div className='container '>

          <div className="row d-flex justify-content-between align-items-center p-2 ">

            {/* <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-center p-4">
             <Link className='text-decoration-none' href={"/requestService"}>
               <button className='header-btn mx-3 py-1 rounded-pill'><small className='fw-bold headerNavFont'>REQUEST SERVICE</small></button>
             </Link>
              <button onClick={() => setModalShow(true)} className='header-btn py-1 rounded-pill'><small className='fw-bold headerNavFont'>CHECK CLAIM STATUS</small>
              </button>
            </div> */}
            <div className="col-4">
              {open2 === false ? <MenuIcon fontSize="large" onClick={(() => setOpen2(true))} />
                : <CloseIcon fontSize='large' onClick={(() => setOpen2(false))} />}
            </div>
            <div className="col-4 text-center">
              {/* <div className='pt-1'><DraftsIcon color='primary' fontSize='large' /></div>
              <div className='space fw-bold'>L3BLEY</div> */}
               <Link href={"/"}>
              <img className='card-img-top1 rounded' height={60} width={60} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s"} />
            
              </Link></div>
            <div className="col-4 text-end">
              {(loginData?.role==="ADMIN" || loginData?.role==="USER")  ?
                <button onClick={() => handleDashboard()} className='header-btn py-2 rounded-pill'><small className='fw-bold headerNavFont'>Dashboard</small></button>

                : <Link className='text-decoration-none ' href={"/login"}>
                  <button className='header-btn py-2 rounded-pill'><small className='fw-bold headerNavFont'>LOGIN</small></button>
                </Link>
              }
            </div>
            {/* <div className="col-12 col-md-5 col-lg-5 d-flex p-4 justify-content-center align-items-center">
              <div className='d-flex'>
              <div className='pe-4'>
              <small className='fw-bold headerNavFont' style={{cursor: "pointer"}}
               onClick={() =>{setOpen1(false); setOpen(!open); }}
               aria-controls="collapse-example"
               aria-expanded={open}
              >PLANS</small>
              </div>
              <div>
              <small className='fw-bold headerNavFont me-2' style={{cursor: "pointer",}} 
              onClick={() =>{setOpen(false); setOpen1(!open1); }}
              aria-controls="collapse-example1"
              aria-expanded={open1}
              >WHAT IS LYBLEY</small>
              </div>
              <div className='d-flex' >
              <Link className='text-decoration-none' href={"/login"}>
                <button className='header-btn py-1 ms-2 me-3 rounded-pill'><small className='fw-bold headerNavFont'>LOGIN</small></button>
                </Link>
                <Link className='text-decoration-none' href={"/pricing"}>
                  <button className='py-1 price-btn rounded-pill'><small className='fw-bold headerNavFont'>SEE PRICING</small></button>
              </Link>
              </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <Collapse in={open}
          style={{ position: "absolute", backgroundColor: "white", width: "100%" }}
        >
          <div id="collapse-example"
            onMouseLeave={() => setOpen(false)}
            aria-controls="collapse-example"
            aria-expanded={open}
          >
            <div className="container" >
              <div className="row p-4">
                <div className="col-12 col-md-4 col-lg-4 p-4 border-end border-1 border-dark">
                  <h6>Lybley's home subscription care offers homeowners a trifecta of predictability, reliability, and comfort.</h6>
                  <h6>Irrespective of the plan you select, our certified Lybley service technicians stand prepared to swiftly repair or replace your home's appliances and systems whenever unexpected issues arise.</h6>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-4 text-center border-end border-1 border-dark">
                  {/* <div className='fw-bold fs-5'>Home Shield Lite</div>
                  <small>Your plan for protecting vital home system</small> */}
                  <div className='fw-bold fs-5'>Home Shield Basic</div>
                  <small>Just the right coverage for extra busy home</small>
                  <div className='fw-bold fs-5 mt-3'>Home Shield Plus</div>
                  <small>Maximum coverage for major peace of mind</small>
                  <div className='fw-bold fs-5 mt-3'>Home Shield Pro Plus</div>
                  <small>Maximum coverage for major peace of mind</small>
                  <button className='mt-4 btn btn-outline-primary rounded-pill' onClick={() => setOpen(false)}><Link href={"pricing"} className='text-decoration-none' >SEE PLAN</Link> </button>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-4">
                  <h6>Testimonial</h6>
                  <iframe width="250" height="140" src="https://www.youtube.com/embed/NQN8S5Ro2ZQ?si=ZSWjSdsNE1SNA0uS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br />
                  <small>Lybley's subscribers tell us how our service is a trusted part of their day-to-day lives.</small> <br />
                  <a href="#" className='text-decoration-none'>See More</a>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={open1}
          style={{ position: "absolute", backgroundColor: "white", width: "100%" }}
        >

          <div id="collapse-example1"
            onMouseLeave={() => setOpen1(false)}
            aria-controls="collapse-example1"
            aria-expanded={open1}

          >
            <div className="container">
              <div className="row p-4">
                <div className="col-12 col-md-4 col-lg-4 p-4 border-end border-1 border-dark">
                  <h6>For homeowners seeking steadfast service, consistent expenses, and a sense of security, Lybley presents subscription care tailored to the needs of your home.</h6>
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
                      <small>We're a technology company that offer subscribers care for the home</small> <br />
                      <Link href="about" className='text-decoration-none'><small onClick={() => setOpen1(false)}>Read More</small></Link>
                    </div>
                    {/* <div className="col-6">
                      <h6 className='p-0 m-0'>Tips</h6>
                      <small>Top winter pruning tips for healthy trees and shrubs</small> <br />
                      <Link href="tips" className='text-decoration-none'><small onClick={() => setOpen1(false)}>Read More</small></Link>
                    </div> */}
                  </div>
                  <div className="row mt-2">
                    <div className="col-6">
                      <h6 className='p-0 m-0'>FAQs</h6>
                      <h6>What is Lybley?</h6>
                      <small>Lybley is subcription care for the home that covers the cost of repair or replacement...</small> <br />
                      <Link href="faqs" className='text-decoration-none'><small onClick={() => setOpen1(false)}>Read More</small></Link>
                    </div>
                    <div className="col-6">
                      <h6 className='p-0 m-0'>News</h6>
                      <small>08/04/2023</small> - <small className='fw-bold'>Lybley continues growth momentum with acquisitions of theree home warrenty business</small> <br />
                      <a href="#" className='text-decoration-none'><small>Read More</small></a>
                    </div>
                  </div>
                </div>
                <div className="col-4 p-4">
                  <h6>Testimonial</h6>
                  <iframe width="250" height="140" src="https://www.youtube.com/embed/NQN8S5Ro2ZQ?si=ZSWjSdsNE1SNA0uS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br />
                  
                  <small>Lybley's subscribers tell us how our service is a trusted part of their day-to-day lives.</small> <br />
                  <a href="#" className='text-decoration-none'>See More</a>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={open2}
          style={{ position: "absolute", backgroundColor: "white", width: "100%" }}
        >
          <div id="collapse-example"
            onMouseLeave={() => setOpen2(false)}
            aria-controls="collapse-example"
            aria-expanded={open2}
          >
            <div className="container vh-100" style={{ position: "relative" }} >
              <div>
                <Link className='text-decoration-none' href={"/plans"}>
                  <div className='p-4 fw-bold text-primary border-bottom' onClick={() => setOpen2(false)} >PLAN</div>
                </Link>
                <Link className='text-decoration-none' href={"/lybley"}>
                  <div className='p-4 fw-bold text-primary' onClick={() => setOpen2(false)} >WHAT IS LYBLEY</div>
                </Link>
              </div>
              <div style={{ position: "absolute", bottom: 150, left: "22%" }} className='d-flex justify-content-center'>
                <div>
                  <div className="text-center" style={{ textAlign: "center", alignItems: "center" }}>
                    <Link className='text-decoration-none' href={"/requestService"}>
                      <button onClick={() => setOpen2(false)} className='btn btn-secondary rounded-pill p-3'>REQUEST SERVICE</button>
                    </Link>
                  </div>
                  <div className="text-center p-2">
                    <button onClick={() => setModalShow(true)} className='btn btn-secondary rounded-pill p-3'>CHECK CLAIM STATUS</button>
                  </div>
                  <div className="text-center">
                    <Link className='text-decoration-none' href={"/pricing"}>
                      <button onClick={() => setOpen2(false)} className='btn btn-primary rounded-pill p-3'>SEE PRICING</button>
                    </Link>
                  </div>
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
    </div >
    </>
  )
}

export default Header;