import React, { useEffect, useState } from 'react'
import Loader from '../common/Loading'
import DataTable from 'react-data-table-component';
import httpCommon from '@/http-common';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmBox from '../common/ConfirmBox';
import ToastMessage from '../common/ToastMessage';
import DashboardHeader from '../common/DashboardHeader';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Modal from 'react-bootstrap/Modal';

const MySubscribers = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [randomValue, setRandomValue] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmBoxView, setConfirmBoxView] = useState(false);
  const [localUser, setLocalUser] = useState("");
  const [technicians, setTechnician] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [subcription, setSubscription] = useState({});
  const [loading1, setLoading1] = useState(false);
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('admin');
      const user = JSON.parse(data)
      setLocalUser(user);

    }
    getsubscribers()
  }, [randomValue])
  const handleUser = (id) => {
    setUserId(id)
    setConfirmBoxView(true);
  }
  const deletesubscriber = async () => {
    try {
      let response = await httpCommon.deleteData(`/deletesubscriber/${userId}`);
      let { data } = response;
      setConfirmBoxView(false);
      ToastMessage(data);
      setRandomValue(data);

    } catch (err) {
      console.log(err);
    }
  }
  const handlesubscriberEdit = (id) => {
    const findData = data?.find(obj => {
      return obj._id === id
    })
  }
  const columns = () => {

    return [
      {
        name: "SR No.",
        selector: (row) => row.i,
        sortable: true, width: "90px"
      },
      // {
      //   name: "USER ID",
      //   selector: (row) => row?.userId,
      //   cell: row => row?.userId,
      //   sortable: true, width: "150px"
      // },
      {
        name: "USER NAME",
        selector: (row) => row?.name,
        cell: row => row?.name,
        sortable: true, width: "150px"
      },
      {
        name: "CONTACT",
        selector: (row) => row?.contact,
        cell: row => row?.contact,
        sortable: true,
      },
      {
        name: "LOCATION",
        selector: (row) => row?.location,
        cell: row => row?.location,
        sortable: true,
      },
      {
        name: "PLAN NAME",
        selector: (row) => row?.planName,
        sortable: true
      },
      {
        name: " PRICE",
        selector: (row) => row?.planPrice,
        sortable: true
      },
      {
        name: "STATUS",
        selector: (row) => row?.status,
        sortable: true, width: "150px"
      },


      {
        name: " CreatedAt",
        selector: (row) => new Date(row?.createdAt)?.toLocaleDateString(),
        sortable: true,

      },


      {
        name: "ACTION",
        selector: (row) => { },
        cell: (row) => <div className="d-flex align-items-center justify-content-between"  >
          {/* <Link href={`/admin/subscriber/Editsubscriber/${row?._id}`} >
          <EditIcon onClick={() => { handlesubscriberEdit(row?._id) }} style={{ cursor: "pointer" }} color='success' />
          </Link> */}
          <Link href={`/admin/subscriber/SubscriberDetails/${row?._id}`}>
            <VisibilityIcon className='ms-2 me-2' style={{ cursor: "pointer" }} />
          </Link>
          <div>{localUser?.role === "ADMIN" ?
             <button className='btn btn-sm btn-primary'onClick={() => getTechnician(row)}>Verification</button> 
            : row?.status==="DISAPPROVED"?<button disabled className='btn btn-sm btn-danger'>Add Complaint</button>:<Link href={`/admin/complaint/AddComplaint?id=${row?._id}`}> <button className='btn btn-sm btn-success'>Add Complaint</button></Link>
          }
          </div>
          {/* <DeleteIcon onClick={() => { handleUser(row?._id) }} style={{ cursor: "pointer" }} color='error' /> */}
        </div>,
        sortable: true, width: "200px"

      }
    ]
  }

  const getTechnician = async (cmp) => {
    
    setSubscription(cmp);
    try {
      let response = await httpCommon.get("/getAllservicer");
      let { data } = response;
      setLocation(cmp.location)
      setPincode(cmp?.pincode)
      setTechnician(data);
      setPopUp(true);
    } catch (err) {
      console.log(err);

    }
  }
  const assignSubscriberVerification = async (id) => {
    try {
      let technician = technicians.find(f1 => f1?._id === id);
      let obj = { technicianId: id, userId: subcription?.userId, planId: subcription?._id, technicianInfo: technician, userInfo: subcription?.name, planInfo: subcription?.planDetail };
      console.log(obj);
      setLoading1(true);
      let response = await httpCommon.post("/assignSubscriberVerification", obj);
      setPopUp(false);
      setLoading1(false);
      setRandomValue(response.data);
    } catch (err) {
      console.log(err);
      setLoading1(false);
    }
  }
  const getsubscribers = async () => {
    try {
      let user = localStorage.getItem("admin");
      let obj = JSON.parse(user);
      setLoading(true)
      let response = [];
      setLoading(true)
      if (obj?.role === "ADMIN") {
        response = await httpCommon.get("/getAllSubscription");
      } else {
        response = await httpCommon.get(`/getSubscriptionByUserId/${obj?._id}`);
      }
      let { data } = response;
      setData(data?.reverse());
      setLoading(false)

    } catch (err) {
      console.log(err);
      setLoading(false)

    }
  }
  
  const ddd= technicians.filter((t1) => t1?.businessAddress?.toLowerCase()?.includes(location?.toLowerCase()));
 
  let technicians1 = location===(ddd[0]?.businessAddress) || pincode===+(ddd[0]?.businessPincode) ? technicians.filter((t1) => t1?.businessAddress?.toLowerCase()?.includes(location?.toLowerCase()  ))
  : technicians;
  const srData = data?.map((item, i) => ({ ...item, i: i + 1 }))
  return (
    <div>
      <DashboardHeader pagetitle={"Subscribers"}
      // modalbutton={() => {
      //     return <div className="col-auto d-flex w-sm-100">
      //         <Link href={"/admin/subscriber/Addsubscriber"} className='text-decoration-none'>
      //             <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <AddIcon className='me-1' fontSize='large'/>Add subscriber</button>
      //         </Link>
      //     </div>
      // }}
      />
      <div className="row clearfix g-3">
        <div className="col-sm-12">
          {loading ? <div className='d-flex justify-content-center align-items-center' > <Loader /> </div> :
            <div className="card mb-3">
              <div className="card-body">
                <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <DataTable
                        columns={columns()}
                        data={srData}
                        defaultSortField="title"
                        pagination
                        selectableRows={false}
                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                        highlightOnHover={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <ConfirmBox bool={confirmBoxView} setConfirmBoxView={setConfirmBoxView} onSubmit={deletesubscriber} />

      <Modal
        show={popUp}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className='d-flex align-items-center justify-content-between p-3'>
          <div>
            <Modal.Title id="contained-modal-title-vcenter">
                Technician   Verification
            </Modal.Title>
          </div>
          <div className='d-flex align-items-center'>
            <div className='me-2'>Filter by Location:  </div>
            <div className='form-group'> <input type='text' className='form-control' placeholder='Pincode & location' name="location" value={location} onChange={(e) => setLocation(e.target.value)} /></div>
          </div>
          <div onClick={() => setPopUp(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
          </div>
        </div>

        <Modal.Body style={{ overflowY: 'auto', maxHeight: '60vh' }}>
          <div className='row mb-4 fw-bold '>
            <div className='col-3'>Name</div>
            <div className='col-3'>Contact</div>
            <div className='col-3'>Address</div>
          </div>
          {technicians1?.map(t1 =>
            <>
              <div className='row border'>
                <div className='col-3'>{t1?.servicerName}</div>
                <div className='col-3'>{t1?.businessPhone}</div>
                <div className='col-3'>{t1?.businessAddress}</div>
                <div className='col-3 text-end'> <button className='btn btn-primary' disabled={loading1} onClick={() => assignSubscriberVerification(t1?._id)}>Assign</button> </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <button className='btn btn-primary' onClick={() => setPopUp(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MySubscribers