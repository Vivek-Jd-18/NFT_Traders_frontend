import * as React from "react";
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

const CompareTable = () => {
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

  return (
    <>
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
          <Index.TableHead>
            <Index.TableRow>
              <Index.TableCell colSpan={1}></Index.TableCell>
              <Index.TableCell align="left">BAYC</Index.TableCell>
              <Index.TableCell colSpan={3} align="left">
                Nanopass
              </Index.TableCell>
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
                <Index.TableCell align="left">{row.calories}</Index.TableCell>
                <Index.TableCell align="left">{row.fat}</Index.TableCell>
                <Index.TableCell align="left">{row.carbs}</Index.TableCell>
                <Index.TableCell align="left">{row.protein}</Index.TableCell>
              </Index.TableRow>
            ))}
          </Index.TableBody>
        </Index.Table>
      </Index.TableContainer>
    </>
  );
};

export default function BasicModal() {
  //#region States
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [currency, setCurrency] = React.useState("Metric8");
  const [Greater, setGreater] = React.useState("Greater Then");
  const [showTable, setShowTable] = React.useState(false);
  // #endregion

  //#region Methods
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTableOpen = () => setShowTable(true);
  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };
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
              borderColor="black"
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
                borderRight: { xs: 0, md: 1, lg: 1 },
                display: {
                  xs: "block",
                  lg: "inline-block",
                  md: "inline-block",
                },
              }}
              variant="h4"
            >
              Compare Tool
            </Index.Box>
            <Index.Box
              component="span"
              sx={{ color: "#6C6C6C", ml: { xs: 0, md: 1, lg: 1 } }}
            >
              Compare NFT projects to see how two projects perform against each
              other{" "}
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
            Compare Projects
          </Index.Button>
        </Index.Grid>
        <Index.Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Index.Box sx={style}>
            <Index.Container maxWidth="false">
              <Index.Grid>
                <Index.Typography variant="h6" sx={{ color: "#676767" }}>
                  Compare Projects
                </Index.Typography>
              </Index.Grid>
            </Index.Container>
            <br />

            <Index.Container maxWidth="false">
              <Index.Grid container rowSpacing={2} columnSpacing={3}>
                {/* <Index.Grid container item spacing={3}> */}
                <Index.Grid item xs={12} sm={12} md={12}>
                  <Index.Typography sx={{ color: "#919191" }}>
                    Project 1
                  </Index.Typography>
                </Index.Grid>
                <Index.Grid item xs={12} sm={12} md={12}>
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

                <Index.Grid item xs={12} sm={12} md={12}>
                  <Index.Typography
                    sx={{ textAlign: "center", color: "#919191" }}
                    variant="h6"
                    component="h2"
                  >
                    v
                  </Index.Typography>
                </Index.Grid>
                <Index.Grid item xs={12} sm={12} md={12}>
                  <Index.Typography sx={{ color: "#919191" }}>
                    Project 2
                  </Index.Typography>
                </Index.Grid>
                <Index.Grid item xs={12} sm={12} md={12}>
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
                    Compare
                  </Index.Button>
                </Index.Grid>
              </Index.Grid>
            </Index.Container>
          </Index.Box>
        </Index.Modal>
      </Index.Container>

      <br />
      <Index.Box sx={{ padding: "25px" }}>
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box
              borderColor="black"
              component="span"
              sx={{
                borderRight: { xs: "none", lg: 2 },
                color: "#1F1F1F",
                padding: { lg: "10px 21px 10px 0px", xs: "0px" },
                fontWeight: "bold",
              }}
              variant="h4"
            ></Index.Box>
            <Index.Box
              component="span"
              sx={{ color: "#6C6C6C", margin: "0px 0px 0px 15px" }}
            >
              Add New Projects to Compare
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              onClick={handleTableOpen}
              size="small"
              variant="contained"
              sx={{
                mr: { lg: 1, xs: 0 },
                textTransform: "none",
                borderRadius: "6px",
                boxShadow: "none",
                background: "#3198F9",
              }}
            >
              Add Widget
            </Index.Button>

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
      </Index.Box>
      <Index.Container maxWidth="false">
        {showTable ? <CompareTable /> : ""}
      </Index.Container>
      <br />
    </>
  );
}
