import React, { useEffect, useState } from 'react'
import Sidebar from '../common/Sidebar';
import { useRouter } from 'next/router';
import Header from '@/pages/header/Header';
import Footer from '@/pages/footer/Footer';
import Login from '../login';

const AdminLayout = ({ children }) => {
  const router = useRouter();
   const showSidebar = router.pathname.startsWith('/admin');
   const [user,setUser]=useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const user1=localStorage.getItem("admin");
        const data=JSON?.parse(user1)
        setUser(data);
        if(user?.admin==="Admin"){
          router.push("/admin/dashboard")
          window.location.reload() 
        }
       
    }
  },[ ]);
  

  // console.log("admin",user);

  return (
    <div>
     
      {showSidebar ?
      <>
        {user?.admin==="Admin" ?
        <>
         {user?.admin==="Admin"  &&   <Sidebar />} 
        <div  id="wrapper1">
          <section className="bg-light" id="content-wrapper">
            <div className="row ">
              <div className="col-lg-12 px-4">
                {children}
              </div>
            </div>
          </section>
        </div>
        </>
        :
        <Login />
      }
        </>
        :
        <div>
         <Header />
         {children}
          <Footer />
        </div>}
    </div>
  );
};

export default AdminLayout;