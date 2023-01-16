import React, { useState } from "react";
import { Box, styled, useTheme } from '@mui/system'
import img from '../../../../assets/images/icon-N.png'
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

const Logout = () => {
    
    return (
        <>
            <Box sx={{ backgroundColor: "#03070C" }} height="100vh" flexDirection="column" justifyContent="center">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={6}>
                    <Box
                        sx={{width:"350px"}}
                            component="img"
                            src={img}
                        />
                    </Grid>
                    <Grid>
                        <Typography variant="h4" sx={{ color: "#FFFFFF", marginTop: "15px", letterSpacing: "11.5px" }}>
                            SEE YOU AGAIN SOON!
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button sx={{ color: "#000000", backgroundColor: "#FFFFFFCC", maxWidth: "160px",marginTop: "15px" }} variant="outlined">Reconnect</Button>
                    </Grid>
                    <Typography variant="p" sx={{ color: "#FFFFFF", marginTop: "15px", letterSpacing: "1.5px" }}>
                    Follow our journey on
                    </Typography>
                    <Typography variant="p" sx={{ color: "#FFFFFF", marginTop: "15px", letterSpacing: "1.5px" }}>
                    Join our growing community
                    </Typography>
                </Grid>
            </Box>
        </>
    )
}
export default Logout;