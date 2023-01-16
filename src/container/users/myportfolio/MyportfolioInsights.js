import React from "react";
import Index from "../Index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", lg: 500 },
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

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "15px",
}));

const MyportfolioInsights = () => {
 //#region States   
  const navigate = Index.useNavigate();
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [currency, setCurrency] = React.useState("Metric8");
 // #endregion

 // #region Methods
  const OpenModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // #endregion

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
              variant="contained"
              sx={{ textTransform: "none" }}
              key="All"
            >
              Insights
            </Index.Button>
            <Index.Button
              onClick={() => {
                navigate("/users/myportfoliocollection");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="15m"
            >
              My Collection
            </Index.Button>

            <Index.Button
              onClick={() => {
                navigate("/users/myportfolioprofitloss");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="30m"
            >
              Profit/Loss
            </Index.Button>
          </Index.ButtonGroup>
        </Index.Box>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container>
          <Index.Grid item xs={12} md={6.5}>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Your Portfolio
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={2}>
            <Index.Button
              onClick={OpenModal}
              variant="contained"
              size="small"
              sx={{
                borderRadius: "6px",
                textTransform: "none",
                background: "#3198F9",
                boxShadow: "none",
              }}
            >
              Add Staked NFTs
            </Index.Button>
            <Index.Modal
              open={open}
              onClose={closeModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Index.Box sx={style}>
                <Index.Grid container rowSpacing={5} columnSpacing={3}>
                  <Index.Grid item xs={12} sm={6} md={12}>
                    <Index.Typography variant="h6" sx={{ color: "#676767" }}>
                      Add Staked NFT
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={12} sm={6} md={12}>
                    <Index.Typography variant="p" sx={{ color: "#676767" }}>
                      Add project
                    </Index.Typography>
                    <Index.TextField
                      fullWidth
                      size="small"
                      id="outlined-select-currency"
                      select
                      sx={{
                        background: "#F5F5F5",
                        color: "#919191",
                      }}
                      value={currency}
                      onChange={handleChange}
                    >
                      {currencies.map((option) => (
                        <Index.MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </Index.MenuItem>
                      ))}
                    </Index.TextField>
                  </Index.Grid>

                  <Index.Grid item xs={122} sm={12} md={12}>
                    <Index.Typography variant="p" sx={{ color: "#676767" }}>
                      Select NFT
                    </Index.Typography>
                    <Index.TextField
                      fullWidth
                      size="small"
                      select
                      sx={{
                        background: "#F5F5F5",
                        color: "#919191",
                      }}
                      value={currency}
                      onChange={handleChange}
                    >
                      {currencies.map((option) => (
                        <Index.MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </Index.MenuItem>
                      ))}
                    </Index.TextField>
                  </Index.Grid>
                  <Index.Grid item xs={12} sm={6} md={6}>
                    <Index.Button
                      onClick={closeModal}
                      variant="contained"
                      sx={{
                        color: "#6C6C6C",
                        borderRadius: "6px",
                        boxShadow: "none",
                        height: "35px",
                        width: "100%",
                        background: "#F5F5F5",
                        textTransform: "none",
                      }}
                    >
                      Cancel
                    </Index.Button>
                  </Index.Grid>
                  <Index.Grid item xs={12} sm={6} md={6}>
                    <Index.Button
                      onClick={OpenModal}
                      variant="contained"
                      sx={{
                        borderRadius: "6px",
                        boxShadow: "none",
                        height: "35px",
                        width: "100%",
                        background: "#2183E3",
                        textTransform: "none",
                      }}
                    >
                      Add Alert
                    </Index.Button>
                  </Index.Grid>
                </Index.Grid>
              </Index.Box>
            </Index.Modal>
          </Index.Grid>
          <Index.Grid item xs={12} md={3}>
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
        <Index.TableContainer
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "600px",
              md: "800px",
              lg: "900px",
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
            <Index.TableHead>
              <Index.TableRow>
                <Index.TableCell>Your NFTs</Index.TableCell>
                <Index.TableCell align="right">Method</Index.TableCell>
                <Index.TableCell align="right">Paid</Index.TableCell>
                <Index.TableCell align="right">Eth Price</Index.TableCell>
                <Index.TableCell align="right">Gas Cost</Index.TableCell>
                <Index.TableCell align="right">Total Cost</Index.TableCell>
                <Index.TableCell align="right">Current Floor</Index.TableCell>
                <Index.TableCell align="right">Current Value</Index.TableCell>
                <Index.TableCell align="right">P/L</Index.TableCell>
                <Index.TableCell align="right">%</Index.TableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {rows.map((row) => (
                <Index.TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Index.TableCell component="th" scope="row">
                    {row.name}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.calories}</Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.protein}</Index.TableCell>
                </Index.TableRow>
              ))}
            </Index.TableBody>
          </Index.Table>
        </Index.TableContainer>
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
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Project Volume
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
          <Index.CalendarToday sx={{ color: "#1A9DFC" }} />
        </Index.Grid>
      </Index.Container>

      <Index.Container maxWidth="false">
        <Index.ProjectVolume height={250} />
        <Index.Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "space-between",
          }}
        >
          <Index.Box sx={{ flexGrow: 1, color: "#9D9D9D" }}>01 Sep, 2022</Index.Box>
          <Index.Box sx={{ color: "#9D9D9D" }}>01 Oct, 2022</Index.Box>
        </Index.Box>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container justify="flex-end">
          <Index.Grid>
            <Index.Typography sx={{ color: "#6C6C6C" }} variant="h6" component="h2">
              Recent Whale Sales
            </Index.Typography>
            <br />
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
                    navigate("/users/nftprojectsales");
                  }}
                  sx={{
                    color: "#FFFFFF",
                    border: "none",
                    textTransform: "none",
                  }}
                  variant="contained"
                  key="15m"
                >
                  Best Performers
                </Index.Button>
                <Index.Button
                  sx={{ border: "none", textTransform: "none" }}
                  key="All"
                >
                  Worst Performers
                </Index.Button>
              </Index.ButtonGroup>
            </Index.Box>

            <br />
            <Index.TableContainer
              sx={{
                maxWidth: {
                  xs: "300px",
                  sm: "600px",
                  md: "800px",
                  lg: "900px",
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
                    <Index.TableCell>Project</Index.TableCell>
                    <Index.TableCell align="right">Quantity</Index.TableCell>
                    <Index.TableCell align="right">Total Gain</Index.TableCell>
                    <Index.TableCell align="right">Gain%</Index.TableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <Index.TableRow key={row.name}>
                      <Index.TableCell component="th" scope="row">
                        {row.name}
                      </Index.TableCell>
                      <Index.TableCell align="right">{row.calories}</Index.TableCell>
                      <Index.TableCell align="right">{row.calories}</Index.TableCell>
                      <Index.TableCell align="right">{row.calories}</Index.TableCell>
                    </Index.TableRow>
                  ))}
                </Index.TableBody>
              </Index.Table>
            </Index.TableContainer>
          </Index.Grid>
          <Index.Grid item lg={6} md={6} sm={12} xs={12}>
            <Index.Typography
              align="center"
              sx={{ color: "#6C6C6C" }}
              variant="h6"
              component="h2"
            >
              Category Breakdown
            </Index.Typography>
            <Index.CategoryBreakDowm
              height="300px"
              color={["#3198F9", "#3198F9", "#3198F9"]}
            />
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container>
          <Index.Grid item xs={12} md={8}>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Diamond Handing
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={4}>
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
        <Index.TableContainer
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "600px",
              md: "800px",
              lg: "900px",
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
            <Index.TableHead>
              <Index.TableRow>
                <Index.TableCell>Project</Index.TableCell>
                <Index.TableCell align="right">Days Held</Index.TableCell>
                <Index.TableCell align="right">Cost</Index.TableCell>
                <Index.TableCell align="right">Value</Index.TableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {rows.map((row) => (
                <Index.TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Index.TableCell component="th" scope="row">
                    {row.name}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.calories}</Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                </Index.TableRow>
              ))}
            </Index.TableBody>
          </Index.Table>
        </Index.TableContainer>
      </Index.Container>
    </>
  );
};
export default MyportfolioInsights;
