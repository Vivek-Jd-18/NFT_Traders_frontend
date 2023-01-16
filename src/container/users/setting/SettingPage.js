import React from "react";
import Index from "../Index";

const SettingPage = () => {
//#region States
  const [currency, setCurrency] = React.useState("Metric8");
  const [checked, setChecked] = React.useState(true);
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
// #endregion

//#region Methods
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }
  const rows = [createData("452374980", "February 6, 2022", "Floor")];
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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

  // #endregion

  return (
    <>
      <Index.Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "25px",
        }}
      >
        <Index.Box
          component="span"
          sx={{
            color: "#1F1F1F",
            padding: "10px 21px 10px 0px",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          SETTINGS
        </Index.Box>
      </Index.Box>
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
                <Index.TableCell>Member ID</Index.TableCell>
                <Index.TableCell align="right">Member Since</Index.TableCell>
                <Index.TableCell align="right">Default Portfolio Pricing</Index.TableCell>
                <Index.TableCell align="right">Push Notification</Index.TableCell>
                <Index.TableCell align="right">News Alert</Index.TableCell>
                <Index.TableCell align="right">Currency</Index.TableCell>
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
                  <Index.TableCell align="right">
                    {" "}
                    <Index.FormControlLabel
                      control={<IOSSwitchGreen defaultChecked />}
                    />
                  </Index.TableCell>
                  <Index.TableCell align="right">
                    <Index.FormControlLabel
                      control={<IOSSwitchGreen defaultChecked />}
                    />
                  </Index.TableCell>
                  <Index.TableCell align="right">
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
                  </Index.TableCell>
                </Index.TableRow>
              ))}
            </Index.TableBody>
          </Index.Table>
        </Index.TableContainer>
      </Index.Container>
      <br />
      <br />
      <br />
      <br />
      <Index.Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "25px",
        }}
      >
        <Index.Grid container spacing={2}>
          <Index.Grid item xs={12} md={9}>
            <Index.Box
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              HELP + SUPPORT
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3}>
            <Index.Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "38px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Submit Help Ticket
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <br />
      <Index.Container maxWidth="false">
        <Index.Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "6px",
            height: "38px",
            background: "#3198F9 0% 0% no-repeat padding-box",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          Disconnect Metamask
        </Index.Button>
      </Index.Container>
    </>
  );
};
export default SettingPage;
