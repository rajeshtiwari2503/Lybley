import React,{useState,useEffect} from 'react'
import {   useRouter } from 'next/router';
import httpCommon from '@/http-common';
import DashboardHeader from '../../common/DashboardHeader';

const BlogDetail = () => {
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
        <DashboardHeader pagetitle={ "Blog Details "} />
        <div className='row'>
            <div className='col-12  '>
            <div className='d-flex mt-3 row'>
              <div className='col-3'>Blog Title : </div><div className='col-9'>{blog?.title}</div>
              </div>
              <div className='d-flex mt-3 row' >
              <div className='col-3'>Description : </div>
              <div className='col-9'>{blog?.description}</div>
              </div>
              <div className='d-flex mt-3 row'> 
              <div className='col-3'>Blog Image : </div>
              <div className='col-9'>
                <img className=' ' width={200} height={200} alt={blog?.title} src={blog?.image} />
                </div>
                </div>
 
              <div className='d-flex mt-3 row'> <div className='col-3'>CreatedAT : </div><div className='col-9'>{ new Date(blog?.createdAt).toLocaleString()}</div>  </div> 
              <div className='d-flex mt-3 row'> <div className='col-3'>UpdatedAt : </div><div className='col-9'>{ new Date(blog?.updatedAt).toLocaleString()}</div>  </div> 
            </div>
        </div>
    </div>
  )
}

export default BlogDetail