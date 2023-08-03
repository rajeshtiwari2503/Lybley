import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import style from "../footer/footer.module.css"
 
const Available = () => {
  const [search, setSearch] = useState("");

    return (
        <div >
            
            <div  style={{width:"100vw"}} className={`${style.searchBody} mt-5 row  `} >
            <div >
                <h1 className='text-center mt-5'>Where is Super available?</h1>
            </div>
                <div className='marquee '>
                    <div className='content'>
                        <div className='d-flex text-center fw-bold '>
                            <div className='col-12 col-md-3 col-lg-3 mt-5  '>
                                Noida
                            </div>
                            <div className='col-12 col-md-3 col-lg-3 mt-5  '>
                                Gurugram
                            </div>
                            <div className='col-12 col-md-3 col-lg-3 mt-5 '>
                                Delhi
                            </div>
                            <div className='col-12 col-md-3 col-lg-3 mt-5  '>
                                Punjab
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.searchBody} `}>

                <div className=''>
                    <div className={`${search ? style.searchBoxClick : style.searchBox} shadow`}>
                        <input onChange={(e) => setSearch(e.currentTarget.value)} name='search' value={search} type="text" placeholder="Search..." />

                        <SearchIcon className='me-2' fontSize='medium' />

                    </div>
                    {search ? <div className={`${style.categoryList} shadow`}>
                        <div className='ps-2' >  Noida</div>
                        <div className='ps-2' > Gurugram</div>
                        <div className='ps-2' > Delhi</div>
                         
                    </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Available