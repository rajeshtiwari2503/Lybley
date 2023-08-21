import React, { useEffect, useState } from 'react'
import Loader from '../common/Loading'
import DataTable from 'react-data-table-component';
import httpCommon from '@/http-common';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const User = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    allUsers()
  }, [])

  const columns = () => {

    return [
      {
        name: "SR No.",
        selector: (row) => row.i,
        sortable: true,width:"90px"
      },
      {
        name: "USER",
        selector: (row) => row.name,
        cell: row => row?.name,
        sortable: true, width: "150px"
      },
      {
        name: "EMAIL",
        selector: (row) => row?.email,
        sortable: true
      },

      {
        name: "LOCATION",
        selector: (row) => row.location,
        sortable: true,width:"110px"
      },
      {
        name: "UNIT",
        selector: (row) => row.unit,
        sortable: true,width:"80px"
      },
      {
        name: "CONTACT",
        selector: (row) => row.contact,
        sortable: true,width: "110px"
      },

      {
        name: "REG DATE",
        selector: (row) => new Date(row?.createdAt)?.toLocaleDateString(),
        sortable: true, width: "110px"

      },

      
      {
        name: "ACTION",
        selector: (row) => { },
        cell: (row) => <div className="d-flex justify-content-between"  >
        <EditIcon  style={{cursor:"pointer"}} color='success' />
        <DeleteIcon className='ms-3' style={{cursor:"pointer"}} color='error'/>
       </div>,
        sortable: true,width:"100px"
       
      }
    ]
  }

  const allUsers = async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get("/getAllUsers");
      let { data } = response;
      setData(data);
      setLoading(false)

    } catch (err) {
      console.log(err);
      setLoading(false)

    }
  }

  const srData=data?.map((item,i)=>({ ...item, i: i + 1 }))
  return (
    <div  className="body d-flex  py-lg-3 py-md-2">
      <div className="container-xxl">
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
    </div>
  )
}

export default User