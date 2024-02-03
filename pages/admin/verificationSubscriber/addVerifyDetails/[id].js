import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../common/DashboardHeader'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import Loader from '../../common/Loading';


const AddVerificationDetails = () => {
  const router = useRouter();
  const { id } = router.query
  const [edit, setEdit] = useState("")
  const [data, setData] = useState("")
  const [verificationDetails,setVerificationDetails]=useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getVerificationDetails()
  }, [id])

  const getVerificationDetails = async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get(`/getAssignedVerificationBy/${id}`)
      let { data } = response
      setData(data)
      setLoading(false)
    }
    catch (err) {
      console.log(err);
      setLoading(false)
    }

  }
  const filterAppliaces = data && data?.planInfo?.appliances?.filter((f1) => f1?.checked === true)
  const filterPlus = data && data?.planInfo?.plus?.filter((f1) => f1?.checked === true)
  const filterData = [...filterAppliaces, ...filterPlus]
const handleChange=(e)=>{
  const file = e.target.files[0];
  // setImage(file)
}
const handleImageChange=(e)=>{
  const file = e.target.files[0];
  // setImage(file)
}
  return (
    <>
      {loading ? <div className='d-flex justify-content-center align-items-center' > <Loader /> </div> :
        <div>
          <DashboardHeader pagetitle={"Subscription Details"} />

          <div className='row'>
            <div className='col-12 col-md-4 '>
              <div className='d-flex justify-content-between  p-2'>
                <div className='fw-bold'>User Name</div>
                <div>{data?.userInfo}</div>
              </div>
            </div>
            <div className='col-12 col-md-4 '>
              <div className='d-flex justify-content-between  p-2'>
                <div className='fw-bold'>Plan Name</div>
                <div>{data?.planInfo?.planName}</div>
              </div>
            </div>
            <div className='col-12 col-md-4 '>
              <div className='d-flex justify-content-between  p-2'>
                <div className='fw-bold'>Technician Name</div>
                <div>{data?.technicianInfo?.servicerName}</div>
              </div>
            </div>
            <div className='col-12 col-md-4 '>
              <div className='d-flex justify-content-between p-2'>
                <div className='fw-bold'>Subscription Date</div>
                <div>{new Date(data?.createdAt)?.toLocaleString()}</div>
              </div>
            </div>
          </div>
          <DashboardHeader pagetitle={"Appliances Cover in Plan"} />
          <div className='row'>
            {filterData?.map((item, i) =>
              <div key={i} className='col-12 col-md-4 '>
                <div className='d-flex justify-content-between  p-2'>
                  <div className='fw-bold'>{item?.value}</div>

                </div>
              </div>
            )}
          </div>
          <DashboardHeader pagetitle={edit ? "Edit Plan" : "Add Subscribed Plan  Verify Details"} />

          <div className='row'>
            {filterData?.map((item, i) =>
              <div key={i} className='col-12   '>
                <div className='row align-items-center '>
                  <div className='col-12 col-md-2'>
                    <div className=' fw-bold'>{item?.value}</div>
                  </div>
                  <div className='col-12 col-md-9   '>
                    <div className='row'>
                      <div className='col-12 col-md-4'>
                        <div className=' mt-3 fw-bold mb-3 text-primary'>Product Image</div>
                        <input type="file" name={item?.value} onChange={handleImageChange}/>
                      </div>
                      <div className='col-12 col-md-4'>
                        <div className=' mt-3 fw-bold mb-3 text-primary'>Product Bill</div>
                        <input type="file" name={item?.value} />
                      </div>
                      <div className='col-12 col-md-4'>
                        <div className=' mt-3 fw-bold mb-3 text-primary'>Product EMI</div>
                        <input type="file" name={item?.value} />
                      </div>
                      <div className='col-12  '>
                        <div className='mb-4 '>
                          <div className=' mt-3 fw-bold mb-1'>Description</div>
                          <textarea className='w-100' type="file" name={item?.value} onChange={handleChange} ></textarea>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}
          </div>
          <div className='col-12'>
          <div className='mt-3 d-flex justify-content-center mb-5'>
                <button className='btn btn-primary' disabled={loading}  >Submit</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AddVerificationDetails