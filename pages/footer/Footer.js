import React from 'react'
import style from "./footer.module.css"
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CallIcon from '@mui/icons-material/Call';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
function MyVerticallyCenteredModal(props) {



    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <div className='text-center' >
        <div className='text-end pe-md-2 pe-1'>
          <CloseIcon className='hover' fontSize='large' onClick={props.onHide}/>
          </div>
        <div className='text-center  '>
          
          <div className='fw-bold fs-3' >
          Contact Help Center
          </div>
          <Modal.Body   >
            <div className='row '>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div>
                        <div className='mt-3 mb-5'>
                            <PersonAddIcon style={{fontSize:"40px"}} />
                        </div>
                        <div className='mt-3 mb-3'>
                            <div className='fw-bold fs-5 ms-5 me-5'>Sign up with Lubley</div>
                        </div>
                        <div>
                        Do you need to add Super to your home?
                        </div>
                        <div className='mt-3 mb-3'>
                            <button className='btn btn-primary'>6446644646464</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div>
                        <div  className='mt-3 mb-5'>
                            <CallIcon style={{fontSize:"40px"}} />
                        </div>
                        <div className='mt-3 mb-3'>
                            <div className='fw-bold fs-5'>Any questions about your plan?</div>
                        </div>
                        <div>
                        Do you have questions about your Super policy?
                        </div>
                        <div className='mt-3 mb-3'>
                            <button className='btn btn-primary'>6446644646464</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div>
                        <div  className='mt-3 mb-5'>
                            <ManageAccountsIcon style={{fontSize:"40px"}} />
                        </div>
                        <div className='mt-3 mb-3'>
                            <div className='fw-bold fs-5 ms-5 me-5'>Request service</div>
                        </div>
                        <div>
                        Need help with a breakdown or maintenance?
                        </div>
                        <div className='mt-3 mb-3'>
                            <button className='btn btn-primary'>Request service</button>
                        </div>
                    </div>
                </div>
            </div>
          </Modal.Body>
        </div >
        </div>
      </Modal >
    );
  }
const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <footer className="w-100 py-4 flex-shrink fixed-bottom1 bg-dark"  >
    <div className="container">
        {/* <div className="row gy-4 gx-5"> */}
        <div className="row gy-4    ">
            <div className="col-lg-4 col-md-6 col-6  ">
                <div className='bg-light  p-2'>
                <h5 className="h1 text-white text-center mt-3"><Link href="/"><img className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s" alt="logo" height="90px" width="90px" />
                </Link></h5>
                <p className="small text-center"  >India's biggest online marketplaces for spare parts.</p>
                {/* <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p> */}
                <div className="mt-md-3 text-center mt-lg-3">
                   <Link href={"https://twitter.com/SpareTradeIN"} target="_blank"><img className="p-1 bg-white rounded-circle" src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link className="ms-2" href={"https://www.linkedin.com/company/94805456/admin/"} target="_blank"><img className="p-1 bg-white rounded-circle" src="https://img.icons8.com/?size=512&id=60443&format=png" alt="logo" height="40px" width="40px" /> </Link> 
                    {/* <img className="p-1" src="https://lybley-webapp-collection.s3.amazonaws.com/whatsapp-icon-3933.png-1683869804569-439943255" alt="logo" height="30px" width="30px" /> 
                    <img className="p-1" src="https://lybley-webapp-collection.s3.amazonaws.com/pngegg.png-1683869876816-914477302" alt="logo" height="30px" width="30px" />  */}
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
                <h5 className="text-white mb-3">About</h5>
                <ul className="list-unstyled text-muted">
                <Link className={`${style.footerLink} text-decoration-none text-muted`}  href="/"> <li style={{color:"#acabad"}} className={`${style.footerLink}`}>HomeOwner</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`}  href="/about"> <li style={{color:"#acabad"}} className={`${style.footerLink}`}>About Us</li></Link>
                    <div className={`${style.footerLink}`}onClick={() => setModalShow(true)}><li style={{color:"#acabad",cursor:"pointer"}}> Contact Us</li></div>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/faqs" ><li style={{color:"#acabad"}}>FAQs</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/career" > <li style={{color:"#acabad"}}> Careers </li></Link>
    
                </ul> 
            </div>
            <div className="col-lg-3 col-md-6 col-6">
                <h5 className="text-white mb-3">Policy</h5>
                <ul className="list-unstyled text-muted">
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/returnPolicy" >  <li style={{color:"#acabad"}}>Return Policy</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/privacyPolicy" >  <li style={{color:"#acabad"}}>Privacy Policy</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/disclaimer" >  <li style={{color:"#acabad"}}>Disclaimer</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/termOfUse" > <li style={{color:"#acabad"}}>Terms of Use</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/buyersPolicy" >  <li style={{color:"#acabad"}}>Buyers Policy</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/sellersPolicy" >  <li style={{color:"#acabad"}}>Sellers Policy</li></Link>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
                <h5 className="text-white mb-3">Useful links</h5>
                <ul className="list-unstyled text-muted">
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/tips" ><li style={{color:"#acabad"}}>Tips</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/servicer" ><li style={{color:"#acabad"}}>Servicer</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/SiteMap" ><li style={{color:"#acabad"}}>SiteMap</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/pricing" ><li style={{color:"#acabad"}}>Pricing</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`}   href="/login" ><li style={{color:"#acabad"}}>Sign In  </li></Link>
                </ul>
                {/* <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        <form action="#">
            <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" id="button-addon2" type="button"><BsFillSendFill />  </button>
            </div>
        </form> */}
            </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
    <div className="text-white text-center"><p className="small mb-0" style={{color:"#acabad"}}>&copy; Copyrights. All rights reserved. <a className="text-primary text-decoration-none" href="/"> lybley.in </a></p></div>
</footer>
  )
}

export default Footer;