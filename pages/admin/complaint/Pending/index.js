import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import httpCommon from '@/http-common';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ConfirmBox from '../../common/ConfirmBox';
import ToastMessage from '../../common/ToastMessage';
import DashboardHeader from '../../common/DashboardHeader';
import Loader from '../../common/Loading';
 

const PendingComplaints = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [randomValue, setRandomValue] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmBoxView, setConfirmBoxView] = useState(false);

  useEffect(() => {
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
        cell: row => row?.applianceName,
        sortable: true,  
      },
      {
        name: "PART NAME ",
        selector: (row) => row?.partName,
        sortable: true
      },

      {
        name: "DESCRIPTION",
        selector: (row) => row?.description,
        sortable: true,  
      },
      
      {
        name: "PART IMAGE",
        cell: (row) => <img src={row?.image} className='m-2' alt="Image" width="50" height="50" />,
        sortable: true, 
      },
      {
        name: "STATUS",
        selector: (row) => row?.status,
        sortable: true, 
      },
      {
        name: "CREATEDAT",
        selector: (row) => new Date(row?.createdAt)?.toLocaleDateString(),
        sortable: true,  

      },


      {
        name: "ACTION",
        selector: (row) => { },
        cell: (row) => <div className="d-flex justify-content-between align-items-center"  >
          {/* <Link href={`/admin/plan/EditPlan/${row?._id}`} >
          <EditIcon onClick={() => { handlePlanEdit(row?._id) }} style={{ cursor: "pointer" }} color='success' />
          </Link> */}
          <div>
          <button className='btn btn-warning '>Assign</button>
          </div>
          <Link href={`/admin/complaint/ComplaintDetails/${row?._id}`}>
          <VisibilityIcon  className='ms-2 me-2' style={{ cursor: "pointer" }}/>
          </Link>
          {/* <DeleteIcon onClick={() => { handleUser(row?._id) }} style={{ cursor: "pointer" }} color='error' /> */}
        </div>,
        sortable: true,   width:"150px"

      }
    ]
  }

  const getPlans = async () => {
    try {
      const user1=localStorage.getItem("admin");
      const userData=JSON?.parse(user1)
      setLoading(true)
      let response = await httpCommon.get("/getAllComplaint");
      let { data } = response;
     
     const filterData= userData?.role ==="ADMIN" ? data?.filter(f1=>f1?.status==="PENDING"): data?.filter((f1) =>(f1?.status==="PENDING" && f1?.userId===userData?._id));

      setData(filterData?.reverse());
      setLoading(false)

    } catch (err) {
      console.log(err);
      setLoading(false)

    }
  }
  

  const srData = data?.map((item, i) => ({ ...item, i: i + 1 }))
  return (
    <div>
        <DashboardHeader pagetitle={"Pending Complaints"}
                // modalbutton={() => {
                //     return <div className="col-auto d-flex w-sm-100">
                //         <Link href={"/admin/plan/AddPlan"} className='text-decoration-none'>
                //             <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <AddIcon className='me-1' fontSize='large'/>Add Plan</button>
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
        <ConfirmBox bool={confirmBoxView} setConfirmBoxView={setConfirmBoxView} onSubmit={deletePlan} />
    </div>
  )
}

export default PendingComplaints