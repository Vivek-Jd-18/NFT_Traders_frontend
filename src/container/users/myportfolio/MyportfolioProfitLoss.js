import React from "react";
import Index from "../Index";

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
const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "15px",
}));

const Img = Index.styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "6px",
});

const MyportfolioProfitLoss = () => {
  const navigate = Index.useNavigate();
  return (
    <>
      <Index.Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "25px",
        }}
      >
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              MY PORTFOLIO
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                margin: "0px 15px 0px 0px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Daily
            </Index.Button>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Add Widget
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Overall
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">
                15m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">
                30m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">
                1d
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">
                7d
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">
                30d
              </Index.Button>
              <Index.Button variant="contained" sx={{ border: "none" }} key="All">
                All
              </Index.Button>
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
                    <Index.Box
                      component="span"
                      sx={{ m: 0, color: "#07447E", fontSize: "10px" }}
                    >
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
        <Index.Box>
          <Index.ButtonGroup
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#F5F5F5",
              outline: "none",
              maxWidth: "600px",
            }}
          >
            <Index.Button
              onClick={() => {
                navigate("/users/myportfolioinsights");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="15m"
            >
              Insights
            </Index.Button>
            <Index.Button
              onClick={() => {
                navigate("/users/myportfoliocollection");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="30m"
            >
              My Collection
            </Index.Button>
            <Index.Button
              variant="contained"
              sx={{ textTransform: "none" }}
              key="All"
            >
              Profit/Loss
            </Index.Button>
          </Index.ButtonGroup>
        </Index.Box>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.TableContainer
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "600px",
              md: "100%",
              lg: "100%",
            },
            "&::-webkit-scrollbar": {
              width: 10,
            },
            "&::-webkit-scrollbar": {
              height: "8px",
              width: "12px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#fff",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(224, 224, 224, 1)",
              borderRadius: "30px",
              width: "20px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#B0B0B0",
            },
          }}
          component={Index.Paper}
        >
          <Index.Table sx={{ whiteSpace: "nowrap" }} aria-label="simple table">
            <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
              <Index.TableRow>
                <Index.TableCell>Invested</Index.TableCell>
                <Index.TableCell align="right">Gas Spent</Index.TableCell>
                <Index.TableCell align="right">Total Spend (USD)</Index.TableCell>
                <Index.TableCell align="right">Current Portfolio Value</Index.TableCell>
                <Index.TableCell align="right">Total Profit/Loss (USD)</Index.TableCell>
                <Index.TableCell align="right">Profit/Loss %</Index.TableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {rows.map((row) => (
                <Index.TableRow key={row.name}>
                  <Index.TableCell component="th" scope="row">
                    {row.name}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.calories}</Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
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
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Total Profit/Loss (USD)
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="15m">
                15m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30m">
                30m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="1d">
                1d
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="7d">
                7d
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="30d">
                30d
              </Index.Button>
              <Index.Button variant="contained" sx={{ border: "none" }} key="All">
                All
              </Index.Button>
            </Index.ButtonGroup>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <Index.Container maxWidth="false">
        <Index.PortfolioLinerChart
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
      </Index.Container>
    </>
  );
};
export default MyportfolioProfitLoss;
