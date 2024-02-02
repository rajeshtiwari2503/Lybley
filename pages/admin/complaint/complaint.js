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


const MyComplaints = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [randomValue, setRandomValue] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmBoxView, setConfirmBoxView] = useState(false);
  const [localUser, setLocalUser] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [technicians, setTechnician] = useState([]);
  const [complaint, setComplaint] = useState({});
  const [loading1, setLoading1] = useState(false);
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('admin');
      const user = JSON.parse(data)
      setLocalUser(user);

    }
    getPlans()
  }, [randomValue])
  const handleUser = (id) => {
    setUserId(id)
    setConfirmBoxView(true);
  }
  const deletePlan = async () => {
    try {
      let response = await httpCommon.deleteData(`/deletePlan/${userId}`);
      let { data } = response;
      setConfirmBoxView(false);
      ToastMessage(data);
      setRandomValue(data);

    } catch (err) {
      console.log(err);
    }
  }

  const handlePlanEdit = (id) => {
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

      {
        name: "APPLIANCES NAME",
        selector: (row) => row?.applianceName,
        cell: (row) => (row?.technicianId === localUser?._id ? row?.complaintInfo?.applianceName : row?.applianceName),
        // cell: row => row?.applianceName,
        sortable: true,
      },
      {
        name: "PART NAME ",
        selector: (row) => row?.partName,
        cell: (row) => (row?.technicianId === localUser?._id ? row?.complaintInfo?.partName : row?.partName),
        sortable: true
      },

      {
        name: "DESCRIPTION",
        selector: (row) => row?.description,
        cell: (row) => (row?.technicianId === localUser?._id ? row?.complaintInfo?.description : row?.description),

        sortable: true,
      },

      {
        name: "PART IMAGE",
        cell: (row) => <img src={(row?.technicianId === localUser?._id ? row?.complaintInfo?.image : row?.image)} className='m-2' alt="Image" width="50" height="50" />,
        sortable: true,
      },
      {
        name: "STATUS",
        selector: (row) => row?.status,
        cell: (row) => (row?.technicianId === localUser?._id ? row?.complaintInfo?.status : row?.status),

        sortable: true,
      },

      {
        name: "CREATEDAT",
        selector: (row) => new Date(row?.createdAt)?.toLocaleDateString(),
        sortable: true,

      },
      {
        name: "LOCATION",
        selector: (row) => row?.user?.location,
        cell: (row) => (row?.technicianId === localUser?._id ? row?.complaintInfo?.user?.location : row?.appliancesDetail?.location),

        sortable: true,

      },


      {
        name: "ACTION",
        selector: (row) => { },
        cell: (row) => <div className="d-flex justify-content-between align-items-center"  >
          {/* <Link href={`/admin/plan/EditPlan/${row?._id}`} >
          <EditIcon onClick={() => { handlePlanEdit(row?._id) }} style={{ cursor: "pointer" }} color='success' />
          </Link> */}
          {localUser?.role === "ADMIN" && (<div>
            {row?.status === "PENDING" ? <button className='btn btn-success ' onClick={() => getTechnician(row)}>Assign</button> : <button disabled={true} className='btn btn-danger '>Assigned</button>}
          </div>)}
          {localUser?.role === "TECHNICIAN" && (<div>
            <button className='btn btn-danger' disabled={row?.status === "CLOSE" ? true : false} onClick={() => closeComplaint(row?._id, row?.complaintId)}>{row?.status === "CLOSE" ? "Closed" : "Close"}</button>
          </div>)
          }
          <Link href={`/admin/complaint/ComplaintDetails/${localUser?.role === "TECHNICIAN" ? row?.complaintId : row?._id}`}>
            <VisibilityIcon className='ms-2 me-2' style={{ cursor: "pointer" }} />
          </Link>
          {/* <DeleteIcon onClick={() => { handleUser(row?._id) }} style={{ cursor: "pointer" }} color='error' /> */}
        </div>,
        sortable: true, width: "170px"

      }
    ]
  }


  const closeComplaint = async (assign, complaint) => {
    try {
      setLoading(true);
      let response = await httpCommon.post("/updateAssignComplaint", { assignId: assign, complaintId: complaint });
      let { data } = response;
      setLoading(false)
      setRandomValue(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }


  const getTechnician = async (cmp) => {
    setComplaint(cmp);
    try {
      let response = await httpCommon.get("/getAllservicer");
      let { data } = response;
      setLocation(cmp?.appliancesDetail?.location)
      setPincode(cmp?.user?.pincode)
      setTechnician(data);
      setPopUp(true);
    } catch (err) {
      console.log(err);

    }
  }

  const assignComplaint = async (id) => {
    try {
      let technician = technicians.find(f1 => f1?._id === id);
      let obj = { technicianId: id, userId: complaint?.userId, complaintId: complaint?._id, technicianInfo: technician, userInfo: complaint?.user, complaintInfo: complaint };
      setLoading1(true);
      let response = await httpCommon.post("/assignComplaint", obj);
      setPopUp(false);
      setLoading1(false);
      setRandomValue(response.data);
    } catch (err) {
      console.log(err);
      setLoading1(false);
    }
  }

  const getPlans = async () => {
    try {
      let user = localStorage.getItem("admin");
      let obj = JSON.parse(user);
      setLoading(true)
      let response = [];
      if (obj?.role === "ADMIN") {
        response = await httpCommon.get("/getAllComplaint");
      } else if (obj?.role === "USER") {
        response = await httpCommon.get(`/getComplaintByUser/${obj?._id}`);
      } else {
        response = await httpCommon.get(`/getAssinedComplaintByTechnician/${obj?._id}`);
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
      <DashboardHeader pagetitle={"Complaints"}
        modalbutton={() => {
          return <div className="col-auto d-flex w-sm-100">
            {(localUser?.role === "USER") && (<Link href={"/admin/complaint/AddComplaint"} className='text-decoration-none'>
              <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <AddIcon className='me-1' fontSize='large' />Add Complaint</button>
            </Link>)}
          </div>
        }}
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
      <ConfirmBox bool={confirmBoxView} setConfirmBoxView={setConfirmBoxView} onSubmit={deletePlan} />
      <Modal
        show={popUp}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className='d-flex align-items-center justify-content-between p-3'>
          <div>
            <Modal.Title id="contained-modal-title-vcenter">
              Assign Technician
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
                <div className='col-3 text-end'> <button className='btn btn-primary' disabled={loading1} onClick={() => assignComplaint(t1?._id)}>Assign</button> </div>
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

export default MyComplaints