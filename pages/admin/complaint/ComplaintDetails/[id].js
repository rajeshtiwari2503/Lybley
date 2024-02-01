import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import DashboardHeader from '../../common/DashboardHeader';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const ComplaintDetail = () => {
    const [complaint, setComplaint] = useState({});
    const [subscriber, setSubscriber] = useState({});

    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        getComplaint();
    }, [id]);

    const getComplaint = async () => {
        try {
            let response = await httpCommon.get(`/getComplaintBy/${id}`);
            let { data } = response;

            // getSubscriber(data?.userId);
            setComplaint(data);
        } catch (err) {
            console.log(err);
        }
    }
    
   

    return (
        <>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <DashboardHeader pagetitle={"Complaint Details "}
                    //      modalbutton={() => {
                    //       return <div className="col-auto d-flex w-sm-100">
                    //           <Link href={`/admin/complaint/Editcomplaint/${complaint?._id}`} className='text-decoration-none'>
                    //               <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <EditIcon className='me-1' fontSize='medium'/>Edit complaint</button>
                    //           </Link>
                    //       </div>
                    //   }}
                    />
                    <div className='row w-100 mb-5'>
                        <div className='col-12 ms-4'>
                            <div className='d-flex mt-3  row'>
                                <div className='col-4'>Appliances Name : </div><div className='col-8'>{complaint?.applianceName}</div>
                            </div>
                            <div className='d-flex mt-3 row' >
                                <div className='col-4'>Part Name : </div><div className='col-8'>{complaint?.partName}</div>
                            </div>
                            <div className='d-flex mt-3 row' >
                                <div className='col-4'>Part Description : </div><div className='col-8'>{complaint?.description}</div>
                            </div>
                            <div className='d-flex mt-3 row' >
                                <div className='col-4'>Part Image : </div><div className='col-8'><img className='rounded' src={complaint?.image} alt="Image" width="80" height="80" /></div>
                            </div>
                            <div className='d-flex mt-3 row'> <div className='col-4'>CreatedAt : </div><div className='col-8'>{new Date(complaint?.createdAt).toLocaleString()}</div>  </div>
                            <div className='d-flex mt-3 row'> <div className='col-4'>UpdatedAt : </div><div className='col-8'>{new Date(complaint?.updatedAt).toLocaleString()}</div>  </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <DashboardHeader pagetitle={"Appliances Cover  "} />
                    <div className='row w-100 mb-5'>
                        <div className='col-12 ms-4'>
                            <div className='d-flex mt-3  row'>
                                {complaint?.appliancesDetail?.planDetail?.appliances?.filter((f)=>f?.checked===true )?.map((item, i) =>
                                    <div key={i} className='col-12 col-md-6'>
                                        <div className='p-2 bg-success m-1 text-white text-center'>{item?.value}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <DashboardHeader pagetitle={"User Details "} />
                    <div className='row w-100 mb-5'>
                        <div className='col-12 ms-4'>
                            <div className='d-flex mt-3  row'>
                                <div className='col-4'>Plan Name : </div><div className='col-8 fw-bold'>{complaint?.appliancesDetail?.planName}</div>
                            </div>
                            <div className='d-flex mt-3  row'>
                                <div className='col-4'>User Name : </div><div className='col-8'>{complaint?.appliancesDetail?.name}</div>
                            </div>
                            <div className='d-flex mt-3 row' >
                                <div className='col-4'>Contact No. : </div><div className='col-8'>{complaint?.appliancesDetail?.contact}</div>
                            </div>
                            <div className='d-flex mt-3 row' >
                                <div className='col-4'>Address : </div><div className='col-8'>{complaint?.appliancesDetail?.location}</div>
                            </div>
                            <div className='d-flex mt-3 row' >
                                <div className='col-4'>Email : </div><div className='col-8'>{complaint?.appliancesDetail?.email}</div>
                            </div>
                            <div className='d-flex mt-3 row'> <div className='col-4'>CreatedAt : </div><div className='col-8'>{new Date(complaint?.appliancesDetail?.createdAt).toLocaleString()}</div>  </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComplaintDetail