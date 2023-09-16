import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import DashboardHeader from '../../common/DashboardHeader';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const SubscriberDetail = () => {
    const [subscriber,setSubscriber]=useState({});
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
      getSubscriber();
    },[id]);
  
    const getSubscriber=async()=>{
         try{
          let response = await httpCommon.get(`/getSubscriptionBy/${id}`);
          let {data}=response;
          setSubscriber(data);
         }catch(err){
          console.log(err);
         }
    }
 
  return (
    <div> 
        <DashboardHeader pagetitle={ "Subscriber Details "} 
    //      modalbutton={() => {
    //       return <div className="col-auto d-flex w-sm-100">
    //           <Link href={`/admin/subscriber/Editsubscriber/${subscriber?._id}`} className='text-decoration-none'>
    //               <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <EditIcon className='me-1' fontSize='medium'/>Edit subscriber</button>
    //           </Link>
    //       </div>
    //   }}
       />
        <div className='row w-100'>
            <div className='col-12 ms-4'>
            <div className='d-flex mt-3 row'>
              <div className='col-3'>Subscriber Name : </div><div className='col-9'>{subscriber?.name}</div>
              </div>
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Contact : </div><div className='col-9'>{subscriber?.contact}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Email : </div><div className='col-9'>{subscriber?.email}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Location : </div><div className='col-9'>{subscriber?.location}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Unit : </div><div className='col-9'>{subscriber?.unit}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>homeSize : </div><div className='col-9'>{subscriber?.homeSize}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Plan Name : </div><div className='col-9'>{subscriber?.planName}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Real Estate Agent Name : </div><div className='col-9'>{subscriber?.realEstateAgentName}</div>
              </div> 
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Price : </div><div className='col-9'>{subscriber?.planPrice}</div>
              </div> 
              <div className='d-flex mt-3 row'> <div className='col-3'>CreatedAT : </div><div className='col-9'>{ new Date(subscriber?.createdAt).toLocaleString()}</div>  </div> 
              <div className='d-flex mt-3 row'> <div className='col-3'>UpdatedAt : </div><div className='col-9'>{ new Date(subscriber?.updatedAt).toLocaleString()}</div>  </div> 
            </div>
        </div>
    </div>
  )
}

export default SubscriberDetail