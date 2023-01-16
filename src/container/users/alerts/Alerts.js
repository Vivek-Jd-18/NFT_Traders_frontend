import React from "react";
import Index from "../Index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", lg: "500px" },
  maxWidth: "100vw",
  maxHeight: "100%",
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

const StyledTableCell = Index.styled(Index.TableCell)(({ theme }) => ({
  [`&.${Index.tableCellClasses.head}`]: {
    backgroundColor: "#F5F5F5",
    color: "#6C6C6C",
    fontWeight: "bold",
    fontSize: 10,
    padding: "10px",
  },
  [`&.${Index.tableCellClasses.body}`]: {
    fontSize: 10,
    color: "#6C6C6C",
    padding: "10px",
  },
}));

const StyledTableRow = Index.styled(Index.TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Alert = () => {
//#region States
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [currency, setCurrency] = React.useState("Metric8");
  const [Greater, setGreater] = React.useState("Greater Then");
// #endregion

//#region Methods
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "Floor Price",
      "Nanopass",
      "Greater Than",
      1.2,
      "Push Notification"
    ),
  ];

  const IOSSwitchGreen = Index.styled((props) => (
    <Index.Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#E9E9EA",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "blue",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
      backgroundColor: "#56BF64",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      //   transition: theme.transitions.create(["background-color"], {
      //     duration: 500,
      //   }),
    },
  }));

  const IOSSwitchRed = Index.styled((props) => (
    <Index.Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#E9E9EA",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "blue",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
      backgroundColor: "#FF2929",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      //   transition: theme.transitions.create(["background-color"], {
      //     duration: 500,
      //   }),
    },
  }));

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange3 = (event) => {
    setGreater(event.target.value);
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
        <Index.Grid container>
          <Index.Grid item xs={12} md={1.5} lg={1.5} sm={12}>
            <Index.Box
              component="span"
              sx={{
                padding: { xs: "0px", md: "11px", lg: "11px" },
                color: "#1F1F1F",
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
              ALERTS
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={10.5} lg={10.5} sm={12}>
            <Index.Box component="span" sx={{ color: "#6C6C6C" }}>
              Never miss another opportunity! Set alerts to be sent via SMS,
              push notification and email.
            </Index.Box>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>

      <br />
      <Index.Container maxWidth="false">
        <Index.Grid>
          <Index.Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              borderRadius: "6px",
              height: "35px",
              width: "100%",
              background: "#3198F9 0% 0% no-repeat padding-box",
              textTransform: "none",
            }}
          >
            Create New Alert
          </Index.Button>
        </Index.Grid>
        <Index.Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Index.Box sx={style}>
            <Index.Grid container rowSpacing={2} columnSpacing={2}>
              <Index.Grid item xs={12} sm={6} md={12}>
                <Index.Typography variant="h6" sx={{ color: "#676767" }}>
                  Alert Type
                </Index.Typography>
              </Index.Grid>
              <Index.Grid item xs={12} sm={6} md={6}>
                <Index.Typography variant="p" sx={{ color: "#676767" }}>
                  Alert me when…
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

              <Index.Grid item xs={12} sm={6} md={6}>
                <Index.Typography variant="p" sx={{ color: "#676767" }}>
                  for
                </Index.Typography>
                <Index.TextField
                  fullWidth
                  size="small"
                  id="outlined-size-small"
                  defaultValue="1000"
                  sx={{
                    background: "#F5F5F5",
                    color: "#919191",
                  }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} sm={6} md={6}>
                <Index.Typography variant="p" sx={{ color: "#676767" }}>
                  is
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

              <Index.Grid item xs={12} sm={6} md={6}>
                <br />
                <Index.TextField
                  fullWidth
                  defaultValue="1000"
                  size="small"
                  sx={{
                    background: "#F5F5F5",
                    textcolor: "#919191",
                  }}
                />
              </Index.Grid>

              <Index.Grid item xs={12} sm={12} md={12}>
                <Index.Typography variant="p" sx={{ color: "#676767" }}>
                  By
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
                  onClick={handleClose}
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
                  onClick={handleOpen}
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
      </Index.Container>

      <br />
      <Index.Box sx={{ padding: { md: "25px", lg: "25px", xs: "0px" } }}>
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
            ></Index.Box>
            <Index.Box
              component="span"
              sx={{
                color: "#1F1F1F",
                margin: "0px 0px 0px 15px",
                fontWeight: "bold",
              }}
            >
              My Alerts
            </Index.Box>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>

      <br />

      <Index.Container maxWidth="false">
        <Index.Grid container rowSpacing={4} columnSpacing={8}>
          <Index.Grid item xs={12} sm={12} md={6} lg={6}>
            <Index.TableContainer
              className="table-scroll"
              elevation={0}
              sx={{
                maxWidth: {
                  xs: "calc(95% + 0px)",
                  sm: "calc(100% + 0px)",
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
                    <StyledTableCell>Metric</StyledTableCell>
                    <StyledTableCell align="center">Project</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Value</StyledTableCell>
                    <StyledTableCell align="center">Alert Type</StyledTableCell>
                    <StyledTableCell align="center">On/Off</StyledTableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {" "}
                        <Index.FormControlLabel
                          control={<IOSSwitchGreen defaultChecked />}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </Index.TableBody>
              </Index.Table>
            </Index.TableContainer>
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={6} lg={6}>
            {/* {/ <Item>1</Item> /} */}
            <Index.TableContainer
              elevation={0}
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
              <Index.Table aria-label="simple table">
                <Index.TableHead>
                  <Index.TableRow>
                    <StyledTableCell>Metric</StyledTableCell>
                    <StyledTableCell align="center">Project</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Value</StyledTableCell>
                    <StyledTableCell align="center">Alert Type</StyledTableCell>
                    <StyledTableCell align="center">On/Off</StyledTableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {" "}
                        <Index.FormControlLabel
                          control={<IOSSwitchRed defaultChecked />}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </Index.TableBody>
              </Index.Table>
            </Index.TableContainer>
          </Index.Grid>

          <Index.Grid item xs={12} sm={12} md={6} lg={6}>
            <Index.TableContainer
              elevation={0}
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
              <Index.Table aria-label="simple table">
                <Index.TableHead>
                  <Index.TableRow>
                    <StyledTableCell>Metric</StyledTableCell>
                    <StyledTableCell align="center">Project</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Value</StyledTableCell>
                    <StyledTableCell align="center">Alert Type</StyledTableCell>
                    <StyledTableCell align="center">On/Off</StyledTableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {" "}
                        <Index.FormControlLabel
                          control={<IOSSwitchGreen defaultChecked />}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </Index.TableBody>
              </Index.Table>
            </Index.TableContainer>
          </Index.Grid>
          <Index.Grid item xs={12} sm={12} md={6} lg={6}>
            <Index.TableContainer
              elevation={0}
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
              <Index.Table aria-label="simple table">
                <Index.TableHead>
                  <Index.TableRow>
                    <StyledTableCell>Metric</StyledTableCell>
                    <StyledTableCell align="center">Project</StyledTableCell>
                    <StyledTableCell align="center">Type</StyledTableCell>
                    <StyledTableCell align="center">Value</StyledTableCell>
                    <StyledTableCell align="center">Alert Type</StyledTableCell>
                    <StyledTableCell align="center">On/Off</StyledTableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {" "}
                        <Index.FormControlLabel
                          control={<IOSSwitchGreen defaultChecked />}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </Index.TableBody>
              </Index.Table>
            </Index.TableContainer>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
    </>
  );
};
export default Alert;
