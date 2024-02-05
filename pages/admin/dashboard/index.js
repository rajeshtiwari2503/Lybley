import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DashboardHeader from '../common/DashboardHeader'
import httpCommon from '@/http-common'

const Dashboard = () => {

  const [data, setData] = useState({})
  const [user, setUser] = useState("")
  const [techAssignComplaints,setTechAssignComplaints]=useState([]);
  useEffect(() => {
    getDashboardDetails()
    if (typeof window !== 'undefined') {
      const user1=localStorage.getItem("admin");
      const data=JSON?.parse(user1)
      setUser(data);
      if(data?.role==="TECHNICIAN"){
      getTechnicianComplaints(data?._id);
      }
  }
  
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

  const getTechnicianComplaints = async (id) => {
    try {
      let response = await httpCommon.get(`/getAssinedComplaintByTechnician/${id}`)
      const { data } = response;
     
      setTechAssignComplaints(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const pendingComplaints = user?.role==="ADMIN"  ? data?.complaintData?.filter((f1) => f1?.status === "PENDING") : data?.complaintData?.filter((f1) => (f1?.userId === user?._id && f1?.status === "PENDING")) ;
  const asignComplaints = user?.role==="ADMIN"  ? data?.complaintData?.filter((f1) => f1?.status === "ASSIGNED") : user?.role==="TECHNICIAN" ? techAssignComplaints?.filter((f1) => (f1?.technicianId === user?._id && f1?.status === "ASSIGNED"))  : data?.complaintData?.filter((f1) => (f1?.userId === user?._id && f1?.status === "ASSIGNED")) ;
  const closeComplaints = user?.role==="ADMIN"  ? data?.complaintData?.filter((f1) => f1?.status === "CLOSE") : user?.role==="TECHNICIAN" ? techAssignComplaints?.filter((f1) => (f1?.technicianId === user?._id && f1?.status === "CLOSE"))  :data?.complaintData?.filter((f1) => (f1?.userId === user?._id && f1?.status === "CLOSE")) ;
  const totalComplaints = user?.role==="ADMIN"  ? data?.complaintData?.length  : user?.role==="TECHNICIAN" ? techAssignComplaints?.filter((f1) => (f1?.technicianId === user?._id  ))  : data?.complaintData?.filter((f1) => (f1?.userId === user?._id ));

  
  return (
    <div>
      <DashboardHeader pagetitle={"Dashboard"}
      />

      <div className="row ">
      {  user?.role==="TECHNICIAN"  ? ""
      :
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/complaint/Pending"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>PENDING COMPLAINTS</h7>
              <h7 className='fw-bold'>{pendingComplaints?.length}</h7>
            </div>
          </Link>
        </div>
}
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/complaint/Assign"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>ASSIGN COMPLAINTS</h7>
              <h7 className='fw-bold'>{asignComplaints?.length}</h7>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/complaint/Complete"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>CLOSE COMPLAINTS</h7>
              <h7 className='fw-bold'>{closeComplaints?.length}</h7>
            </div>
          </Link>
        </div>
       
       <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/complaint"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>TOTAL Complaints</h7>
              <h7 className='fw-bold'>{user?.role==="ADMIN" ? totalComplaints :totalComplaints?.length }</h7>
            </div>
          </Link>
        </div>
        {  user?.role==="ADMIN"  ?
      <>
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/plan"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>TOTAL PLAN</h7>
              <h7 className='fw-bold'>{data?.plans}</h7>
            </div>
          </Link>
        </div>
      
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/verificationSubscriber"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'> UNVERIFIED SUBSCRIBER</h7>
              <h7 className='fw-bold'>{data?.subscribedPlan}</h7>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/subscriber"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>TOTAL SUBSCRIBER</h7>
              <h7 className='fw-bold'>{data?.subscribedPlan}</h7>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/user"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>TOTAL USER</h7>
              <h7 className='fw-bold'>{data?.users}</h7>
            </div>
          </Link>
        </div>
        <div className="col-6 text-center col-md-3  col-lg-3  mt-5">
          <Link href={"/admin/technician"} className='text-decoration-none'>
            <div className="card shadow py-4" style={{ cursor: "pointer", backgroundColor: "#FFE4C4" }}>
              <h7 className='fw-bold'>TOTAL TECHNICIAN</h7>
              <h7 className='fw-bold'>{data?.servicer}</h7>
            </div>
          </Link>
        </div>
        </>  
        :""
        }
      </div>
      
    </div>
  )
}

export default Dashboard