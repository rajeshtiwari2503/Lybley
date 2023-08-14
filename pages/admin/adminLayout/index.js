import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
 
import PrivateRoute from '@/pages/privateRoute';

const Admin = () => {
   
    return (
        <div>
           {/* <Sidebar /> */}
        </div>
    )
}

export default () => (
    <PrivateRoute >
        <Admin />
    </PrivateRoute>
  );