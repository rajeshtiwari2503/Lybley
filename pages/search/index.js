import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import style from "../footer/footer.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = () => {

  const [search, setSearch] = useState("");

  return (
    <>

      <div className={`${style.searchBody} `}>

        <div className=''>
          <div className={`${search ? style.searchBoxClick : style.searchBox} shadow`}>
            <input onChange={(e) => setSearch(e.currentTarget.value)} name='search' value={search} type="text" placeholder="Search..." />

            <SearchIcon className='me-2' fontSize='medium' />

          </div>
          {search ? <div className={`${style.categoryList} shadow`}>
            <div className='ps-2' > Fan</div>
            <div className='ps-2' > Cooler</div>
            <div className='ps-2' > Mixer</div>
            <div className='ps-2' > Search Results</div>
          </div>
            : ""
          }
        </div>
      </div>
      <div >
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
        <img className='card-img-top'  src='https://img.freepik.com/premium-photo/indian-family-father-mother-son-daughter-holding-3d-paper-model-home-real-istate-concept-india_466689-8007.jpg' />
      </div>
    </>
  )
}

export default Search