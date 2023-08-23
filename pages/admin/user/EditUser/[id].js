import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import AddUser from '../AddUser';
import httpCommon from '@/http-common';

const EditUser = () => {
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
          <AddUser edit={true} id={id} user={user} />
      </div>
    )
  }
  
export default EditUser