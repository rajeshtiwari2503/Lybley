import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../common/DashboardHeader'
import { useRouter } from 'next/router';
import httpCommon from '@/http-common';
import Loader from '../../common/Loading';


const AddVerificationDetails = () => {
  const router = useRouter();
  const { id } = router.query
  const [edit, setEdit] = useState("")
  const [data, setData] = useState("")
  const [coverValue, setCoverValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [applianceName,setApplianceName]=useState("")
 


  useEffect(() => {
    getVerificationDetails()
  }, [id])

  const getVerificationDetails = async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get(`/getAssignedVerificationBy/${id}`)
      let { data } = response
      setData(data)
      const filterAppliaces = data && data?.planInfo?.appliances?.find((f1) => f1?.checked === true)
      setCoverValue(filterAppliaces?.value)

      setLoading(false)
    }
    catch (err) {
      console.log(err);
      setLoading(false)
    }

  }

  const filterAppliaces = data && data?.planInfo?.appliances?.filter((f1) => f1?.checked === true)
  const filterPlus = data && data?.planInfo?.plus?.filter((f1) => f1?.checked === true)
  const filterData = [...filterAppliaces, ...filterPlus]

  const applicesForm = filterData?.filter((f) => f?.value === coverValue)

  const addSparePart=async (techId)=>{
    try{
        const formData=new FormData();
        formData.append("verificationDetails",verificationDetails);
 
        // for(let x=0; x<verificationDetails?.images?.length; x++){
        //     formData.append("images",verificationDetails?.images[x]);
        // }
        formData.append("technicianId",techId);
        
        setLoading(true);
        let response=await httpCommon.post("/addSparePart",formData);
        let {data}=response;
        setLoading(false);
       
        setVerificationDetails({ applianceName:"", description:"", images:[],});
    }catch(err){
        console.log(err);
        setLoading(false);
    }
}


  const [verificationDetails, setVerificationDetails] = useState({
    description:"",
    applianceName: null,
    images:[]
  })
  const [verificationImages,setVerificationImages]=useState([])
  
 

  const handleChange=(e)=>{
    const {currentTarget:input}=e;
    let appliances1={...verificationDetails};
    setApplianceName(coverValue)
    appliances1[input.name]=input.value;
    appliances1?.applianceName?.push(coverValue);

    // const updatedErrors = { ...errors };
// if (updatedErrors[input.name]) {
//   delete updatedErrors[input.name];
// }
    // setErrors(updatedErrors);
    setVerificationImages(appliances1);
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
const handleImage=(file)=>{
     let appliances1={...verificationDetails};
     appliances1?.images?.push(file);
     setVerificationDetails(appliances1);
   // setSpareParts({...sparePart,images:file});
}
console.log("djg",applianceName);
console.log(verificationDetails); 
console.log(verificationImages); 
console.log(data); 

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
                    <div>{data?.userInfo}</div>
                  </div>
                </div>
                <div className='col-12 col-md-6  '>
                  <div className='d-flex justify-content-between  p-2'>
                    <div className='fw-bold'>Plan Name</div>
                    <div>{data?.planInfo?.planName}</div>
                  </div>
                </div>
                <div className='col-12 col-md-6  '>
                  <div className='d-flex justify-content-between  p-2'>
                    <div className='fw-bold'>Technician Name</div>
                    <div>{data?.technicianInfo?.servicerName}</div>
                  </div>
                </div>
                <div className='col-12 col-md-6  '>
                  <div className='d-flex justify-content-between p-2'>
                    <div className='fw-bold'>Subscription Date</div>
                    <div>{new Date(data?.createdAt)?.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 '>

              <DashboardHeader pagetitle={"Appliances Cover in Plan"} />
              <div className='row'>
                {filterData?.map((item, i) =>
                  <div key={i} className='col-12 col-md-4 mb-3'>
                    <div style={{cursor:"pointer"}}
                      className={`d-flex justify-content-center p-2 rounded-pill border ${coverValue === item?.value ? "bg-black text-white active" : ""}`}
                    >
                      <div className='fw-bold' onClick={() => setCoverValue(item?.value)}>{item?.value}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

      

          <div className='row mt-5'>
          <DashboardHeader pagetitle={  "Add Subscribed Plan  Verify Details"} />
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
                        <input type="file" name="file" onChange={(e) => handleFileChange(e)}/>
                      </div>
                      <div className='col-12  '>
                        <div className='mb-4 '>
                          <div className=' mt-3 fw-bold mb-1'>Description</div>
                          <textarea className='w-100' type="text" name="description" onChange={handleChange} ></textarea>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='mt-3 d-flex justify-content-center mb-5'>
                          <button className='btn btn-primary' disabled={loading} onClick={()=>addSparePart(data?.technicianId)} >Submit</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      }
    </>
  )
}

export default AddVerificationDetails