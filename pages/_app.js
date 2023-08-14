import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header'
import Footer from './footer/Footer'
import AdminLayout from './admin/adminLayout/adminLayout';
// import AdminLayout from './admin/adminLayout';

export default function App({ Component, pageProps }) {
  return(
    <>
    
    <AdminLayout>
   <Component {...pageProps} />
   </AdminLayout>

   </>
  )
}


