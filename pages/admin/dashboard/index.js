import Link from 'next/link'
import React from 'react'
import DashboardHeader from '../common/DashboardHeader'

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader pagetitle={"Dashboard"}
                 />
      
      <div className="row ">
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
        <Link href={"/admin/plan"} className='text-decoration-none'>
          <div className="card shadow py-4" style={{cursor:"pointer",backgroundColor:"#FFE4C4"}}>
            <h5 className='fw-bold'>TOTAL PLAN</h5>
            <h5 className='fw-bold'>4</h5>
          </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
          <Link href={"/admin/user"} className='text-decoration-none'>
          <div className="card shadow py-4" style={{cursor:"pointer",backgroundColor:"#FFE4C4"}}>
            <h5 className='fw-bold'>TOTAL USER</h5>
            <h5 className='fw-bold'>4</h5>
          </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
        <Link href={"/admin/technician"} className='text-decoration-none'>
          <div className="card shadow py-4" style={{cursor:"pointer",backgroundColor:"#FFE4C4"}}>
            <h5 className='fw-bold'>TOTAL TECHNICIAN</h5>
            <h5 className='fw-bold'>4</h5>
          </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-4 col-lg-4 mt-5">
        <Link href={"/admin/subscriber"} className='text-decoration-none'>
          <div className="card shadow py-4" style={{cursor:"pointer",backgroundColor:"#FFE4C4"}}>
            <h5 className='fw-bold'>TOTAL SUBSCRIBER</h5>
            <h5 className='fw-bold'>4</h5>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard