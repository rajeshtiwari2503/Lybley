import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import AddBlog from '../AddBlog';

const EditBlog = () => {
    const [blog,setBlog]=useState({});
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
        getBlog();
    },[id]);
  
    const getBlog=async()=>{
         try{
          let response = await httpCommon.get(`/getBlogById/${id}`);
          let {data}=response;
          setBlog(data);
         }catch(err){
          console.log(err);
         }
    }

    
    return (
      <div>
          <AddBlog edit={true} id={id} blog={blog} />
      </div>
    )
  }
  
export default EditBlog