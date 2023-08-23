import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';

const AddPlan = () => {
    const [plan,setPlan]=useState({});
    const router=useRouter();
    const {id}=router.query;
    // useEffect(()=>{
    //   getBrand();
    // },[id]);
  
    // const getBrand=async()=>{
    //      try{
    //       let response = await httpCommon.get(`/getUserBy/${id}`);
    //       let {data}=response;
    //       setPlan(data);
    //      }catch(err){
    //       console.log(err);
    //      }
    // }
    return (
      <div>
          <div>Add Plan</div>
      </div>
    )
  }
  
export default AddPlan