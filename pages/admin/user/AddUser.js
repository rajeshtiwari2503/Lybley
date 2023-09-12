import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import DashboardHeader from '../common/DashboardHeader';
import httpCommon from '@/http-common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ToastMessage from '../common/ToastMessage';

const AddUser = (props) => {
    
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { edit, user } = props;
    const { id } = router.query;

    const handleRegistration = async (obj) => {
        try {
            setLoading(true)
            let regData = { location: data?.location, unit: +data?.unit, name: data?.name, email: data?.email, contact: +data?.contact, }
            let response = await httpCommon.post("/registration", regData)
            let { data } = response

            setLoading(false)
            ToastMessage(data)
            router.push("/admin/user")
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            // ToastMessage(data)

        }
    }

    const handleEdit = async (obj) => {
        try {
            let response = await httpCommon.patch(`/editUserBy/${props?.id}`, obj);
            let { data } = response;
            router.push(`/admin/user`);
        } catch (err) {
            console.log(err);
        }
    }
    const validationSchema = Yup.object().shape({

        location: Yup.string()
            .required('location is required')
            .min(4, 'location must be at least 4 characters')
            .max(40, 'location must not exceed 40 characters'),
        name: Yup.string()
            .required('firstName is required')
            .min(3, 'firstName must be at least 3 characters')
            .max(40, 'firstName must not exceed 40 characters'),
    
        unit: Yup.string().required("unit number is required").min(1, "Min 1 digit is required").max(10, "Max 10 digit is required"),

        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        contact: Yup.string().required("Mobile number is required").min(10, "Min 10 digit is required").max(10, "Max 10 digit is required"),


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
        reset(user);
    }, [user, reset]);  
    return (
        <div>
            <DashboardHeader pagetitle={edit ? "Edit User" : "Add User"} />
            <div className='row'>
                <div className='col-8 col-md-8 col-lg-8 '>
                    <input type='text' className='form-control' placeholder='Enter Location' defaultValue={edit ? user?.location : ""} name="location" {...register('location')} />
                    <div className='text-danger'> {errors.location?.message}</div>
                </div>
                <div className='col-4 col-md-4 col-lg-4 '>
                    <input type='number' className='form-control' placeholder='Unit' defaultValue={edit ? user?.unit : ""} name="unit" {...register('unit')} />
                    <div className='text-danger'> {errors.unit?.message}</div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='text' className='form-control' placeholder='Name' defaultValue={edit ? user?.name : ""} name="name"  {...register('name')} />
                    <div className='text-danger'> {errors.name?.message}</div>
                </div>
                
                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='email' className='form-control' defaultValue={edit ? user?.email : ""} placeholder=' Enter Email address' name="email"{...register('email')} />
                    <div className='text-danger'> {errors.email?.message}</div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <input type='number' className='form-control' defaultValue={edit ? user?.contact : ""} placeholder='Enter Mobile Number' name="contact" {...register('contact')} />
                    <div className='text-danger'> {errors.contact?.message}</div>
                </div>
                <div className='mt-5'>

                    {!edit ? <button type="submit" disabled={loading} className="btn btn-primary mb-3" onClick={handleSubmit(onRegister)}>{loading ? "Adding..." : "Add"}</button>
                        : <button type="submit" disabled={loading} className="btn btn-primary mb-3" onClick={handleSubmit(onRegister)}>{loading ? "Updating..." : "Update"}</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default AddUser