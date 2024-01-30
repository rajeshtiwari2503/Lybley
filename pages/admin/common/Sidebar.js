import { React, useEffect, useState } from 'react'
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
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PagesIcon from '@mui/icons-material/Pages';
import ContactsIcon from '@mui/icons-material/Contacts';

const Sidebar = () => {
    const router = useRouter();
    const handleSideBar = () => {
        let sideBar = document.getElementById("wrapper");
        let sideBar1 = document.getElementById("wrapper1");
        sideBar.classList.toggle('toggled');
        sideBar1.classList.toggle('toggled');
    }
    const currentPath = router.pathname;

    const [user,setUser]=useState("");

    useEffect(() => {
      if (typeof window !== 'undefined') {
          const user1=localStorage.getItem("admin");
          const data=JSON?.parse(user1)
          setUser(data);        
      }

    },[  ]);
  
    return (
        <div>
            <div   id="wrapper">

                <aside id="sidebar-wrapper" >-
                    <div className="sidebar-brand">
                        <h2>LY3LEY</h2>

                    </div>
                    <ul className="sidebar-nav mt-4">
                    {(user?.role==="USER"  || user?.role==="ADMIN" || user?.role==="TECHNICIAN" )?
                        <li className={currentPath.startsWith("/admin/dashboard") ? "active" : ""}>

                            <Link href="/admin/dashboard" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <DashboardIcon />
                                Dashboard
                            </Link>
                        </li>
                        : ""}
                       {  user?.role==="ADMIN"  ?
                        <li className={currentPath.startsWith("/admin/plan") ? "active" : ""}>
                            <Link href="/admin/plan" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <StoreIcon />
                                Plans
                            </Link>
                        </li>
                        : ""}
                            {user?.role==="ADMIN" ? 
                        <li className={currentPath.startsWith("/admin/user") ? "active" : ""}>

                            <Link href="/admin/user" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <PeopleIcon />
                                User
                            </Link>
                        </li>
                        : ""}
                        {user?.role==="ADMIN" ? 
                        <li className={currentPath.startsWith("/admin/technician") ? "active" : ""}>

                            <Link href="/admin/technician" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <ConstructionIcon />
                                Technician
                            </Link>
                        </li>
                        : ""}
                        {(user?.role==="USER"  || user?.role==="ADMIN" )?
                        <li className={currentPath.startsWith("/admin/subscriber") ? "active" : ""}>

                            <Link href="/admin/subscriber" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <ShoppingBagIcon />
                                Subscribed Plans
                            </Link>
                        </li>
                        : ""}
                        {(user?.role==="USER"  || user?.role==="ADMIN" || user?.role==="TECHNICIAN" )?
                         <li className={currentPath.startsWith("/admin/complaint") ? "active" : ""}>

                            <Link href="/admin/complaint" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <ForwardToInboxIcon />
                                Complaints
                            </Link>
                        </li>
                        :"" }
                       {user?.role==="ADMIN" ?  
                        <li className={currentPath.startsWith("/admin/blog") ? "active" : ""}>

                            <Link href="/admin/blog" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <PagesIcon />
                                Blogs
                            </Link>
                        </li>
                        :""}
                            {user?.role==="ADMIN" ? 
                        <li className={currentPath.startsWith("/admin/contact") ? "active" : ""}>

                            <Link href="/admin/contact" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <ContactsIcon />
                                Contact us
                            </Link>
                        </li>
                         :""}
                    </ul>


                </aside>

                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div style={{ height: "55px", backgroundColor: "#7177ed" }} className='w-100 align-items-center ps-3 pe-3 d-flex justify-content-between'>
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