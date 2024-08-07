import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import style from "../footer/footer.module.css"
import SearchIcon from '@mui/icons-material/Search';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import httpCommon from '@/http-common';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import { useDataContext } from '../api/userData';
import Link from 'next/link';

function MyVerticallyCenteredModal(props) {



  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='text-center pt-3 rounded' style={{ backgroundColor: "aliceblue" }}>
        <HouseIcon style={{ fontSize: "100px" }} />
        <Modal.Body className='p-4'>
          <div className='fw-bold fs-4'>Lybley is not available in your area yet</div>
          <div className='mt-4'>Please share your contact information and you will be notified when Lybley is available in your area.</div>
          <div className='mt-4'> <button className='btn btn-primary rounded-pill me-3'><small>GET NOTIFIED</small></button><button className='btn btn-secondary rounded-pill' onClick={() => props.setModalShow(false)}><small>CLOSE</small></button></div>

        </Modal.Body>
      </div >
    </Modal >
  );
}
const Search = () => {

  const { saveData } = useDataContext();

  const [search, setSearch] = useState("");
  const [unit, setUnit] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showUnit, setShowUnit] = useState(false);

  const router = useRouter();
  // const getAllCity=async()=>{
  //      try{
  //       let response=await axios.get("https://backstage.taboola.com/backstage/api/1.0/resources/countries/us/cities");
  //       let {data}=response;
  //       setCity(data);
  //      }catch(err){
  //       console.log(err);
  //      }
  // }

  // useEffect(()=>{
  //     getAllCity();
  // },[]);

  const handlePrice = () => {
    if (search.toUpperCase() === "NOIDA" && unit) {
      const newData = { city: search, unit: unit };
      saveData(newData);
      router.push("/pricing");
    }
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }


  const handleSearch = (e) => {
    if (search.toUpperCase() !== "NOIDA") {
      setModalShow(true);
      setShowUnit(false);
    } else {
      setShowUnit(true);

    }
  }

  return (
    <>
      <div className='d-none d-md-block'>
          
        <div className='d-flex justify-content-center align-items-center'>
        <div className={`${style.searchBody}`}>

          <div className='container'>
            <div style={{  marginTop:"640px",background:"white",borderRadius:"10px",height:"250px" }} className="  d-flex align-items-center justify-content-center row py-3 py-md-0 py-lg-0 ">
              <div style={{textAlign:"center" ,fontWeight:"bold",fontSize:"35px"}}>Hassle-Free Home Care with Lybley Home Warranty</div>
              <div style={{textAlign:"center" ,fontWeight:"bold",marginTop:"-70px"}}>Comprehensive Appliance and System Repair Solutions</div>
              <div style={{marginTop:"-70px"}} className={`${style.searchBox} ms-4 ms-md-0 shadow col-12 col-md-9 col-lg-9 text-center`}>

                <input className='fw-bold' onChange={(e) => setSearch(e.currentTarget.value)} name='search' type="text" placeholder="City" onKeyPress={handleEnter} />

                <SearchIcon style={{ color: "white", cursor: "pointer" }} className='me-md-2' fontSize='large' onClick={handleSearch} />

              </div>
              {/* {showUnit ? <div style={{ width: "200px",marginBottom:"70px" }} className={`${style.unitBox} mt-md-0 text-white  mt-2 shadow mx-2 col-12 col-md-1 col-lg-1`}>
                <input     name='unit' onChange={(e) => setUnit(e.currentTarget.value)} type="number" placeholder="Number of houses" />
              </div> : " "} */}
              <div className={`${!showUnit ? "ms-4 mt-md-0 mt-2" : ""} ms-5 col-12 col-md-2  col-lg-2 m-0 p-0 text-md-start text-lg-start text-center`}>
                <button style={{ border: "1px solid black",marginTop:"-70px" }} className='btn text-black  fw-bold rounded-pill p-3' onClick={handlePrice}><span>GET QUOTE</span></button>
              </div>
             
            </div>
             
          </div>

          {/* {search ? <div className={`${style.categoryList} shadow`}>
            <div className='ps-2' > Fan</div>
            <div className='ps-2' > Cooler</div>
            <div className='ps-2' > Mixer</div>
            <div className='ps-2' > Search Results</div>
          </div>
            : ""
          } */}
        </div>
      </div>
      </div>
      <div className={`${style.searchBody} d-block d-md-none `}>
        <div className='container'>
          <div className={`pt-4 ms-md-0 col-12 col-md-9 col-lg-9 text-center`}>

           
            <div className="fw-bold">
              {/* <h2 className='fw-bold title '> Lybley covers home appliances breakdown and maintenance </h2> */}
              </div>
            <div className='mt-3 '>
            <div style={{marginTop:"70px",fontSize:"30px",lineHeight:"1em"}} className='homeFontFamily fw-bold text-dark'> HOME WARRANTY. REINVENTED. </div>

              <Link className='text-decoration-none  ' href={"/pricing"}>
              <button  className='btn rounded-5 mt-3 bg-white fw-bold'>See Pricing</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <Carousel>
          <Carousel.Item >
            <img
              className={`${style.imgBannerHeight} d-block w-100}`}
              src={'https://www.dghelp.com/wp-content/uploads/2021/08/Samsung_2000x600-HA-banners-150821-.jpg'} />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item  >
          <Carousel.Item>
            <img
              className={`${style.imgBannerHeight} d-block w-100}`}
              src={'https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/300679834_380426854246168_1466790699520245960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zVM1WWDqpnIAX_0-nbH&_nc_ht=scontent.fdel27-1.fna&oh=00_AfBQfF0ooCu2pEkgm0nP73LoWzwL9m3ntD66KsEE3hGlQw&oe=64D07F7B'} />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`${style.imgBannerHeight} d-block w-100}`}
              src={'https://www.totallyrepair.in/images/banner1.jpg'} />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        {/* <img className={`card-img-top ${style.bannerHome}`} src='https://apollostore.blob.core.windows.net/forestmdws/uploads/assets/resources-banner.5686b8ca-98a6-4cba-9a43-b23c309ddacd.jpg' /> */}
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        // onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  )
}

export default Search