import {React,useState} from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CRMHeader from './Header';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AttributionIcon from '@mui/icons-material/Attribution';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router=useRouter();
    const handleSideBar = () => {
        let sideBar = document.getElementById("wrapper");
        let sideBar1 = document.getElementById("wrapper1");
        sideBar.classList.toggle('toggled');
        sideBar1.classList.toggle('toggled');
    }
    const currentPath=router.pathname;
    return (
        <div>
            <div clas id="wrapper">

                <aside  id="sidebar-wrapper" >
                    <div className="sidebar-brand">
                        <h2>LY3LEY</h2>

                    </div>
                    <ul className="sidebar-nav ">
                        <li className={currentPath.startsWith("/admin/dashboard") ? "active" : ""}>
                       
                        <Link href="/admin/dashboard" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <DashboardIcon />
                             Dashboard
                               </Link>
                        </li>
                    </ul>
                </aside>

                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div style={{ height: "55px",backgroundColor:"#7177ed" }} className='w-100 align-items-center ps-3 pe-3 d-flex justify-content-between'>
                                <div>
                                    <button className="border border-2 rounded-2" type="button" onClick={handleSideBar}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <CRMHeader />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;