import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header'
import Footer from './footer/Footer'
import AdminLayout from './admin/adminLayout/adminLayout';
import { DataProvider } from './api/userData';
// import AdminLayout from './admin/adminLayout';
import   { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return(
    <>
    <DataProvider>
    <AdminLayout>
   <Component {...pageProps} />
   </AdminLayout>
   </DataProvider>
   <Toaster />
   </>
  )
}


