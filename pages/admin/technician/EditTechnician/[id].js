import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import AddTechnician from '../AddTechnician';

const EditTechnician = () => {
    const [technician,setTechnician]=useState({});
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
      getTechnician();
    },[id]);
  
    const getTechnician=async()=>{
         try{
          let response = await httpCommon.get(`/getPlanBy/${id}`);
          let {data}=response;
          setTechnician(data);
         }catch(err){
          console.log(err);
         }
    }
    return (
      <div>
          <AddTechnician edit={true} id={id} plan={technician} />
      </div>
    )
  }
  
export default EditTechnician