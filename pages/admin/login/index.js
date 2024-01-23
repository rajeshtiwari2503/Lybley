import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import httpCommon from '@/http-common';
import { useRouter } from 'next/router';
const Login = () => {
    const router = useRouter();
    const [login, setLogin] = useState({userName:"adminLybley12@gmail.com",password:"adminLybley"});
    const [checkLogin,setCheckLogin]=useState({user:"",pass:"",admin:"Admin"});
    const [error, setError] = useState("")
    const handleLogin = () => {
          const {userName,password}=login;
          const {user,pass}=checkLogin;
          console.log(login,checkLogin);
          if(userName===user && password===pass){
            localStorage.setItem("admin",JSON.stringify(checkLogin))
            router.push("/admin/dashboard");
            window.location.reload()
          }else{
            setError("Username and password is incorrect!");
          }
    }

    

    return (
        <>
            <div className="  container " >

                <div className='row  flex justify-content-center  py-5 m-2'>
                    

                    <div className='col-12 col-md-6  col-lg-6  shadow rounded '
                    //  style={{ backgroundColor: "#caaef3" }}
                    >

                        <Box
                            sx={{
                                my: 8,
                                px: 4,
                                //    background:"white",

                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}

                        >
                            <div className='mt-3 mb-3'>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                {/* <Typography color="red" component="h4" variant="h6">
                                {error?.length > 0 ? error : ""}
                            </Typography> */}
                                <Box
                                    component="form"
                                    noValidate
                                    // onSubmit={handleSubmit}
                                    sx={{ mt: 3 }}
                                >
                                    <div className='text-danger'>{error}</div>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="User Name"
                                        name="userName"
                                        type='text'
                                        autoComplete="userName"
                                        autoFocus
                                        onChange={(e) =>{ setCheckLogin({...checkLogin,user:e.currentTarget.value}); setError("") }}
                                    />
                                    <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) =>{ setCheckLogin({...checkLogin,pass:e.currentTarget.value});setError("")}}
                                    // onKeyPress={handleEnter}
                                />
                                    {/* <FormControlLabel   
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={handleLogin}
                                    >
                                        Sign In
                                    </Button>
                                     

                                </Box>
                            </div>
                        </Box>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Login