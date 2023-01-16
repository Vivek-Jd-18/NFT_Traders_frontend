import React from "react";
import Index from "../Index";

function createData(name, calories) {
  return { name, calories };
}
const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
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

const Calendar = () => {
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
              borderRight={2}
              borderColor="black"
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              CALENDAR
            </Index.Box>
            <Index.Box
              component="span"
              sx={{ color: "#6C6C6C", margin: "0px 0px 0px 15px" }}
            >
              Your own personal calendar for upcoming drops and announcements
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "35px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Add Your Own
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={2}>
          <Index.Grid item xs={12} md={8}>
            <Index.CalendarImg />
          </Index.Grid>
          <Index.Grid item xs={12} md={4}>
            <Index.Container maxWidth="false">
              <Index.Typography>Today Drops</Index.Typography>
              <Index.TableContainer component={Index.Paper}>
                <Index.Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                    <Index.TableRow>
                      <Index.TableCell>Today Drops</Index.TableCell>
                      <Index.TableCell align="right">Drop Times</Index.TableCell>
                    </Index.TableRow>
                  </Index.TableHead>
                  <Index.TableBody>
                    {rows.map((row) => (
                      <Index.TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <Index.TableCell component="th" scope="row">
                          {row.name}
                        </Index.TableCell>
                        <Index.TableCell align="right">{row.calories}</Index.TableCell>
                      </Index.TableRow>
                    ))}
                  </Index.TableBody>
                </Index.Table>
              </Index.TableContainer>
            </Index.Container>
            <br />
            <Index.Container maxWidth="false">
              <Index.Typography>Tomorrows Drops</Index.Typography>
              <Index.TableContainer component={Index.Paper}>
                <Index.Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                    <Index.TableRow>
                      <Index.TableCell>Tomorrows Drops</Index.TableCell>
                      <Index.TableCell align="right">Drop Times</Index.TableCell>
                    </Index.TableRow>
                  </Index.TableHead>
                  <Index.TableBody>
                    {rows.map((row) => (
                      <Index.TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <Index.TableCell component="th" scope="row">
                          {row.name}
                        </Index.TableCell>
                        <Index.TableCell align="right">{row.calories}</Index.TableCell>
                      </Index.TableRow>
                    ))}
                  </Index.TableBody>
                </Index.Table>
              </Index.TableContainer>
            </Index.Container>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
    </>
  );
};

export default Calendar;
