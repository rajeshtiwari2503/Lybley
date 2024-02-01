import React from 'react'

const PlanOverview = (props) => {
    const [modalShow, setModalShow] = useState(false);
   
   
   
  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <div className='text-center pt-3 rounded' style={{ backgroundColor: "aliceblue" }}>
      <HouseIcon style={{ fontSize: "100px" }} />
      <Modal.Body className='p-4'>
        <div className='fw-bold fs-4'>Lybley is not available in your area yet</div>
        <div className='mt-4'>Please share your contact information and you will be notified when Lybley is available in your area.</div>
        <div className='mt-4'> <button className='btn btn-primary rounded-pill me-3'><small>GET NOTIFIED</small></button><button className='btn btn-secondary rounded-pill' onClick={() => props.setModalShow(false)}><small>CLOSE</small></button></div>

      </Modal.Body>
    </div >
  </Modal >
  )
}

export default PlanOverview


 
     
   