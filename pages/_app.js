import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header'
import Footer from './footer/Footer'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Header />
   <Component {...pageProps} />
   <Footer />
   </>
  )
}


