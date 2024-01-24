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
 

const Contact = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [randomValue, setRandomValue] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmBoxView, setConfirmBoxView] = useState(false);

  useEffect(() => {
    getContacts()
  }, [ ])
  
  
  const columns = () => {

    return [
      {
        name: "SR No.",
        selector: (row) => row.i,
        sortable: true, width: "90px"
      },
      {
        name: "USER NAME",
        selector: (row) => row?.name,
        cell: row => row?.name,
        sortable: true,  
      },
      {
        name: "CONTACT NO.",
        selector: (row) => row?.contact,
        sortable: true
      },

      {
        name: "EMAIL",
        selector: (row) => row?.email,
        sortable: true, width: "220px"
      },

      {
        name: "MESSAGE",
        selector: (row) => row?.message,
        cell: row => row?.message,
        sortable: true
      },
      {
        name: "WEBSITE",
        selector: (row) => row?.website,
        sortable: true
      },
      // {
      //   name: "RESUME",
      //   selector: (row) => row?.resume,
      //   sortable: true
      // },
      {
        name: "CREATED_AT",
        selector: (row) => new Date(row?.createdAt)?.toLocaleDateString(),
        sortable: true,  

      },


    //   {
    //     name: "ACTION",
    //     selector: (row) => { },
    //     cell: (row) => <div className="d-flex justify-content-between"  >
    //       <Link href={`/admin/plan/EditPlan/${row?._id}`} >
    //       <EditIcon onClick={() => { handlePlanEdit(row?._id) }} style={{ cursor: "pointer" }} color='success' />
    //       </Link>
    //       <Link href={`/admin/plan/PlanDetails/${row?._id}`}>
    //       <VisibilityIcon  className='ms-2 me-2' style={{ cursor: "pointer" }}/>
    //       </Link>
    //       <DeleteIcon onClick={() => { handleUser(row?._id) }} style={{ cursor: "pointer" }} color='error' />
    //     </div>,
    //     sortable: true, width: "100px"

    //   }
    ]
  }

  const getContacts= async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get("/getContactDetails");
      let { data } = response;
      
      setData(data?.reverse());
      setLoading(false)

    } catch (err) {
      console.log(err);
      setLoading(false)

    }
  }
   


  const srData = data?.map((item, i) => ({ ...item, i: i + 1 }))
  return (
    <div>
        <DashboardHeader pagetitle={"Contact us"}
                
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
         
    </div>
  )
}

export default Contact