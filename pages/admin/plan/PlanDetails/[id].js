import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import DashboardHeader from '../../common/DashboardHeader';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const PlanDetail = () => {
    const [plan,setPlan]=useState({});
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
      getPlan();
    },[id]);
  
    const getPlan=async()=>{
         try{
          let response = await httpCommon.get(`/getPlanBy/${id}`);
          let {data}=response;
          setPlan(data);
         }catch(err){
          console.log(err);
         }
    }
 
  return (
    <div> 
        <DashboardHeader pagetitle={ "Plan Details "} 
         modalbutton={() => {
          return <div className="col-auto d-flex w-sm-100">
              <Link href={`/admin/plan/EditPlan/${plan?._id}`} className='text-decoration-none'>
                  <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <EditIcon className='me-1' fontSize='medium'/>Edit Plan</button>
              </Link>
          </div>
      }} />
        <div className='row w-100'>
            <div className='col-12 ms-4'>
            <div className='d-flex mt-3 row'>
              <div className='col-3'>PlanName : </div><div className='col-9'>{plan?.planName}</div>
              </div>
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Price : </div><div className='col-9'>{plan?.price}</div>
              </div>
              <div className='  mt-3 row w-100'> 
              <div className='col-3'>Appliances : </div>
              <div className='col-9'>
                <div className='row w-100'>
                {plan?.appliances?.map((item ,i)=> (<div className='col-6 mb-4 d-flex justify-content-between' key={i}><div>{item?.value} </div><div className={item?.checked===false ?"bg-danger   p-2 text-white" : "bg-success   p-2 text-white"}>{item?.checked===false ? "InActive" : "Active"}</div></div>))}</div>
                </div>
                </div>
              <div className='d-flex mt-3 row w-100'> <div className='col-3'>Plus : </div>
              <div className='col-9'>
              <div className='row w-100'>
                {plan?.plus?.map((item ,i)=> (<div className='col-6 mb-4 d-flex justify-content-between' key={i}><div>{item?.value} </div><div className={item?.checked===false ?"bg-danger   p-2 text-white" : "bg-success   p-2 text-white"}>{item?.checked===false ? "InActive" : "Active"}</div></div>))}</div>
                </div>
                </div>
              <div className='d-flex mt-3 row'> <div className='col-3'>CreatedAT : </div><div className='col-9'>{ new Date(plan?.createdAt).toLocaleString()}</div>  </div> 
              <div className='d-flex mt-3 row'> <div className='col-3'>UpdatedAt : </div><div className='col-9'>{ new Date(plan?.updatedAt).toLocaleString()}</div>  </div> 
            </div>
        </div>
    </div>
  )
}

export default PlanDetail