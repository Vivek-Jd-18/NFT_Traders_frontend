import React, { useState } from "react";
import { Box, styled, useTheme } from '@mui/system'
import img from '../../../assets/images/icon-N.png'
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { Container, Typography } from "@mui/material";
const AccessDenied = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#03070C" }} height="100vh" flexDirection="column" justifyContent="center">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12}  md={12}>
                        <Box
                            sx={{ width: "350px" }}
                            component="img"
                            src={img}
                        />
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12}  md={12}>
                        <Typography variant="h3" sx={{ color: "#FFFFFF", letterSpacing: "7.2px" }}>
                        ACCESS DENIED
                        </Typography>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12} md={12}>
                        <Typography variant="p" sx={{ color: "#FFFFFF", letterSpacing: "2.4px" }}>
                            NO LIFETIME ACCESS PASS FOUND
                        </Typography>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12} md={12}>
                        <Button sx={{ color: "#000000", backgroundColor: "#FFFFFFCC", minWidth: "160px",fontWeight:"bold"}} variant="outlined">BUY ON OPENSEA</Button>
                    </Grid>
                    <br/>
                    <Grid item xs={12} md={12}>
                        <Button sx={{ color: "#000000", backgroundColor: "#FFFFFFCC", minWidth: "160px" }} variant="outlined">Connect</Button>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12} md={12}>
                        <Typography variant="p" sx={{ color: "#FFFFFF", letterSpacing: "2.4px" }}>
                        CHECKOUT THE LIFETIME ACCESS PASS BENEFITS
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Box>
        </>
    )
}
export default AccessDenied