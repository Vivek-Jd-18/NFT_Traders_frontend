import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, TextField, Typography } from '@mui/material';
import png from '../../../assets/png';
import { Box, styled, useTheme } from '@mui/system'
import Card from '@mui/material/Card';



const NftTv = () => {
    const Img1 = styled('img')({
        display: 'block',
        width: '100%',
        borderRadius: "6px",
        height:"162px"
    });
    const Img2 = styled('img')({
        width: '100%',
    });


    return (
        <>
            <Box sx={{ background: "#F5F5F5", padding: "25px" }}>
                <Grid container justify="flex-end">
                    <Grid item xs>
                        <Box borderRight={2} borderColor="black" component="span" sx={{ color: "#1F1F1F", padding: "10px 21px 10px 0px", fontWeight: "bold" }} variant="h4">
                            NFT TV
                        </Box>
                        <Box component="span" sx={{ color: "#6C6C6C", margin: "0px 0px 0px 15px" }}>
                            NFT TV brings you the best videos on NFTs from around the world                        </Box>
                    </Grid>
                    <Grid>
                        <Button variant="contained" sx={{ borderRadius: "6px", height: "35px", background: "#3198F9 0% 0% no-repeat padding-box" }}>Set Alert   </Button>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Container maxWidth="false" sx={{ background: "#F5F5F5", padding: "25px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography component="p" sx={{ color: "#1F1F1F", fontWeight: "bold" }}>
                            Top story
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="right" component="p" sx={{ color: "#6C6C6C" }}>
                            Gill Livingstone - Feburary 6, 2022
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Img1
                            src={png.crypto}
                        />
                        <Typography m={1} sx={{ color: "#5A5A5A" }}>
                            Yuga labs to buy Cryptopunks + Meebits
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Img1
                            src={png.crypto}
                        />
                        <Typography m={1} sx={{ color: "#5A5A5A" }}>
                            Yuga labs to buy Cryptopunks + Meebits
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Img1
                            src={png.crypto}
                        />
                        <Typography m={1} sx={{ color: "#5A5A5A" }}>
                            Yuga labs to buy Cryptopunks + Meebits
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Container maxWidth="false" sx={{ background: "#F5F5F5", padding: "20px" }}>
                <Typography sx={{ color: "#6C6C6C", fontWeight: "bold" }} variant="p">
                    Latest News
                </Typography>
            </Container>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={4}>
                    {Array.from(Array(5)).map((_, index) => (
                        <Grid item xs={6} md={2.4}>
                            <Card elevation={0} >
                                <Img2
                                    src={png.appcoin}
                                />
                                <Typography variant="h7" align="left">
                                    Ape Coin Live!
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
            <br />
            <Container maxWidth="false" sx={{ background: "#F5F5F5", padding: "20px" }}>
                <Typography sx={{ color: "#6C6C6C", fontWeight: "bold" }} variant="p">
                    Trending Articles
                </Typography>
            </Container>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={4}>
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={6} md={2.4}>
                            <Card elevation={0} >
                                <Img2
                                    src={png.appcoin}
                                />
                                <Typography variant="h7" align="left">
                                    Ape Coin Live!
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
            <br />
            <br />
            <Container maxWidth="false" sx={{ background: "#F5F5F5", padding: "20px" }}>
                <Typography sx={{ color: "#6C6C6C", fontWeight: "bold" }} variant="p">
                    Most Viewed
                </Typography>
            </Container>
            <br />
            <Container maxWidth="false">
                <Grid container spacing={4}>
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={6} md={2.4}>
                            <Card elevation={0} >
                                <Img2
                                    src={png.appcoin}
                                />
                                <Typography variant="h7" align="left">
                                    Ape Coin Live!
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br />
        </>
    )
}
export default NftTv