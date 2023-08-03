import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
 

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
  return (
    <div className='sticky-top'>
      <div className="bg-dark text-white">
        <div className="row w-100 ">
          <div className="col-12 col-md-3 col-lg-3"></div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className='d-flex justify-content-around'>
              <small className='hover fw-bold p-2'>HOMEOWNER</small>
              <small className='hover fw-bold p-2'>REALTOR</small>
              <small className='hover fw-bold p-2'>SERVICER</small>
              <small className='hover fw-bold p-2'>TIPS</small>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3"></div>
        </div>
      </div>
      <div style={{ backgroundColor: "#c8d8e4" }}>
        <div className='container '>
 
        <div className="row w-100 ">
 
            <div className="col-5 text-center p-4">
              <button className='header-btn mx-3 py-1 rounded-pill'><small className='fw-bold'>REQUEST SERVICE</small></button>
              <button onClick={() => setModalShow(true)} className='header-btn py-1 rounded-pill'><small className='fw-bold'>CHECK CLAIM STATUS</small>
              </button>
            </div>
            <div className="col-2 text-center d-flex flex-column justify-content-center align-items-center">
              {/* <div className='pt-1'><DraftsIcon color='primary' fontSize='large' /></div>
              <div className='space fw-bold'>L3BLEY</div> */}
              <img className='card-img-top1' height={70} width={100} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s"} />
            </div>
            <div className="col-5 d-flex p-4 justify-content-around align-items-center">
              <small className='fw-bold'>PLANS</small> <small className='fw-bold'>WHAT IS L3BLEY</small>
              <Link className='text-decoration-none' href={"/login"}>
                <button className='header-btn py-1 rounded-pill'><small className='fw-bold'>LOGIN</small></button> <button className='py-1 price-btn rounded-pill'><small className='fw-bold'>SEE PRICING</small></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  )
}

export default Header;