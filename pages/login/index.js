import React, { useState } from 'react'
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
    const [login, setLogin] = useState("")
    const [error, setError] = useState("")
    const handleLogin = async () => {
        let logData = { contact: +login }
        
        try {
            let response = await httpCommon.post("/login", logData)
            let { data } = response;
            if (data?.status === true) {
                router.push("/otpVerification")
            }
        }
        catch (err) {
            setError(err?.response?.data?.msg)
        }
    }
    return (
        <>
            <div className="text-center container" >

                <div className='row py-5 m-2'>
                    <div className='col-12 col-md-4 col-lg-4 '>

                    </div>

                    <div className='col-12 col-md-4 col-lg-4 shadow rounded '
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
                                        id="mobileNo"
                                        label="Mobile Number"
                                        name="mobileNo"
                                        type='number'
                                        autoComplete="mobileNo"
                                        autoFocus
                                        onChange={(e) => setLogin(e.currentTarget.value)}
                                    />
                                    {/* <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    // onChange={handleChange}
                                    // onKeyPress={handleEnter}
                                /> */}
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
                                    <Grid justifyContent={"start"} container>
                                        <Grid item >
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/sign-up" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </div>
                        </Box>

                    </div>
                    <div className='col-12 col-md-4 col-lg-4  '>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login