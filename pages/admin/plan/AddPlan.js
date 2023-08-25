import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import DashboardHeader from '../common/DashboardHeader';
import httpCommon from '@/http-common';

const AddPlan = (props) => {
  const { edit, plan } = props;

  const router = useRouter();
  const { id } = router.query;
  // useEffect(()=>{
  //   getBrand();
  // },[id]);

  // const getBrand=async()=>{
  //      try{
  //       let response = await httpCommon.get(`/getUserBy/${id}`);
  //       let {data}=response;
  //       setPlan(data);
  //      }catch(err){
  //       console.log(err);
  //      }
  // }
  const [appliances, setAppliances] = useState([]);
  const [plus, setPlus] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  
  const addFormField = () => {
    setAppliances([...appliances, {  value: '', checked: false }]);
  };
  const handleFieldChange = (index, event) => {
    const updatedFormData = [...appliances];
    updatedFormData[index].value = event.target.value;
    setAppliances(updatedFormData);
  };
  const removeFormField = (index) => {
    const updatedFormData = [...appliances];
    updatedFormData.splice(index, 1);
    setAppliances(updatedFormData);
  };

  const handleCheckboxChange = (index) => {
    const updatedFormData = [...appliances];
    updatedFormData[index].checked = !updatedFormData[index].checked;
    setAppliances(updatedFormData);
  };
  const addFormField1 = () => {
    setPlus([...plus, {   value: '', checked: false }]);
  };
  const handleFieldChange1 = (index, event) => {
    const updatedFormData = [...plus];
    updatedFormData[index].value = event.target.value;
    setPlus(updatedFormData);
  };
  const removeFormField1 = (index) => {
    const updatedFormData = [...plus];
    updatedFormData.splice(index, 1);
    setPlus(updatedFormData);
  };

  const handleCheckboxChange1 = (index) => {
    const updatedFormData = [...plus];
    updatedFormData[index].checked = !updatedFormData[index].checked;
    setPlus(updatedFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlan();
    // Process and submit the form data, which is stored in 'formData'
  };
  const addPlan=async()=>{
    try{
       let response=await httpCommon.post("/addPlan",{planName:name,price:+price,appliances:appliances,plus:plus});
       let {data}=response;
       router.push("/admin/plan");
    }catch(err){
        console.log(err);
    }
  }
  return (
    <div>
      <DashboardHeader pagetitle={edit ? "Edit Plan" : "Add Plan"} />
      <div className='row'>
        <div className='col-6  '>
          <div className='mt-2 mb-2'>Plan Name </div>
          <input type='text' className='form-control' placeholder='Plan Name' name="name" value={name} onChange={(e)=>setName(e.currentTarget.value)} />
          {/* <div className='text-danger'> {errors.location?.message}</div> */}
        </div>
        <div className='col-6  '></div>
        <div className='col-6  '>
          <div className='mt-2 mb-2'>Plan Price </div>
          <input type='number' className='form-control' placeholder='Plan Price' name="price" value={price} onChange={(e)=>setPrice(e.currentTarget.value)} />
          {/* <div className='text-danger'> {errors.location?.message}</div> */}
        </div>
      </div>
      <div className='  col-md-6 col-lg-6s '>
        <div className='mt-3 mb-2'>Appliances </div>
        <div>
          <div  >
            {appliances?.map((field, index) => (
              <div className='d-flex mb-3'>
                <div key={index}>
                  <input
                    className='form-control'
                    type="text"
                    name={`field-${index}`}
                    value={field.value}
                    onChange={(e) => handleFieldChange(index, e)}
                  />

                </div>
                <div className='ms-4 align-items-center d-flex'>
                  <input
                    type="checkbox"
                    checked={field.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div className='ms-3'>Active</div>
                </div>
                <button className='btn btn-danger ms-3' onClick={() => removeFormField(index)}>Remove</button>
              </div>
            ))}
            <div>
            </div>
          </div>
          <button className='btn btn-success  mt-3' onClick={addFormField}>Add Appliances</button>
        </div>
        <div className='mt-5 mb-2'>Plus </div>
        <div>
          <div  >
            {plus?.map((field, index) => (
              <div className='d-flex mb-3'>
                <div key={index}>
                  <input
                    className='form-control'
                    type="text"
                    name={`field-${index}`}
                    value={field.value}
                    onChange={(e) => handleFieldChange1(index, e)}
                  />

                </div>
                <div className='ms-4 align-items-center d-flex'>
                  <input
                    type="checkbox"
                    checked={field.checked}
                    onChange={() => handleCheckboxChange1(index)}
                  />
                  <div className='ms-3'>Active</div>
                </div>
                <button className='btn btn-danger ms-3' onClick={() => removeFormField1(index)}>Remove</button>
              </div>
            ))}
            <div>
            </div>
          </div>
          <button className='btn btn-success  mt-3' onClick={addFormField1}>Add Plus</button>
        </div>
        <div className='d-flex justify-content-end'>
        <button className='btn btn-primary  ' onClick={handleSubmit}>Submit</button>
        </div>
      </div>


    </div>
  )
}

export default AddPlan