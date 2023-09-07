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
 

const MySubscribers = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [randomValue, setRandomValue] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmBoxView, setConfirmBoxView] = useState(false);

  useEffect(() => {
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
      {
        name: "USER ID",
        selector: (row) => row?.subscriberName,
        cell: row => row?.subscriberName,
        sortable: true, width: "150px"
      },
      {
        name: "USER NAME",
        selector: (row) => row?.subscriberName,
        cell: row => row?.subscriberName,
        sortable: true, width: "150px"
      },
      {
        name: "CONTACT",
        selector: (row) => row?.subscriberName,
        cell: row => row?.subscriberName,
        sortable: true, width: "150px"
      },
      {
        name: "LOCATION",
        selector: (row) => row?.subscriberName,
        cell: row => row?.subscriberName,
        sortable: true, width: "150px"
      },
      {
        name: "subscriber NAME",
        selector: (row) => row?.price,
        sortable: true
      },
      {
        name: "subscriber PRICE",
        selector: (row) => row?.price,
        sortable: true
      },

      
      
      {
        name: " CreatedAt",
        selector: (row) => new Date(row?.createdAt)?.toLocaleDateString(),
        sortable: true,  

      },


      {
        name: "ACTION",
        selector: (row) => { },
        cell: (row) => <div className="d-flex justify-content-between"  >
          {/* <Link href={`/admin/subscriber/Editsubscriber/${row?._id}`} >
          <EditIcon onClick={() => { handlesubscriberEdit(row?._id) }} style={{ cursor: "pointer" }} color='success' />
          </Link> */}
          <Link href={`/admin/subscriber/SubscriberDetails/${row?._id}`}>
          <VisibilityIcon  className='ms-2 me-2' style={{ cursor: "pointer" }}/>
          </Link>
          {/* <DeleteIcon onClick={() => { handleUser(row?._id) }} style={{ cursor: "pointer" }} color='error' /> */}
        </div>,
        sortable: true, width: "100px"

      }
    ]
  }

  const getsubscribers = async () => {
    try {
      setLoading(true)
      let response = await httpCommon.get("/getAllSubscription");
      let { data } = response;
      
      setData(data);
      setLoading(false)

    } catch (err) {
      console.log(err);
      setLoading(false)

    }
  }
  const rvsData = data?.reverse();


  const srData = rvsData?.map((item, i) => ({ ...item, i: i + 1 }))
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
    </div>
  )
}

export default MySubscribers