import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const OtpVerification = () => {
    const [otp, setOtp] = useState('');

    return (
        <>
            <div className="text-center container">

                <div className='row py-5 m-2'>
                    <div className='col-12 col-md-4 col-lg-4 '>

                    </div>

                    <div className='col-12 col-md-4 col-lg-4 shadow rounded '>

                        <Box
                            sx={{
                                my: 8,
                                px: 4,
                                background: "white",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}

                        >
                            <div className='mt-3 mb-3'>
                                <Typography component="h1" variant="h5">
                                   Otp Verification
                                </Typography>
                                {/* <Typography color="red" component="h4" variant="h6">
                                {error?.length > 0 ? error : ""}
                            </Typography> */}
                                <Box
                                    component="form"
                                    noValidate
                                    // onSubmit={handleSubmit}
                                    sx={{ mt: 5 ,width:"100%"}}
                                >
                                    <OtpInput
                                    inputStyle={{width:"30px"}}
                                        value={otp}
                                        onChange={setOtp}
                                        // inputType='number'
                                        numInputs={6}
                                        renderSeparator={<span style={{margin:"7px"}}>-</span>}
                                        renderInput={(props) => <input   {...props} />}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                      Verify
                                    </Button>
                                </Box>
                            </div>
                        </Box>

                    </div>
                    <div className='col-12 col-md-4 col-lg-4  '>

                    </div>
                </div>
            </div>
        </>
    );
}

export default OtpVerification