import React from "react";
import Index from "../Index";

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

const Discovery = () => {
//#region States
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showResults, setShowResults] = React.useState(false);
  const [currency, setCurrency] = React.useState("Metric8");
  const [Greater, setGreater] = React.useState("Greater Then");
  const open = Boolean(anchorEl);
// #endregion

//#region Methods
  const showTable = () => {
    setShowResults(true);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange3 = (event) => {
    setGreater(event.target.value);
  };
// #endregion

  return (
    <>
      <Index.Box sx={{ background: "#F5F5F5", padding: "25px" }}>
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box
              borderColor="black"
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
                borderRight: { xs: 0, md: 1, lg: 1 },
              }}
              variant="h4"
            >
              Discovery
            </Index.Box>
            <Index.Box
              component="span"
              sx={{
                color: "#6C6C6C",
                margin: "0px 0px 0px 15px",
                fontSize: "13px",
              }}
            >
              Discover the best projects that match your investment criteria
              faster than ever. Find those hidden gems!
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "35px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Add Alert
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />

      <Index.Container maxWidth="false">
        <Index.Grid container rowSpacing={3} columnSpacing={4}>
          <Index.Grid item xs={12} sm={12} md={12}>
            <Index.Typography>Discover Projects Where</Index.Typography>
          </Index.Grid>
          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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
          <Index.Grid item sx={{ textAlign: "center" }} xs={0.5} sm={0.5} md={0.5}>
            <span>is</span>
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-size-small"
              defaultValue="1000"
              style={{
                backgroundColor: "#F5F5F5",
              }}
            />
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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

          <Index.Grid item sx={{ textAlign: "center" }} xs={0.5} sm={0.5} md={0.5}>
            <span>is</span>
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-size-small"
              defaultValue="50"
              style={{
                backgroundColor: "#F5F5F5",
              }}
            />
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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
          <Index.Grid item sx={{ textAlign: "center" }} xs={0.5} sm={0.5} md={0.5}>
            <span>is</span>
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-size-small"
              defaultValue="7777"
              style={{
                backgroundColor: "#F5F5F5",
              }}
            />
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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
          <Index.Grid item sx={{ textAlign: "center" }} xs={0.5} sm={0.5} md={0.5}>
            <span>is</span>
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              style={{
                backgroundColor: "#F5F5F5",
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

          <Index.Grid item xs={12} sm={12} md={3.7}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-size-small"
              defaultValue="3"
              style={{
                backgroundColor: "#F5F5F5",
              }}
            />
          </Index.Grid>
          <Index.Grid item xs={12} sm={12} md={12}>
            <Index.Button
              sx={{
                textTransform: "none",
                backgroundColor: "#F5F5F5",
                width: "100%",
                color: "#5A5A5A",
              }}
            >
              Add Filter
            </Index.Button>
          </Index.Grid>
          <Index.Grid item xs={12} sm={12} md={12}>
            <Index.Button
              variant="contained"
              onClick={showTable}
              sx={{
                borderRadius: "6px",
                height: "35px",
                width: "100%",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
              }}
            >
              Discover Projects
            </Index.Button>{" "}
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        {showResults ? (
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
              <Index.TableHead>
                <Index.TableRow>
                  <Index.TableCell>Project</Index.TableCell>
                  <Index.TableCell align="right">Volume</Index.TableCell>
                  <Index.TableCell align="right">Owner %</Index.TableCell>
                  <Index.TableCell align="right">NFTs</Index.TableCell>
                  <Index.TableCell align="right">Floor</Index.TableCell>
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
                    <Index.TableCell align="right">{row.protein}</Index.TableCell>
                  </Index.TableRow>
                ))}
              </Index.TableBody>
            </Index.Table>
          </Index.TableContainer>
        ) : null}
      </Index.Container>
    </>
  );
};

export default Discovery;
