import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import DashboardHeader from '../common/DashboardHeader';
import httpCommon from '@/http-common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ToastMessage from '../common/ToastMessage';

const AddBlog = (props) => {
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { edit, blog } = props;
    const { id } = router.query;

    const handleRegistration = async (obj) => {
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('title', obj?.title);
        formData.append('description', obj?.description);
        try {
            setLoading(true)
          
            let response = await httpCommon.post("/createBlog", formData)
            let { data } = response

            setLoading(false)
            ToastMessage(data)
            router.push("/admin/blog")
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            // ToastMessage(data)

        }
    }
  const handleImage=(e)=>{
    if(edit){
        editImage(e.target.files[0]);
    }else{
        setSelectedImage(e.target.files[0]);
    }
  }

    const handleEdit = async (obj) => {
        try {
            let response = await httpCommon.patch(`/updateBlog/${props?.id}`, obj);
            let { data } = response;
            setSelectedImage(data?.image)
            router.push(`/admin/blog`);
        } catch (err) {
            console.log(err);
        }
    }

    const editImage = async (img) => {
        try {
            const formData = new FormData();
            formData.append('image', img);
            let response = await httpCommon.patch(`/updateBlogImage/${props?.id}`, formData);
            let { data } = response;
            router.push(`/admin/blog`);
        } catch (err) {
            console.log(err);
        }
    }
    const validationSchema = Yup.object().shape({

        title: Yup.string()
            .required('title is required')
            .min(4, 'title must be at least 4 characters')
            .max(40, 'title must not exceed 40 characters'),
        description: Yup.string()
            .required('description is required')
            .min(10, 'description must be at least 10 characters'),
            
           
    });
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onRegister = data => {
        
        edit ? handleEdit(data) : handleRegistration(data);
    }
    useEffect(() => {
        reset(blog);
    }, [blog, reset]);  
    return (
        <div>
            <DashboardHeader pagetitle={edit ? "Edit Blog" : "Add Blog"} />
            <div className='row'>
                <div className='col-12 '>
                    <input type='text' className='form-control' placeholder='Enter title' defaultValue={edit ? blog?.title : ""} name="title" {...register('title')} />
                    <div className='text-danger'> {errors.title?.message}</div>
                </div>
                <div className='col-12 mt-5'>
                    <textarea  type='text' rows={4} className='form-control' placeholder='description' defaultValue={edit ? blog?.description : ""} name="description" {...register('description')} ></textarea>
                    <div className='text-danger'> {errors.description?.message}</div>
                </div>
                <div className='col-6 mt-5'>
                    <input type='file' className='form-control'  onChange={ handleImage} defaultValue={edit ? blog?.image : ""} name="image"   />
                    {!edit  && selectedImage===null ? <div className='text-danger'>Please Select Image  </div> :""}
                </div>
                {edit ?  <div className='col-6 mt-5'>
                    <img height={200} width={200}  src={blog?.image} alt='image'    />
                    
                </div>
                :""}
                <div className='mt-5'>

                    {!edit ? <button type="submit" disabled={loading} className="btn btn-primary mb-3" onClick={handleSubmit(onRegister)}>{loading ? "Adding..." : "Add Blog"}</button>
                        : <button type="submit" disabled={loading} className="btn btn-primary mb-3" onClick={handleSubmit(onRegister)}>{loading ? "Updating..." : "Update"}</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default AddBlog