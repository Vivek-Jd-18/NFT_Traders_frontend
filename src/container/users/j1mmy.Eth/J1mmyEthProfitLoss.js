import React from "react";
import {
  Box,
  Grid,
  Button,
  Badge,
  Container,
  Typography,
  ButtonGroup,
  styled,
  Card,
  Avatar,
} from "@mui/material";
import percentage from "../../../assets/images/percentage.png";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LinerChart from "./LinerChart";
import { useNavigate } from "react-router-dom";

const statList = [
  {
    icon: "colorize",
    amount: 0.05,
    change: +1.2,
    title: "Current Portfolio Value",
  },
  {
    icon: "attachment",
    amount: 0.05,
    change: +1.2,
    title: "Average Floor Price",
  },
  {
    icon: "mode_comment",
    amount: 0.7,
    change: +1.2,
    title: "7 Day Gain/Loss",
  },
  {
    icon: "remove_red_eye",
    amount: 0.25,
    change: +1.2,
    title: "30 Day Gain/Loss",
  },
  {
    icon: "colorize",
    amount: 0.15,
    change: +1.2,
    title: "Biggest Gain",
  },
  {
    icon: "attachment",
    amount: 0.45,
    change: +1.2,
    title: "Biggest Loss",
  },
];

const data = [
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "15px",
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "6px",
});

const Jmmyethprofitloss = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "25px",
        }}
      >
        <Grid container justify="flex-end">
          <Grid item xs>
            <Box
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              J1mmy.Eth
            </Box>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                margin: "0px 15px 0px 0px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Daily
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Add Widget
            </Button>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Container maxWidth="false">
        <Grid container justify="flex-end">
          <Grid item xs>
            <Box sx={{ color: "#4D4D4D" }} component="span">
              Overall
            </Box>
          </Grid>
          <Grid>
            <ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">
                15m
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">
                30m
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">
                1d
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">
                7d
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">
                30d
              </Button>
              <Button variant="contained" sx={{ border: "none" }} key="All">
                All
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
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
                    <Box
                      component="span"
                      sx={{ m: 0, color: "#07447E", fontSize: "10px" }}
                    >
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
      <Container maxWidth="false">
        <Box>
          <ButtonGroup
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#F5F5F5",
              outline: "none",
              maxWidth: "600px",
            }}
          >
            <Button
              onClick={() => {
                navigate("/users/j1mmyethinsights");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="15m"
            >
              Insights
            </Button>
            <Button
              onClick={() => {
                navigate("/users/j1mmyethcollection");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="30m"
            >
              My Collection
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              key="All"
            >
              Profit/Loss
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
      <br />
      <Container maxWidth="false">
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
            <TableRow>
              <TableCell>Invested</TableCell>
              <TableCell align="right">Gas Spent</TableCell>
              <TableCell align="right">Total Spend (USD)</TableCell>
              <TableCell align="right">Current Portfolio Value</TableCell>
              <TableCell align="right">Total Profit/Loss</TableCell>
              <TableCell align="right">Profit/Loss %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <br />
      <Container maxWidth="false">
        <Grid container justify="flex-end">
          <Grid item xs>
            <Box sx={{ color: "#4D4D4D" }} component="span">
              Total Profit/Loss (USD)
            </Box>
          </Grid>
          <Grid>
            <ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">
                15m
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">
                30m
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">
                1d
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">
                7d
              </Button>
              <Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">
                30d
              </Button>
              <Button variant="contained" sx={{ border: "none" }} key="All">
                All
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="false">
        <LinerChart
          height="280px"
          option={{
            series: [
              {
                data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
                type: "line",
              },
            ],
            xAxis: {
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          }}
        />
      </Container>
    </>
  );
};
export default Jmmyethprofitloss;
