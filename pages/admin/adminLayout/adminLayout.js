import React, { useState } from 'react'
import Sidebar from '../common/Sidebar';
import { useRouter } from 'next/router';
import Header from '@/pages/header/Header';
import Footer from '@/pages/footer/Footer';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const showSidebar = router.pathname.startsWith('/admin');

  return (
    <div>
      {showSidebar && <Sidebar />} {/* Render the sidebar if showSidebar is true */}
      {showSidebar ?
        <div id="wrapper1">
          <section className="bg-light" id="content-wrapper">
            <div className="row ">
              <div className="col-lg-12 px-5">
                {children}
              </div>
            </div>
          </section>
        </div>
        :
        <div>
          <Header />
          {children} {/* Render the content of the specific page */}
          <Footer />
        </div>}
    </div>
  );
};

export default AdminLayout;