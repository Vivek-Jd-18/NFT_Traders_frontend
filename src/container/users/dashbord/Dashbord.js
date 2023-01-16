import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Button, Container, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system'
import { Grid, Card, IconButton, Icon } from '@mui/material'
import Divider from '@mui/material/Divider';
import ComparisonChart2 from './Chart.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import percentage from '../../../assets/images/percentage.png'

const StyledCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    padding: "15px",
    width: "100%"
}))

const statList = [
    {
        icon: 'colorize',
        amount: 0.05,
        change: +1.2,
        title: 'Current Portfolio Value',
    },
    {
        icon: 'attachment',
        amount: 0.05,
        change: +1.2,
        title: 'Average Floor Price',
    },
    {
        icon: 'mode_comment',
        amount: 0.7,
        change: +1.2,
        title: '7 Day Gain/Loss',
    },
    {
        icon: 'remove_red_eye',
        amount: 0.25,
        change: +1.2,
        title: '30 Day Gain/Loss',
    },
    {
        icon: 'colorize',
        amount: 0.15,
        change: +1.2,
        title: 'Biggest Gain',
    },
    {
        icon: 'attachment',
        amount: 0.45,
        change: +1.2,
        title: 'Biggest Loss',
    },
]

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
    createData('Eclair', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
    createData('Cupcake', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
];


const Dashboard = () => {

    return (
        <>
            <Box sx={{ background: "#F5F5F5 0% 0% no-repeat padding-box", padding: "25px", display: 'flex', width: "100%" }}>
                <Typography  sx={{ color: "#1F1F1F", fontWeight: "bold", textTransform: "none", flexGrow: 1 }} variant="h5">
                    DASHBOARD
                </Typography>
                <Button size="small" variant="contained" sx={{ borderRadius: "6px", background: "#3198F9 0% 0% no-repeat padding-box", textTransform: "none", boxShadow: "none", mx: 1,fontSize:"10px" }}>Daily</Button>
                <Button size="small" variant="contained" sx={{ borderRadius: "6px", background: "#3198F9 0% 0% no-repeat padding-box", textTransform: "none", boxShadow: "none", mx: 1,fontSize:"10px" }}>Add Widget</Button>
            </Box>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {statList.map((item, ind) => (
                        <Grid item md={2} xs={6} lg={2} sm={6}  >
                            <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                                <Avatar sx={{ margin: "0px 0px 6px 0px" }} src={percentage} />
                                <div>
                                    <Box component="span" sx={{ m: 0, color: "#1F1F1F" }}>
                                        {item.amount}
                                    </Box>
                                    <Box component="span" sx={{ m: 1, color: "#0EB700" }}>
                                        {item.change}
                                    </Box>
                                    <div>
                                        <Box component="span" sx={{ m: 0, color: "#07447E", fontSize: "10px" }}>
                                            {item.title}
                                        </Box>
                                    </div>
                                </div>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br />
            <br />
            <Container maxWidth="false" >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8.5} sm={6} lg={8.5}>
                        <Box sx={{ color: "#4D4D4D",my:1 }} component="span">
                            PORTFOLIO VALUE
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3.5} sm={6} lg={3.5}>
                        <ButtonGroup size="small" sx={{ backgroundColor: "#F5F5F5", outline: "none" }} aria-label="small button group" >
                            <Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">15m</Button>
                            <Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">30m</Button>
                            <Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">1d</Button>
                            <Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">7d</Button>
                            <Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">30d</Button>
                            <Button variant="contained" sx={{ border: "none" }} key="All">All</Button>
                            <CalendarMonthIcon  sx={{ color: "#1A9DFC",margin:"5px" }} />
                        </ButtonGroup>
                       
                    </Grid>
                    
                </Grid>
            </Container>
            <Container maxWidth="false">

                <ComparisonChart2 />
                <Box
                    sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, justifyContent: 'space-between' }}
                >
                    <Box sx={{ flexGrow: 1, color: "#9D9D9D" }}>01 Sep, 2022</Box>
                    <Box sx={{ color: "#9D9D9D" }}>01 Oct, 2022</Box>

                </Box>
            </Container>
            <Container maxWidth="false">
                <br />
                <br />
                <Box component="h2" sx={{ m: 0, color: "#4D4D4D" }}>
                    MY PORTFOLIO
                </Box>
                <br />
                
                <TableContainer sx={{
                    maxWidth: {
                        xs: "300px", sm: "600px", md: "800px", lg: "950px"
                    },
                        "&::-webkit-scrollbar": {
                            width: 10
                        },
                        "&::-webkit-scrollbar": {
                            height: "8px",
                            width: "12px"
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#fff"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "rgba(224, 224, 224, 1)",
                            borderRadius: "30px",
                            width: "20px"
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            background: "#B0B0B0"
                        }
                    
                }} component={Paper}>
                    <Table sx={{whiteSpace:"nowrap"}}  aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Your NFTs</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Value</TableCell>
                                <TableCell align="left">1D Value Change</TableCell>
                                <TableCell align="left">1D Sales</TableCell>
                                <TableCell align="left">1D Sales Change</TableCell>
                                <TableCell align="left">1D Volume</TableCell>
                                <TableCell align="left">1D Volume Change</TableCell>
                                <TableCell align="left">Owners %</TableCell>
                                <TableCell align="left">Owners +/-</TableCell>
                                <TableCell align="left">Listed %</TableCell>
                                <TableCell align="left">Listings</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.calories}</TableCell>
                                    <TableCell align="left">{row.fat}</TableCell>
                                    <TableCell align="left">{row.carbs}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell align="left">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <br />

        </>
    )
}
export default Dashboard;