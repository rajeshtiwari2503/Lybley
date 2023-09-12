import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import AddPlan from '../AddPlan';
import httpCommon from '@/http-common';

const EditPlan = () => {
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
          <AddPlan edit={true} id={id} setPlan={setPlan} plan={plan} />
      </div>
    )
  }
  
export default EditPlan