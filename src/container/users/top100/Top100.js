import React from 'react'
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Button, Container, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system'
import { Grid, Card, IconButton, Icon } from '@mui/material'
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import percentage from '../../../assets/images/percentage.png'

const StyledCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    padding: "15px"
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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Top100 = () => {
    return (
        <>
            <Box sx={{ background: "#F5F5F5 0% 0% no-repeat padding-box", padding: "25px" }}>
                <Grid container justify="flex-end">
                    <Grid item xs>
                        <Box component="span" sx={{ color: "#1F1F1F", padding: "10px 21px 10px 0px", fontWeight: "bold" }} variant="h4">
                        TOP 100
                        </Box>
                    </Grid>
                    <Grid>
                        <Button variant="contained" sx={{ borderRadius: "6px", margin: "0px 15px 0px 0px", height: "28px", background: "#3198F9 0% 0% no-repeat padding-box" }}>Daily</Button>
                    </Grid>
                    <Grid>
                        <Button variant="contained" sx={{ borderRadius: "6px", height: "28px", background: "#3198F9 0% 0% no-repeat padding-box" }}>Add Widget</Button>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {statList.map((item, ind) => (
                        <Grid item md={2} xs={6}>
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
            <Container maxWidth="false">
                <Box component="h4" sx={{ m: 0, color: "#4D4D4D" }}>
                    Top Projects
                </Box>

                <br />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Project</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Floor</TableCell>
                                <TableCell align="right">24 Hour Volume</TableCell>
                                <TableCell align="right">7 Day Volume</TableCell>
                                <TableCell align="right">List/Delist</TableCell>
                                <TableCell align="right">Collection Value</TableCell>
                                <TableCell align="right">Liquidity Rating</TableCell>
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
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <Box component="h4" sx={{ m: 0, color: "#4D4D4D" }}>
                        Rising Floors
                        </Box>
                        <br/>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                                    <TableRow>
                                        <TableCell>Project</TableCell>
                                        <TableCell align="right">Floor</TableCell>
                                        <TableCell align="right">24 Hour Rise</TableCell>
                                        <TableCell align="right">Gain%</TableCell>
                                        
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
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component="h4" sx={{ m: 0, color: "#4D4D4D" }}>
                             Top Sales (Quantity)
                        </Box>
                        <br/>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                                    <TableRow>
                                        <TableCell>Project</TableCell>
                                        <TableCell align="right">Floor</TableCell>
                                        <TableCell align="right">24 Hour Sales</TableCell>
                                        <TableCell align="right">Gain%</TableCell>
                                        
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
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </Container>
            <br/>
        </>
    )
}
export default Top100;