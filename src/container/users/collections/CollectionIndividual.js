import React from "react";
import Index from "../Index";

const Img = Index.styled('img')({
    height: "190px",
    width: "150px",
    borderRadius: "6px"
});

const Img2 = Index.styled('img')({
    height: "50px",
    width: "52px",
    borderRadius: "6px",
    margin:"8px",
    objectFit:"cover"
});

const StyledCard = Index.styled(Index.Card)(() => ({
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

const CollectionsIndividual = () => {

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

    return (
        <>
            <Index.Box sx={{ background: "#F5F5F5 0% 0% no-repeat padding-box", padding: "25px" }}>
                <Index.Grid container justify="flex-end">
                    <Index.Grid item xs>
                        <Index.Box borderRight={2} borderColor="black" component="span" sx={{ color: "#1F1F1F", padding: "10px 21px 10px 0px", fontWeight: "bold" }} variant="h4">
                            Collections
                        </Index.Box>
                        <Index.Box component="span" sx={{ color: "#6C6C6C", margin: "0px 0px 0px 15px" }}>
                            See the top collections in the NFT space aggregated into one place.
                        </Index.Box>
                    </Index.Grid>
                </Index.Grid>
            </Index.Box>

            <br />
            <Index.Container maxWidth="false">
                <Index.Grid container spacing={2}>
                    <Index.Grid item lg={2.1} xs={12}>
                        <Img src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
                    </Index.Grid>
                    <Index.Grid item lg={9.9} xs={12}>
                        <Index.Typography sx={{ color: "#1F1F1F" }} variant="h6">
                            Look Labs
                        </Index.Typography>
                        <Index.Typography sx={{ color: "#6C6C6C", fontSize: "15px" }} variant="p">
                            This is an explanation of the collection, it will most likely be around 100 to 250 words for each project.
                        </Index.Typography>
                        <br />
                        <br />
                        <Index.Typography sx={{ color: "#0B0F15" }} variant="p">
                            Number of Collections
                        </Index.Typography>
                        <br/>
                        
                        <Index.Typography sx={{ color: "#004ECB" }} variant="span">
                            3
                        </Index.Typography>
                        <Index.Typography sx={{ color: "#1B9DFC" }} variant="span">
                            1.2k
                        </Index.Typography>
                        <Index.Typography sx={{ color: "#1B9DFC" }} variant="span">
                            30.2K
                        </Index.Typography>
                        <Index.Typography sx={{ color: "#1B9DFC" }} variant="span">
                            Nanopass.io
                        </Index.Typography>
                        <Index.Typography sx={{ color: "#1B9DFC" }} variant="span">
                            OpenSea
                        </Index.Typography>
                        <br/>
                        <Img2 src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
                        <Img2 src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
                        <Img2 src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
                    </Index.Grid>
                </Index.Grid>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
                <Index.Grid container justify="flex-end">
                    <Index.Grid item xs>
                        <Index.Box sx={{ color: "#4D4D4D" }} component="span">
                            Overall
                        </Index.Box>
                    </Index.Grid>
                    <Index.Grid>
                        <Index.ButtonGroup size="small" sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }} aria-label="small button group" >
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">15m</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">30m</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">1d</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">7d</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">30d</Index.Button>
                            <Index.Button variant="contained" sx={{ border: "none" }} key="All">All</Index.Button>
                        </Index.ButtonGroup>
                    </Index.Grid>
                </Index.Grid>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
                <Index.Grid container spacing={3}>
                    {statList.map((item, ind) => (
                        <Index.Grid item md={2} xs={6}>
                            <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                                <Index.Avatar sx={{ margin: "0px 0px 6px 0px" }} src={Index.percentage} />
                                <div>
                                    <Index.Box component="span" sx={{ m: 0, color: "#1F1F1F" }}>
                                        {item.amount}
                                    </Index.Box>
                                    <Index.Box component="span" sx={{ m: 1, color: "#0EB700" }}>
                                        {item.change}
                                    </Index.Box>
                                    <div>
                                        <Index.Box component="span" sx={{ m: 0, color: "#07447E", fontSize: "10px" }}>
                                            {item.title}
                                        </Index.Box>
                                    </div>
                                </div>
                            </StyledCard>
                        </Index.Grid>
                    ))}
                </Index.Grid>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
                <Index.Grid container justify="flex-end">
                    <Index.Grid item xs>
                        <Index.Box sx={{ color: "#4D4D4D" }} component="span">
                            Volume
                        </Index.Box>
                    </Index.Grid>
                    <Index.Grid>
                        <Index.ButtonGroup size="small" sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }} aria-label="small button group" >
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">15m</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">30m</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">1d</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">7d</Index.Button>
                            <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">30d</Index.Button>
                            <Index.Button variant="contained" sx={{ border: "none" }} key="All">All</Index.Button>
                        </Index.ButtonGroup>
                    </Index.Grid>
                    <Index.CalendarToday sx={{ color: "#1A9DFC" }} />
                </Index.Grid>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
               <Index.OnedSaleChart height={300} />
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
                <Index.Typography sx={{ color: "#4D4D4D" }} variant="h6">
                    Top Owners
                </Index.Typography>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
            <Index.TableContainer sx={{
                    maxWidth: {
                        xs: "300px", sm: "600px", md: "800px", lg: "900px"
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
                    
                }} component={Index.Paper}>
                    <Index.Table sx={{whiteSpace:"nowrap"}}  aria-label="simple table">
                        <Index.TableHead>
                            <Index.TableRow>
                                <Index.TableCell>Username</Index.TableCell>
                                <Index.TableCell align="right">BAYC</Index.TableCell>
                                <Index.TableCell align="right">MAYC</Index.TableCell>
                                <Index.TableCell align="right">BAKC</Index.TableCell>
                                <Index.TableCell align="right">BACC</Index.TableCell>
                                <Index.TableCell align="right">AVERAGE HOLD</Index.TableCell>
                                <Index.TableCell align="right">Owned</Index.TableCell>
                                <Index.TableCell align="right">Collection Value (USD)</Index.TableCell>
                            </Index.TableRow>
                        </Index.TableHead>
                        <Index.TableBody>
                            {rows.map((row) => (
                                <Index.TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <Index.TableCell component="th" scope="row">
                                        {row.name}
                                    </Index.TableCell>
                                    <Index.TableCell align="right">{row.calories}</Index.TableCell>
                                    <Index.TableCell align="right">{row.fat}</Index.TableCell>
                                    <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                                    <Index.TableCell align="right">{row.protein}</Index.TableCell>
                                    <Index.TableCell align="right">{row.protein}</Index.TableCell>
                                    <Index.TableCell align="right">{row.protein}</Index.TableCell>
                                    <Index.TableCell align="right">{row.protein}</Index.TableCell>
                                </Index.TableRow>
                            ))}
                        </Index.TableBody>
                    </Index.Table>
                </Index.TableContainer>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
                <Index.Typography sx={{ color: "#4D4D4D" }} variant="h6">
                    Compare
                </Index.Typography>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
            <Index.TableContainer sx={{
                    maxWidth: {
                        xs: "300px", sm: "600px", md: "800px", lg: "900px"
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
                    
                }} component={Index.Paper}>
                    <Index.Table sx={{whiteSpace:"nowrap"}}  aria-label="simple table">
                        <Index.TableHead>
                            <Index.TableRow>
                                <Index.TableCell>Key Metrics</Index.TableCell>
                                <Index.TableCell align="right">BAYC</Index.TableCell>
                                <Index.TableCell align="right">Mutant Ape Yacht Club</Index.TableCell>
                                <Index.TableCell align="right">Bored Ape Kennel Club</Index.TableCell>
                                <Index.TableCell align="right">Bored Ape Chemistry Club</Index.TableCell>
                            </Index.TableRow>
                        </Index.TableHead>
                        <Index.TableBody>
                            {rows.map((row) => (
                                <Index.TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <Index.TableCell component="th" scope="row">
                                        {row.name}
                                    </Index.TableCell>
                                    <Index.TableCell align="right">{row.calories}</Index.TableCell>
                                    <Index.TableCell align="right">{row.fat}</Index.TableCell>
                                    <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                                    <Index.TableCell align="right">{row.protein}</Index.TableCell>
                                </Index.TableRow>
                            ))}
                        </Index.TableBody>
                    </Index.Table>
                </Index.TableContainer>
            </Index.Container>
            <br />
        </>
    )
}
export default CollectionsIndividual;