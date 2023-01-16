import * as React from "react";
import Index from "../Index";

const paymentTermList = [
  "NET 15",
  "NET 30",
  "NET 45",
  "NET 60",
  "Due end of the month",
  "Due on receive",
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 16.0, 24, 6.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 16.0, 24, 6.0),
  createData("Eclair", 262, 16.0, 24, 6.0, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3, 16.0, 24, 6.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 16.0, 24, 6.0),
];

const Watching = () => {
  //#region States
  const [age, setAge] = React.useState("Due end of the month");
  // #endregion

  //#region Methods
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // #endregion
  
  return (
    <>
      <Index.Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "23px 20px 10px 20px",
        }}
      >
        <Index.Grid container>
          <Index.Grid item xs={12} md={1.5} lg={1.5} sm={12}>
            <Index.Box
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
                borderRight: {
                  xs: "0px",
                  lg: "1px solid black",
                  md: "1px solid black",
                  sm: "0px",
                },
              }}
              variant="h4"
            >
              WATCHING
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={9} lg={9} sm={12}>
            <Index.Box
              component="span"
              sx={{ color: "#6C6C6C", fontSize: "13px" }}
            >
              Stay upto date with your favourite projects and whales. Set alerts
              for new activity from your watch list
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={1.5} lg={1.5} sm={12}>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "35px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Add Alert
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container>
          <Index.Grid item xs={12} md={6.5} lg={6.5} sm={12}>
            <Index.Box sx={{ color: "#6C6C6C" }} component="span">
              Watching
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={2.5} lg={2.5} sm={12}>
            <Index.TextField
              sx={{ maxWidth: "150px" }}
              size="small"
              variant="outlined"
              select
              value={age}
              onChange={handleChange}
            >
              {paymentTermList.map((item, ind) => (
                <Index.MenuItem value={item} key={item}>
                  {item}
                </Index.MenuItem>
              ))}
            </Index.TextField>
          </Index.Grid>
          <Index.Grid item xs={12} md={3} lg={3} sm={12}>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none" }}
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
              <Index.Button
                variant="contained"
                sx={{ border: "none" }}
                key="All"
              >
                All
              </Index.Button>
            </Index.ButtonGroup>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.ScatterChart />
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box sx={{ color: "#6C6C6C" }} component="span">
              Projects
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none" }}
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
              <Index.Button
                variant="contained"
                sx={{ border: "none" }}
                key="All"
              >
                All
              </Index.Button>
            </Index.ButtonGroup>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.TableContainer
          elevation={0}
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
          <Index.Table aria-label="simple table">
            <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
              <Index.TableRow sx={{ whiteSpace: "nowrap" }}>
                <Index.TableCell>Project</Index.TableCell>
                <Index.TableCell align="right">Floor</Index.TableCell>
                <Index.TableCell align="right">Owners</Index.TableCell>
                <Index.TableCell align="right">NFTs</Index.TableCell>
                <Index.TableCell align="right">Owners %</Index.TableCell>
                <Index.TableCell align="right">Sales/Listing</Index.TableCell>
                <Index.TableCell align="right">Volume</Index.TableCell>
                <Index.TableCell align="right">7d %</Index.TableCell>
                <Index.TableCell align="right">14d %</Index.TableCell>
                <Index.TableCell align="right">30d %</Index.TableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {rows.map((row) => (
                <Index.TableRow
                  key={row.name}
                  sx={{
                    whiteSpace: "nowrap",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <Index.TableCell component="th" scope="row">
                    {row.name}
                  </Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.protein}</Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
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
            <Index.Box sx={{ color: "#6C6C6C" }} component="span">
              Whales Watching
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none" }}
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
              <Index.Button
                variant="contained"
                sx={{ border: "none" }}
                key="All"
              >
                All
              </Index.Button>
            </Index.ButtonGroup>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.TableContainer
          elevation={0}
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
          <Index.Table aria-label="simple table">
            <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
              <Index.TableRow sx={{ whiteSpace: "nowrap" }}>
                <Index.TableCell>Account</Index.TableCell>
                <Index.TableCell align="right">Total Portfolio</Index.TableCell>
                <Index.TableCell align="right">P/L</Index.TableCell>
                <Index.TableCell align="right">%</Index.TableCell>
                <Index.TableCell align="right">Eth Spent</Index.TableCell>
                <Index.TableCell align="right">Eth Made</Index.TableCell>
                <Index.TableCell align="right">7d %</Index.TableCell>
                <Index.TableCell align="right">14d %</Index.TableCell>
                <Index.TableCell align="right">30d %</Index.TableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {rows.map((row) => (
                <Index.TableRow
                  key={row.name}
                  sx={{
                    whiteSpace: "nowrap",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <Index.TableCell component="th" scope="row">
                    {row.name}
                  </Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
                  <Index.TableCell align="right">{row.carbs}</Index.TableCell>
                  <Index.TableCell align="right">{row.protein}</Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
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
  );
};
export default Watching;
