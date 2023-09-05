import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import DashboardHeader from '../../common/DashboardHeader';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const TechnicianDetail = () => {
    const [technician, setTechnician] = useState({});
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        getTechnician();
    }, [id]);

    const getTechnician = async () => {
        try {
            let response = await httpCommon.get(`/getServicerBy/${id}`);
            let { data } = response;
            setTechnician(data);
        } catch (err) {
            console.log(err);
        }
    }
    console.log("fjhh",technician);
    return (
        <div>

            <DashboardHeader pagetitle={"Technician Details "}
                modalbutton={() => {
                    return <div className="col-auto d-flex w-sm-100">
                        <Link href={`/admin/technician/Edittechnician/${technician?._id}`} className='text-decoration-none'>
                            <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <EditIcon className='me-1' fontSize='medium' />Edit Technician</button>
                        </Link>
                    </div>
                }} />
            <div className='row w-100'>
                <div className='col-12 ms-4'>
                    <div className='d-flex mt-3 row'>
                        <div className='col-3'>Technician Name : </div><div className='col-9'>{technician?.servicerName}</div>
                    </div>
                    <div className='d-flex mt-3 row' >
                        <div className='col-3'>Contact : </div><div className='col-9'>{technician?.businessPhone}</div>
                    </div>
                    <div className='d-flex mt-3 row' >
                        <div className='col-3'>Business Address : </div><div className='col-9'>{technician?.businessAddress}</div>
                    </div>
                    <div className='d-flex mt-3 row' >
                        <div className='col-3'>Servicer Website : </div><div className='col-9'>{technician?.servicerWebsite}</div>
                    </div>
                    <div className='d-flex mt-3 row' >
                        <div className='col-3'>Contact : </div><div className='col-9'>{technician?.businessPhone}</div>
                    </div>
                    <div className='  mt-3 row  '>
                        <div className='col-3'>Year Of Start Busniess : </div><div className='col-9'>{technician?.yearOfStartBusniess}</div>
                        <div className='col-3'>Better Business Bureau ReviewPage : </div><div className='col-9'>{technician?.betterBusinessBureauReviewPage}</div>
                        <div className='d-flex mt-3 row'> <div className='col-3'>CreatedAT : </div><div className='col-9'>{new Date(technician?.createdAt).toLocaleString()}</div>  </div>
                        <div className='d-flex mt-3 row'> <div className='col-3'>UpdatedAt : </div><div className='col-9'>{new Date(technician?.updatedAt).toLocaleString()}</div>  </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default TechnicianDetail