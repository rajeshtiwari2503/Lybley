import React, { useEffect, useState } from 'react'
import Sidebar from '../common/Sidebar';
import { useRouter } from 'next/router';
import Header from '@/pages/header/Header';
import Footer from '@/pages/footer/Footer';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const showSidebar = router.pathname.startsWith('/admin');
  const [user,setUser]=useState("");

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //       const user=localStorage.getItem("user");
  //       setUser(user);
  //   }
  // },[]);
  return (
    <div>
      {showSidebar && <Sidebar />} 
      {showSidebar ?
        <div  id="wrapper1">
          <section className="bg-light  " id="content-wrapper">
            <div className="row ">
              <div className="col-lg-12   px-4">
                {children}
              </div>
            </div>
          </section>
        </div>
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