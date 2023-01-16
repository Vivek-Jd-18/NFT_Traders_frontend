import React, { useState } from "react";
import Index from "../../Index";

const Img = Index.styled("img")({
  width: "100%",
  maxHeight: "261px",
  borderRadius: "6px",
  objectFit: "contain",
});

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "15px",
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const paymentTermList = [
  "NET 15",
  "NET 30",
  "NET 45",
  "NET 60",
  "Due end of the month",
  "Due on receive",
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

const NftProjectSale = () => {
//#region States
  const theme = Index.useTheme();
  const navigate = Index.useNavigate();
  const [age, setAge] = useState("");
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
        padding: "25px",
        }}
    >
        <Index.Grid container spacing={2}>
            <Index.Grid item lg xs md>
            <Index.Box
                component="span"
                sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
                }}
                variant="h4"
            >
                NFT PROJECT
            </Index.Box>
            </Index.Grid>
            <Index.Grid item lg={1.5} md={1.5} xs={12}>
            <Index.Button
                fullWidth
                variant="contained"
                sx={{
                borderRadius: "6px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                fontSize: "10px",
                textTransform: "none",
                boxShadow: "none",
                }}
            >
                Daily
            </Index.Button>
            </Index.Grid>
            <Index.Grid item md={1.5} lg={1.5} xs={12}>
            <Index.Button
                fullWidth
                variant="contained"
                sx={{
                borderRadius: "6px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                fontSize: "10px",
                textTransform: "none",
                boxShadow: "none",
                }}
            >
                Add Widget
            </Index.Button>
            </Index.Grid>
        </Index.Grid>
    </Index.Box>

    <Index.Container sx={{ mt: 2 }} maxWidth="false">
        <Index.Grid container spacing={2}>
          <Index.Grid item xs={12} lg={1.5}>
            <Img src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
          </Index.Grid>
          <Index.Grid sx={{ mt: 2 }} item lg={7.5}>
            <Index.Grid container spacing={0.5}>
              <Index.Grid item xs={12} lg={12}>
                <Index.Box
                  className="nft-project-headrer-text "
                  sx={{ display: "inline" }}
                  component="h2"
                >
                  Project Nanopass
                </Index.Box>
                <Index.Box sx={{ display: { lg: "inline" } }}>
                  <Index.Button
                    className="nft-project-headrer-id-button"
                    sx={{
                      color: "#4D4D4D",
                      backgroundColor: "#F5F5F5",
                      border: "none",
                      mx: 1,
                    }}
                    key="22"
                  >
                    #27
                  </Index.Button>
                  <Index.Button
                    className="nft-project-headrer-id-button"
                    sx={{
                      color: "#4D4D4D",
                      backgroundColor: "#F5F5F5",
                      textTransform: "none",
                      border: "none",
                    }}
                    key="16m"
                  >
                    Royalty 5%
                  </Index.Button>
                </Index.Box>
              </Index.Grid>

              <Index.Grid item xs={12} lg={12}>
                <Index.Box
                  className="nft-project-headrer-small-text "
                  sx={{ textTransform: "none" }}
                >
                  This is an explanation of the project, it will most likely be
                  around 100 to 250 words for each project.
                </Index.Box>
              </Index.Grid>
              <Index.Grid item xs={12} lg={12}>
                <Index.Box
                  className="nft-project-headrer-text-contact-address"
                  sx={{ display: { lg: "inline" } }}
                  variant="h4"
                >
                  CONTRACT ADDRESS
                </Index.Box>
                <Index.Box
                  className="nft-project-headrer-text-address-id"
                  sx={{ display: { lg: "inline" }, m: 1 }}
                  component="span"
                >
                  98272u29u09289wd2uhw29uh2iwuhuiw2h9w2
                </Index.Box>
              </Index.Grid>
              <Index.Grid item xs={12} lg={12}>
                <div>
                  <Index.Box
                    className="nft-project-headrer-text-date"
                    sx={{ color: "#6C6C6C" }}
                    component="span"
                  >
                    Mint Date: 12-Dec-2021
                  </Index.Box>
                  <Index.Box
                    className="nft-project-headrer-text-day-count"
                    sx={{ color: "#6C6C6C", display: "inline" }}
                  >
                    145 Days Ago
                  </Index.Box>
                </div>
              </Index.Grid>
              <Index.Grid item xs={12} lg={12}>
                <Index.Box>
                  <Index.ButtonGroup
                    fullWidth
                    size="small"
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
                        navigate("/users/nftprojectshowall");
                      }}
                      sx={{
                        color: "#4D4D4D",
                        border: "none",
                        textTransform: "none",
                      }}
                      key="17m"
                    >
                      Collection
                    </Index.Button>
                    <Index.Button
                      onClick={() => {
                        navigate("/users/nftprojectlive");
                      }}
                      sx={{
                        color: "#4D4D4D",
                        border: "none",
                        textTransform: "none",
                      }}
                      key="36"
                    >
                      <Index.Badge
                        color="success"
                        variant="dot"
                        invisible={false}
                      >
                        Live
                      </Index.Badge>
                    </Index.Button>
                  </Index.ButtonGroup>
                </Index.Box>
              </Index.Grid>
            </Index.Grid>
          </Index.Grid>
          <Index.Grid item xs={6} lg={1.5}>
            <Index.Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "6px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                fontSize: "10px",
                padding: "10px",
                boxShadow: "none",
                maxHeight: "29px",
              }}
            >
              Add to Watchlist
            </Index.Button>
          </Index.Grid>
          <Index.Grid item xs={6} lg={1.5}>
            <Index.Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "6px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                fontSize: "10px",
                boxShadow: "none",
              }}
            >
              Set Alert
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <br />
      <Index.Container maxWidth="false" sx={{ color: "#6C6C6C" }}>
        Overview
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={3}>
          {statList.map((item, ind) => (
            <Index.Grid item md={2} xs={6}>
              <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                <Index.Avatar
                  sx={{ margin: "0px 0px 6px 0px" }}
                  src={Index.percentage}
                />
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
              Sales
            </Index.Button>
            <Index.Button
              onClick={() => {
                navigate("/users/nftprojectlisting");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="18m"
            >
              Listing
            </Index.Button>
            <Index.Button
              onClick={() => {
                navigate("/users/nftprojectowners");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="31m"
            >
              Owners
            </Index.Button>
            <Index.Button
              onClick={() => {
                navigate("/users/nftprojectsocial");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="32"
            >
              Social
            </Index.Button>
          </Index.ButtonGroup>
        </Index.Box>
      </Index.Container>
      <br />
      <br />
      <Index.Container maxWidth="false" sx={{ color: "#6C6C6C" }}>
        Overall
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={3}>
          {statList.map((item, ind) => (
            <Index.Grid item md={2} xs={6}>
              <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                <Index.Avatar
                  sx={{ margin: "0px 0px 6px 0px" }}
                  src={Index.percentage}
                />
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
              1D Sales
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="19m">
                15m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="33m">
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
                sx={{ border: "none", textTransform: "none" }}
                key="All"
              >
                All
              </Index.Button>
              <Index.CalendarToday sx={{ color: "#1A9DFC", m: 1 }} />
            </Index.ButtonGroup>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>

      <Index.Container maxWidth="false">
        <Index.OnedSaleChart height={300} />
        <Index.Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "space-between",
          }}
        >
          <Index.Box sx={{ flexGrow: 1, color: "#9D9D9D" }}>
            01 Sep, 2022
          </Index.Box>
          <Index.Box sx={{ color: "#9D9D9D" }}>01 Oct, 2022</Index.Box>
        </Index.Box>
      </Index.Container>
      <Index.Container sx={{ mt: 1 }}>
        <Index.Box sx={{ display: "flex" }}>
          <Index.Box sx={{ color: "#4D4D4D" }} component="span">
            Floor Price
          </Index.Box>
          <Index.Box sx={{ flexGrow: 1 }} />
          <Index.Button
            sx={{ color: "#6C6C6C", textTransform: "none", letterSpacing: 0 }}
          >
            Interval
          </Index.Button>
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
        </Index.Box>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={3}>
          {statList.map((item, ind) => (
            <Index.Grid item md={2} xs={6}>
              <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                <Index.Avatar
                  sx={{ margin: "0px 0px 6px 0px" }}
                  src={Index.percentage}
                />
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
              Floor Price
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="20m">
                15m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="34m">
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
                sx={{ border: "none", textTransform: "none" }}
                key="All"
              >
                All
              </Index.Button>
              <Index.CalendarToday sx={{ color: "#1A9DFC", m: 1 }} />
            </Index.ButtonGroup>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <Index.Container maxWidth="false">
        <Index.FloorPriceChart height={300} />
        <Index.Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "space-between",
          }}
        >
          <Index.Box sx={{ flexGrow: 1, color: "#9D9D9D" }}>
            01 Sep, 2022
          </Index.Box>
          <Index.Box sx={{ color: "#9D9D9D" }}>01 Oct, 2022</Index.Box>
        </Index.Box>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container>
          <Index.Grid item xs>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Sales
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
              aria-label="small button group"
            >
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="21m">
                15m
              </Index.Button>
              <Index.Button sx={{ color: "#4D4D4D", border: "none" }} key="35m">
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
                sx={{ border: "none", textTransform: "none" }}
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
        <Index.Grid container spacing={3}>
          {statList.map((item, ind) => (
            <Index.Grid item md={2} xs={6}>
              <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                <Index.Avatar
                  sx={{ margin: "0px 0px 6px 0px" }}
                  src={Index.percentage}
                />
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
      <Index.Container sx={{ my: 2 }}>
        <Index.Box sx={{ color: "#4D4D4D" }} component="span">
          Sales
        </Index.Box>
      </Index.Container>
      <Index.Container maxWidth="false">
        <Index.ApexChart height={350} />
        <Index.Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "space-between",
          }}
        >
          <Index.Box sx={{ flexGrow: 1, color: "#9D9D9D" }}>
            01 Sep, 2022
          </Index.Box>
          <Index.Box sx={{ color: "#9D9D9D" }}>01 Oct, 2022</Index.Box>
        </Index.Box>
      </Index.Container>
      <br />

      <Index.Container maxWidth="false">
        <Index.Grid container spacing={4}>
          <Index.Grid item xs={12} md={6} lg={6}>
            <Index.ButtonGroup
              size="small"
              fullWidth
              sx={{ backgroundColor: "#F5F5F5", outline: "none" }}
              aria-label="small button group"
            >
              <Index.Button
                sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
                key="30d"
              >
                Top Selling Traits
              </Index.Button>
              <Index.Button
                variant="contained"
                sx={{ border: "none", textTransform: "none" }}
                key="All"
              >
                Highest Volume Traits
              </Index.Button>
            </Index.ButtonGroup>

            <Index.TableContainer
              sx={{
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

                mt: 3,
              }}
              component={Index.Paper}
            >
              <Index.Table aria-label="simple table">
                <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                  <Index.TableRow>
                    <Index.TableCell>Trait</Index.TableCell>
                    <Index.TableCell align="right">Sales</Index.TableCell>
                    <Index.TableCell align="right">Average</Index.TableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <Index.TableRow key={row.name}>
                      <Index.TableCell component="th" scope="row">
                        {row.name}
                      </Index.TableCell>
                      <Index.TableCell align="right">
                        {row.calories}
                      </Index.TableCell>
                      <Index.TableCell align="right">{row.fat}</Index.TableCell>
                    </Index.TableRow>
                  ))}
                </Index.TableBody>
              </Index.Table>
            </Index.TableContainer>
          </Index.Grid>

          <Index.Grid item xs={12} md={6} lg={6} sx={{mb:3}}>
            <Index.ButtonGroup
              size="small"
              fullWidth
              sx={{ backgroundColor: "#F5F5F5", outline: "none" }}
              aria-label="small button group"
            >
              <Index.Button
                sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
                key="30d"
              >
                Lowest Selling Traits
              </Index.Button>
              <Index.Button
                variant="contained"
                sx={{ border: "none", textTransform: "none" }}
                key="All"
              >
                Lowest Volume Traits
              </Index.Button>
            </Index.ButtonGroup>

            <Index.TableContainer
              sx={{
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

                mt: 3,
              }}
              component={Index.Paper}
            >
              <Index.Table aria-label="simple table">
                <Index.TableHead sx={{ backgroundColor: "#F5F5F5" }}>
                  <Index.TableRow>
                    <Index.TableCell>Trait</Index.TableCell>
                    <Index.TableCell align="right">Sales</Index.TableCell>
                    <Index.TableCell align="right">Average</Index.TableCell>
                  </Index.TableRow>
                </Index.TableHead>
                <Index.TableBody>
                  {rows.map((row) => (
                    <Index.TableRow key={row.name}>
                      <Index.TableCell component="th" scope="row">
                        {row.name}
                      </Index.TableCell>
                      <Index.TableCell align="right">
                        {row.calories}
                      </Index.TableCell>
                      <Index.TableCell align="right">{row.fat}</Index.TableCell>
                    </Index.TableRow>
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
export default NftProjectSale;
