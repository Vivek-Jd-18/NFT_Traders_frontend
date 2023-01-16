import * as React from "react";
import Index from "../Index";

const Trending = () => {
  //#region States
  const [age, setAge] = React.useState("");
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 7),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 7),
    createData("Eclair", 262, 16.0, 24, 6.0, 8),
    createData("Cupcake", 305, 3.7, 67, 4.3, 9),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 9),
  ];
  // #endregion

  //#region Methods
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
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
              borderColor="black"
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
                borderRight: { xs: 0, lg: 1, md: 1 },
                display: {
                  xs: "block",
                  lg: "inline-block",
                  md: "inline-block",
                },
              }}
              variant="h4"
            >
              TRENDING
            </Index.Box>
            <Index.Box
              component="span"
              sx={{
                color: "#6C6C6C",
                fontSize: "12px",
                ml: { xs: 0, md: 1, lg: 1 },
              }}
            >
              Trending projects based on volume and quantity.
            </Index.Box>
            <Index.Box
              component="span"
              sx={{
                color: "#6C6C6C",
                fontSize: "12px",
                margin: "0px 0px 0px 15px",
              }}
            >
              Set alerts for when projects reach a certain volume or quantity.
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.FormControl sx={{ minWidth: 120 }} size="small">
              <Index.Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
              >
                <Index.MenuItem value="">
                  <em>None</em>
                </Index.MenuItem>
                <Index.MenuItem value={10}>Ten</Index.MenuItem>
                <Index.MenuItem value={20}>Twenty</Index.MenuItem>
                <Index.MenuItem value={30}>Thirty</Index.MenuItem>
              </Index.Select>
            </Index.FormControl>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container>
          <Index.Grid item xs={12} md={6.5}>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              By Volume
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3.5}>
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
          <Index.Grid item xs={12} md={0.5}>
            <Index.CalendarToday sx={{ color: "#1A9DFC" }} />
          </Index.Grid>
          <Index.Grid item xs={12} md={1.5}>
            <Index.Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                maxWidth: "100px",
              }}
            >
              Set Alert
            </Index.Button>
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
              <Index.TableRow>
                <Index.TableCell>Project</Index.TableCell>
                <Index.TableCell align="right">Category</Index.TableCell>
                <Index.TableCell align="right">Floor</Index.TableCell>
                <Index.TableCell align="right">7 Day Volume</Index.TableCell>
                <Index.TableCell align="right">List/Delist</Index.TableCell>
                <Index.TableCell align="right">
                  Collection Value
                </Index.TableCell>
                <Index.TableCell align="right">Quantity Bought</Index.TableCell>
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
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
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
        <Index.Grid container>
          <Index.Grid item xs={12} md={6.5}>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              By Quantity
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3.5}>
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
          <Index.Grid item xs={12} md={0.5}>
            <Index.CalendarToday sx={{ color: "#1A9DFC" }} />
          </Index.Grid>
          <Index.Grid item xs={12} md={1.5}>
            <Index.Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                maxWidth: "100px",
              }}
            >
              Set Alert
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
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
              <Index.TableRow>
                <Index.TableCell>Project</Index.TableCell>
                <Index.TableCell align="right">Category</Index.TableCell>
                <Index.TableCell align="right">Floor</Index.TableCell>
                <Index.TableCell align="right">24 Hour Volume</Index.TableCell>
                <Index.TableCell align="right">7 Day Volume</Index.TableCell>
                <Index.TableCell align="right">List/Delist</Index.TableCell>
                <Index.TableCell align="right">
                  Collection Value
                </Index.TableCell>
                <Index.TableCell align="right">Quantity Bought</Index.TableCell>
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
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
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
        <Index.Grid container>
          <Index.Grid item xs={12} md={6.5}>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Whale Owners
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3.5}>
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
          <Index.Grid item xs={12} md={0.5}>
            <Index.CalendarToday sx={{ color: "#1A9DFC" }} />
          </Index.Grid>
          <Index.Grid item xs={12} md={1.5}>
            <Index.Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                maxWidth: "100px",
              }}
            >
              Set Alert
            </Index.Button>
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
              <Index.TableRow>
                <Index.TableCell>Project</Index.TableCell>
                <Index.TableCell align="right">Category</Index.TableCell>
                <Index.TableCell align="right">Floor</Index.TableCell>
                <Index.TableCell align="right">7 Day Volume</Index.TableCell>
                <Index.TableCell align="right">List/Delist</Index.TableCell>
                <Index.TableCell align="right">
                  Collection Value
                </Index.TableCell>
                <Index.TableCell align="right">Quantity Bought</Index.TableCell>
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
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">
                    {row.calories}
                  </Index.TableCell>
                  <Index.TableCell align="right">{row.fat}</Index.TableCell>
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
export default Trending;
