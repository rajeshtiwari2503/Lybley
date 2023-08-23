import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import AddPlan from '../AddPlan';

const EditPlan = () => {
    const [plan,setPlan]=useState({});
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
      getBrand();
    },[id]);
  
    const getBrand=async()=>{
         try{
          let response = await httpCommon.get(`/getUserBy/${id}`);
          let {data}=response;
          setPlan(data);
         }catch(err){
          console.log(err);
         }
    }
    return (
      <div>
          <AddPlan edit={true} id={id} plan={plan} />
      </div>
    )
  }
  
export default EditPlan