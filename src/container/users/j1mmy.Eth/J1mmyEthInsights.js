import React from "react";
import {
  Box,
  Grid,
  Button,
  Badge,
  Container,
  Typography,
  TextField,
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
import CalendarToday from "@mui/icons-material/CalendarMonth";

import ProjectVolume from "./ProjectVolume";
import CategoryBreakDowm from "./CategoryBreakDown";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
};
const currencies = [
  {
    value: "Metric8",
    label: "Metric",
  },
  {
    value: "Greater Then",
    label: "€1",
  },
  {
    value: "BTC",
    label: "฿1",
  },
  {
    value: "JPY",
    label: "¥1",
  },
];

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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

const Jmmyethinsights = () => {
  const [open, setOpen] = React.useState(false);
  const OpenModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [checked, setChecked] = React.useState(true);
  const [currency, setCurrency] = React.useState("Metric8");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
              variant="contained"
              sx={{ textTransform: "none" }}
              key="All"
            >
              Insights
            </Button>
            <Button
              onClick={() => {
                navigate("/users/j1mmyethcollection");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="15m"
            >
              My Collection
            </Button>

            <Button
              onClick={() => {
                navigate("/users/j1mmyethprofitloss");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="30m"
            >
              Profit/Loss
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
      <br />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box sx={{ color: "#4D4D4D" }} component="span">
              Top NFTs
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project</TableCell>
                <TableCell align="right">Method</TableCell>
                <TableCell align="right">Paid</TableCell>
                <TableCell align="right">Eth Price</TableCell>
                <TableCell align="right">Gas Cost</TableCell>
                <TableCell>Total Cost</TableCell>
                <TableCell align="right">Current Floor</TableCell>
                <TableCell align="right">Current Value</TableCell>
                <TableCell align="right">P/L</TableCell>
                <TableCell align="right">%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
        <Grid container justify="flex-end">
          <Grid item xs>
            <Box sx={{ color: "#4D4D4D" }} component="span">
              Project Volume
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
          <CalendarToday sx={{ color: "#1A9DFC" }} />
        </Grid>
      </Container>

      <Container maxWidth="false">
        <ProjectVolume height={250} />
      </Container>
      <br />
      <Container maxWidth="false">
        <Grid container justify="flex-end">
          <Grid>
            <br />
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
                  sx={{
                    color: "#FFFFFF",
                    border: "none",
                    textTransform: "none",
                  }}
                  variant="contained"
                  key="15m"
                >
                  Best Performers
                </Button>
                <Button
                  sx={{ border: "none", textTransform: "none" }}
                  key="All"
                >
                  Worst Performers
                </Button>
              </ButtonGroup>
            </Box>

            <br />

            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                <TableRow>
                  <TableCell>Trait</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total Gain</TableCell>
                  <TableCell align="right">Gain%</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              align="center"
              sx={{ color: "#6C6C6C" }}
              variant="h6"
              component="h2"
            >
              Category Breakdown
            </Typography>
            <CategoryBreakDowm
              height="300px"
              color={["#3198F9", "#3198F9", "#3198F9"]}
            />
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box sx={{ color: "#4D4D4D" }} component="span">
              Diamond Handing
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project</TableCell>
                <TableCell align="right">Days Held</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
export default Jmmyethinsights;
