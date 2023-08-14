import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useAuth } from '../utils/authContext';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
//   const { user } = useAuth();
const [user,setUser]=useState("")



  useEffect(() => {
    if (typeof window !== 'undefined') {
        const user=localStorage.getItem("user1");
        // setUser(user);
        // if (user!=="ABC") {
        //     router.push('/sign-in'); // Redirect to the login page if the user is not authenticated.
        //     localStorage.removeItem("user1");
        //   }
      }
  }, [router]);

    return <>{children}</>;

   // Render the children (e.g., the "/checkout" page) if the user is authenticated.
};

export default PrivateRoute;