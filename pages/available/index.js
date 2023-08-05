import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import style from "../footer/footer.module.css"

const Available = () => {
    const [search, setSearch] = useState("");

    return (
        <div style={{ background: "#c8d8e4" }}>

            <div className={`  mt-5 row  w-100`} >
                <div >
                    <h1 className='text-center mt-5'>Where is Lybley available?</h1>
                </div>
                <div className='marquee '>
                    <div className='content'>

                        <div className='d-flex mt-1 mb-1'>
                            <div className='col-12 col-md-2 col-lg-2 mt-5  '>
                                Noida
                            </div>
                            <div className='col-12 col-md-2 col-lg-2 mt-5  '>
                                Gurugram
                            </div>
                            <div className='col-12 col-md-2 col-lg-2 mt-5 '>
                                Delhi
                            </div>
                            <div className='col-12 col-md-2 col-lg-2 mt-5  '>
                                Punjab
                            </div>
                            <div className='col-12 col-md-2 col-lg-2 mt-5  '>
                                Gaziabad
                            </div>
                            <div className='col-12 col-md-2 col-lg-2 mt-5  '>
                                Hapur
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