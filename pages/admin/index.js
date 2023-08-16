import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
// import PrivateRoute from '../privateRoute';
import Sidebar from './common/Sidebar';
import PrivateRoute from '../privateRoute';

const Admin = () => {
   
    return (
        <div>
           {/* <Sidebar /> */}
        </div>
    )
}

export default () => (
  <PrivateRoute>
        <Admin />
    </PrivateRoute>
    
  );