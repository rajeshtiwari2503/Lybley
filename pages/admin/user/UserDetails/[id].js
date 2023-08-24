import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import DashboardHeader from '../../common/DashboardHeader';

const UserDetail = () => {
    const [user,setUser]=useState({});
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
        getUser();
    },[id]);
  
    const getUser=async()=>{
         try{
          let response = await httpCommon.get(`/getUserBy/${id}`);
          let {data}=response;
          setUser(data);
         }catch(err){
          console.log(err);
         }
    }
 
  return (
    <div> 
        <DashboardHeader pagetitle={ "User Details "} />
        <div className='row'>
            <div className='col-12 ms-5'>
            <div className='d-flex mt-3 row'>
              <div className='col-3'>UserName : </div><div className='col-9'>{user?.name}</div>
              </div>
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Email : </div><div className='col-9'>{user?.email}</div>
              </div>
              <div className='d-flex mt-3 row'> <div className='col-3'>Location : </div><div className='col-9'>{user?.location}</div></div>
              <div className='d-flex mt-3 row'> <div className='col-3'>Unit : </div><div className='col-9'>{user?.unit}</div></div>
              <div className='d-flex mt-3 row'> <div className='col-3'>Contact : </div><div className='col-9'>{user?.contact}</div>  </div> 
              <div className='d-flex mt-3 row'> <div className='col-3'>CreatedAT : </div><div className='col-9'>{ new Date(user?.createdAt).toLocaleString()}</div>  </div> 
              <div className='d-flex mt-3 row'> <div className='col-3'>UpdatedAt : </div><div className='col-9'>{ new Date(user?.updatedAt).toLocaleString()}</div>  </div> 
            </div>
        </div>
    </div>
  )
}

export default UserDetail