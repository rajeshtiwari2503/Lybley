import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import style from "../footer/footer.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = () => {

  const [search,setSearch]=useState("");

    return (
        <>
            <div >
                <Carousel>
                    <Carousel.Item >
                        <img
                            className={`${style.imgBannerHeight} d-block w-100}`}
                            src={'https://static.vecteezy.com/system/resources/thumbnails/002/437/377/small/horizontal-yellow-and-orange-grunge-texture-cement-or-concrete-wall-banner-blank-background-free-photo.jpg'} />
                        <Carousel.Caption>
                            {/* <h3>First Demo </h3>   */}
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item>
                        <img
                            className={`${style.imgBannerHeight} d-block w-100}`}
                            src={'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600'} />
                        <Carousel.Caption>
                            {/* <h3>Second Demo</h3>   */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={`${style.imgBannerHeight} d-block w-100}`}
                            src={'https://images.pexels.com/photos/268966/pexels-photo-268966.jpeg?auto=compress&cs=tinysrgb&w=600'} />
                        <Carousel.Caption>
                            {/* <h3>Third Demo</h3>   */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> 
            <div className={`${style.searchBody} `}>
      
      <div className=''>
        <div className={`${search ? style.searchBoxClick : style.searchBox} shadow`}>
          <input onChange={(e)=>setSearch(e.currentTarget.value)} name='search' value={search} type="text" placeholder="Search..." />
        
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
            </>
    )
}

export default Search