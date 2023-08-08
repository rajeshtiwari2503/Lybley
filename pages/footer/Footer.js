import React from 'react'
import style from "./footer.module.css"
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink fixed-bottom1 bg-dark"  >
    <div className="container">
        {/* <div className="row gy-4 gx-5"> */}
        <div className="row gy-4    ">
            <div className="col-lg-4 col-md-6 col-6  ">
                <div className='bg-light  p-3'>
                <h5 className="h1 text-white text-center mt-3"><Link href="/"><img className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexHlqnS8PIODGRgSNEj4ipDKcC4b7CbV8_z8ozsgerA&s" alt="logo" height="100px" width="100px" />
                </Link></h5>
                <p className="small text-center"  >India's biggest online marketplaces for spare parts.</p>
                {/* <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p> */}
                <div className="mt-md-4 text-center mt-lg-4">
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
                    <Link className={`${style.footerLink} text-decoration-none text-muted`}  href="/aboutUs"> <li style={{color:"#acabad"}} className={`${style.footerLink}`}>About Us</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/contactUs" ><li style={{color:"#acabad"}}> Contact Us</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/faqs" ><li style={{color:"#acabad"}}>FAQs</li></Link>
                    <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/carrier" > <li style={{color:"#acabad"}}> Carees </li></Link>

                    <li style={{color:"#acabad"}}>Investor Relations </li>
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
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/article" ><li style={{color:"#acabad"}}>Article</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/sparePartBrands" ><li style={{color:"#acabad"}}>Brands</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/SiteMap" ><li style={{color:"#acabad"}}>SiteMap</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`} href="/activatePlan" ><li style={{color:"#acabad"}}>Activate Plan</li></Link>
                <Link className={`${style.footerLink} text-decoration-none text-muted`}   href="/sign-in" ><li style={{color:"#acabad"}}>Sign In  </li></Link>
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

    </div>
    <div className="text-white text-center"><p className="small mb-0" style={{color:"#acabad"}}>&copy; Copyrights. All rights reserved. <a className="text-primary text-decoration-none" href="/"> lybley.in </a></p></div>
</footer>
  )
}

export default Footer;