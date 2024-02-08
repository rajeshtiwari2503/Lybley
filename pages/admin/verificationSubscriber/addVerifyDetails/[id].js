import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../common/DashboardHeader'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import Loader from '../../common/Loading';


const AddVerificationDetails = () => {
  const router = useRouter();
  const { id } = router.query
  const [edit, setEdit] = useState("")
  const [data1, setData] = useState("")
  const [coverValue, setCoverValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [applianceName, setApplianceName] = useState("")
  const [subcrData, setSubsData] = useState("")
  const [details, setDetails] = useState(false)



  useEffect(() => {
    getVerificationDetails()
    getSubscriptionDetailsById()

  }, [id ,details])

  const getVerificationDetails = async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get(`/getAssignedVerificationBy/${id}`)
      let { data } = response
      setData(data)
      const filterAppliaces = data && data?.planInfo?.appliances?.find((f1) => f1?.checked === true)
      // setCoverValue(filterAppliaces?.value)

      setLoading(false)
    }
    catch (err) {
      console.log(err);
      setLoading(false)
    }

  }
  const getSubscriptionDetailsById = async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get(`/getVerificationDetailsBy/${data1?.userId}`)
      let { data } = response
      setSubsData(data[0])
      setLoading(false)
    }
    catch (err) {
      console.log(err);
      setLoading(false)
    }

  }
  // console.log(subcrData);
  // console.log(data1);


  const filterAppliaces = data1 && data1?.planInfo?.appliances?.filter((f1) => f1?.checked === true)
  const filterPlus = data1 && data1?.planInfo?.plus?.filter((f1) => f1?.checked === true)
  const filterData = [...filterAppliaces, ...filterPlus]

  const applicesForm = filterData?.filter((f) => f?.value === coverValue)


  const applicesDetails = subcrData && subcrData?.verificationDetails?.find((f) => f?.appliancesName === coverValue)



  const [verificationDetails, setVerificationDetails] = useState({
    description: "",
    applianceName: "",
    images: []
  })
  const [verificationImages, setVerificationImages] = useState([])



  const handleChange = (e) => {
    const { currentTarget: input } = e;
    let appliances1 = { ...verificationDetails };

    appliances1[input.name] = input.value;
    setApplianceName(coverValue)

    setVerificationDetails(appliances1);
  }
  const handleFileChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      if (e.target.name === "file") {
        // setImage(e.target.files[0]);
        handleImage(e.target.files[0])
        setVerificationImages(e.target.files[0]);

      }
    }
  };
  const handleImage = (file) => {
    let appliances1 = { ...verificationDetails };
    appliances1?.images?.push(file);
    setVerificationDetails(appliances1);
    // setSpareParts({...sparePart,images:file});
  }
  const AddVerificationDetails = async (techId) => {
    try {
      const formData = new FormData();
      // formData.append('verificationDetails',verificationDetails1  );
      formData.append("verificationDetails", verificationDetails);
      formData.append("description", verificationDetails?.description);
      formData.append("appliancesName", coverValue);

      for (let x = 0; x < verificationDetails?.images?.length; x++) {
        formData.append("images", verificationDetails?.images[x]);
      }

      formData.append("technicianId", techId);
      formData.append("planId", data1?.planId);
      formData.append("userId", data1?.userId);

      setLoading(true);
      let response = await httpCommon.post("/addVerificationDetails", formData);
      let { data } = response;
      setLoading(false);

      setVerificationDetails({ applianceName: "", description: "", images: [], });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const handleVerify = async (userId,planId) => {
    try {
      setLoading1(true);

      let response = await httpCommon.post(`/updateVerificationDetails`, { userId: userId ,planId:planId})
      let { data } = response
      setLoading1(false);
    }
    catch (err) {
      console.log(err);
      setLoading1(false);

    }
  }
 
  const handleCover=(value)=>{
    setCoverValue(value)
    setDetails(true)
  }
  return (
    <>
      {loading ? <div className='d-flex justify-content-center align-items-center' > <Loader /> </div> :
        <div>


          <div className='row  '>
            <div className='col-12 col-md-6 '>
              <div className='row'>
                <DashboardHeader pagetitle={"Subscription Details"} />
                <div className='col-12 col-md-6 '>
                  <div className='d-flex justify-content-between  p-2'>
                    <div className='fw-bold'>User Name</div>
                    <div>{data1?.userInfo}</div>
                  </div>
                </div>
                <div className='col-12 col-md-6  '>
                  <div className='d-flex justify-content-between  p-2'>
                    <div className='fw-bold'>Plan Name</div>
                    <div>{data1?.planInfo?.planName}</div>
                  </div>
                </div>
                <div className='col-12 col-md-6  '>
                  <div className='d-flex justify-content-between  p-2'>
                    <div className='fw-bold'>Technician Name</div>
                    <div>{data1?.technicianInfo?.servicerName}</div>
                  </div>
                </div>
                <div className='col-12 col-md-6  '>
                  <div className='d-flex justify-content-between p-2'>
                    <div className='fw-bold'>Subscription Date</div>
                    <div>{new Date(data1?.createdAt)?.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 '>

              <DashboardHeader pagetitle={"Appliances Cover in Plan"} />
              <div className='row'>
                {filterData?.map((item, i) =>
                  <div key={i} className='col-12 col-md-4 mb-3'>
                    <div style={{ cursor: "pointer" }}
                      className={`d-flex justify-content-center p-2 rounded-pill border ${coverValue === item?.value ? "bg-black text-white active" : ""}`}
                    >
                      <div className='fw-bold' onClick={() =>handleCover(item?.value)} >{item?.value}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>


          {applicesDetails?.appliancesName === coverValue ?

            <div className='row mt-5'>
              <DashboardHeader pagetitle={"Add Subscribed Plan  Verify Details"} />

              <div className='col-12 col-md-2'>
                <div className=' fw-bold fs-5'>   {applicesDetails?.appliancesName}</div>
                <div className='mt-5'>
                <div className=' fw-bold text-primary' >  Description</div>
                <div >   {applicesDetails?.description}</div>
              </div>
              </div>
              <div className='col-12 col-md-9   '>
                <div className='row'>
                  {applicesDetails?.images?.map((item, i) =>
                    <div key={i} className='col-12 col-md-4'>
                      <div className=' mt-3 fw-bold mb-3 text-primary'>Product Image</div>
                      <div style={{ width: "200px", height: "200px" }} className='mb-5'>
                        <img className='card-img-top' src={item} alt='image' /> </div>
                    </div>

                  )}
                </div>
              </div>
              <div className='col-12 col-md-9  '>
                <div className='d-flex justify-content-center mb-5'>
                  <button className='btn btn-success' disabled={loading1} onClick={() => handleVerify(data1?.userId,data1?.planId)} >Verify</button>
                </div>
              </div>
            </div>

            :
            <div className='row mt-5'>
              <DashboardHeader pagetitle={"Add Subscribed Plan  Verify Details"} />
              {applicesForm?.map((item, i) =>
                <div key={i} className='col-12   '>
                  <div className='row align-items-center '>
                    <div className='col-12 col-md-2'>
                      <div className=' fw-bold'>{item?.value}</div>
                    </div>
                    <div className='col-12 col-md-9   '>
                      <div className='row'>
                        <div className='col-12 col-md-4'>
                          <div className=' mt-3 fw-bold mb-3 text-primary'>Product Image</div>
                          <input type="file" name="file" onChange={(e) => handleFileChange(e)} />
                        </div>
                        <div className='col-12 col-md-4'>
                          <div className=' mt-3 fw-bold mb-3 text-primary'>Product Bill</div>
                          <input type="file" name="file" onChange={(e) => handleFileChange(e)} />
                        </div>
                        <div className='col-12 col-md-4'>
                          <div className=' mt-3 fw-bold mb-3 text-primary'>Product EMI</div>
                          <input type="file" name="file" onChange={(e) => handleFileChange(e)} />
                        </div>
                        <div className='col-12  '>
                          <div className='mb-4 '>
                            <div className=' mt-3 fw-bold mb-1'>Description</div>
                            <textarea className='w-100' type="text" name="description" onChange={handleChange} ></textarea>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='mt-3 d-flex justify-content-center mb-5'>
                            <button className='btn btn-primary' disabled={loading} onClick={() => AddVerificationDetails(data1?.technicianId)} >Submit</button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

            </div>


          }
        </div>
      }
    </>
  )
}

export default AddVerificationDetails