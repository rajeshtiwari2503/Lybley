import React, { useEffect, useState } from "react";
import DashboardHeader from "../../common/DashboardHeader";
import httpCommon from "@/http-common";
import { useRouter } from "next/router";

const AddComplaint = () => {
    const router = useRouter();
    const {id}=router.query;

    const [complaint, setComplaint] = useState({
        applianceName: "",
        partName: "",
        description: "",
    })

    const [plan,setPlan]=useState({});

    useEffect(()=>{
       getSubscribed();
    },[id])

    const [loading,setLoading]=useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        setComplaint({ ...complaint, [e.target.name]: e.target.value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const getSubscribed=async()=>{
        try{
           let response=await httpCommon.get(`/getSubscriptionBy/${id}`);
           let {data}=response;
           setPlan(data);
        }catch(err){
            console.log(err);
        }
    }

    const addComplaint = async (body) => {
        try {
            setLoading(true);
            let response = await httpCommon.post("/createComplaint", body);
            let { data } = response;
            router.push("/admin/complaint");
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        let user = localStorage.getItem("admin");
        let user1 = JSON.parse(user);
      
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("applianceName", complaint.applianceName);
        formData.append("partName", complaint.partName);
        formData.append("description", complaint.description);
        formData.append("userId", user1._id);
        formData.append("appliancesDetail",JSON.stringify(plan));
        formData.append("user", JSON.stringify(user1));
        formData.append("planId",id);
      
        addComplaint(formData);
      };
   const appliances=plan?.planDetail?.appliances?.concat(plan?.planDetail?.plus);
   const appliances1=appliances?.filter(a1=>a1?.checked===true);
    return (
        <div>
            <DashboardHeader pagetitle="Add Complaint" />
            <div className='row'>
                <div className='col-6 '>
                    <div className='mt-2 mb-2'>Appliance Name </div>
                    {/* <input type='text' className='form-control' placeholder='Appliance Name' name="applianceName" value={complaint.applianceName} onChange={(e) => handleChange(e)} /> */}
                    {/* <div className='text-danger'> {errors.location?.message}</div> */}
                    <div className="form-group">
                      <select className="form-select" name="applianceName" value={complaint.applianceName} onChange={(e) => handleChange(e)}>
                       <option>Choose Appliance</option>
                      {appliances1?.map(a1=> <option>{a1?.value}</option>)}
                      </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-6  '>
                    <div className='mt-3 mb-2'>Part Name </div>
                    <input type='text' className='form-control' placeholder='Part Name' name="partName" value={complaint.partName} onChange={(e) => handleChange(e)} />
                    {/* <div className='text-danger'> {errors.location?.message}</div> */}
                </div>
            </div>
            <div className="row">
                <div className='col-6  '>
                    <div className='mt-3 mb-2'>Description</div>
                    <input type='text' className='form-control' placeholder='Description' name="description" value={complaint.description} onChange={(e) => handleChange(e)} />
                    {/* <div className='text-danger'> {errors.location?.message}</div> */}
                </div>
            </div>
            <div className="row">
                <div className='col-6  '>
                    <div className='mt-3 mb-2'>Image </div>
                    <input type='file' className='form-control' placeholder='image' onChange={handleFileChange} />
                    {/* <div className='text-danger'> {errors.location?.message}</div> */}
                </div>
            </div>
            <div className='mt-3'>
                <button className='btn btn-primary' disabled={loading} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default AddComplaint;