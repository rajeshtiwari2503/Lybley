import React from 'react'
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
const Login = () => {
    return (
        <>
            <div className="text-center">
                 
                <div className='row py-5 w-100'>
                    <div className='col-12 col-md-4 col-lg-4 '>

                    </div>
                    
                    <div  className='col-12 col-md-4 col-lg-4 shadow rounded '>
                    
                        <Box
                            sx={{
                                my: 8,
                                px: 4,
                               background:"white",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                           
                        >
                            <div  className='mt-3 mb-3'>
                            <Typography  component="h1" variant="h5">
                                Sign in
                            </Typography>
                            {/* <Typography color="red" component="h4" variant="h6">
                                {error?.length > 0 ? error : ""}
                            </Typography> */}
                            <Box
                                component="form"
                                noValidate
                                // onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    // onChange={handleChange}
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
                                    // onChange={handleChange}
                                    // onKeyPress={handleEnter}
                                />
                                {/* <FormControlLabel   
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
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