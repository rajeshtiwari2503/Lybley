import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DashboardHeader from '../common/DashboardHeader'
import httpCommon from '@/http-common'

const Dashboard = () => {

  const [data, setData] = useState({})
  useEffect(() => {
    getDashboardDetails()
      
  }, [])

  const getDashboardDetails = async () => {
    try {
      let response = await httpCommon.get("/dashboardDetail")
      const { data } = response;
      setData(data)
    }
    catch (err) {
      console.log(err);
    }
  }

  
  return (
    <div>
      <DashboardHeader pagetitle={"Dashboard"}
      />

      <div className="row ">
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
          <Link href={"/admin/plan"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h5 className='fw-bold'>TOTAL PLAN</h5>
              <h5 className='fw-bold'>{data?.plans}</h5>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
          <Link href={"/admin/user"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h5 className='fw-bold'>TOTAL USER</h5>
              <h5 className='fw-bold'>{data?.users}</h5>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
          <Link href={"/admin/technician"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h5 className='fw-bold'>TOTAL TECHNICIAN</h5>
              <h5 className='fw-bold'>{data?.servicer}</h5>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
          <Link href={"/admin/subscriber"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h5 className='fw-bold'>TOTAL SUBSCRIBER</h5>
              <h5 className='fw-bold'>{data?.subscribedPlan}</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard