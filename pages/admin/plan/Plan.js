import React from 'react'
import DashboardHeader from '../common/DashboardHeader'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add';

const MyPlan = () => {
  return (
    <div>
        <DashboardHeader pagetitle={"Plans"}
                modalbutton={() => {
                    return <div className="col-auto d-flex w-sm-100">
                        <Link href={"/admin/plan/AddPlan"} className='text-decoration-none'>
                            <button type="button" className="btn btn-primary btn-set-task w-sm-100"  > <AddIcon className='me-1' fontSize='large'/>Add Plan</button>
                        </Link>
                    </div>
                }} />
    </div>
  )
}

export default MyPlan