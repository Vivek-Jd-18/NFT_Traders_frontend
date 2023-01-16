import * as React from "react";
import Index from "../Index";

const data = [
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
  {
    src: Index.img2,
    title: "Nanopass #2135",
  },
];

const Img = Index.styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
  maxWidth: "250px",
  objectFit: "contain",
  border: "1px #EBEBEB solid",
}));

const Whales = () => {
  const navigate = Index.useNavigate();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("J1mmy.Eth", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <Index.Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "25px",
        }}
      >
        <Index.Grid container>
          <Index.Grid item xs={12} md={7}>
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
              WHALES
            </Index.Box>
            <Index.Box
              component="span"
              sx={{
                color: "#6C6C6C",
                fontSize: "10px",
                margin: "0px 0px 0px 15px",
              }}
            >
              Track the wallets of the biggest NFT buyers and see what the
              whales are buying and selling
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3.5}>
            <Index.TextField
              size="small"
              placeholder="Search By Username"
              sx={{ minWidth: "250px", background: "#FFFFFF" }}
            />
          </Index.Grid>
          <Index.Grid item xs={12} md={1}>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "0px 5px 5px 0px",
                height: "35px",
                background: "#3198F9",
              }}
            >
              Search
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container>
          <Index.Grid item xs={12} md={8}>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Top Tracked
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
                <Index.TableCell>Username</Index.TableCell>
                <Index.TableCell align="right">Owned</Index.TableCell>
                <Index.TableCell align="right">7 Day Volume</Index.TableCell>
                <Index.TableCell align="right">Buy/Sell</Index.TableCell>
                <Index.TableCell align="right">
                  Collection Value
                </Index.TableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {rows.map((row) => (
                <Index.TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Index.TableCell
                    onClick={() => {
                      navigate("/users/j1mmyethcollection");
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </Index.TableCell>
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
      <Index.Container
        maxWidth="false"
        sx={{ background: "#F5F5F5", padding: "20px" }}
      >
        <Index.Typography
          sx={{ color: "#6C6C6C", fontWeight: "bold" }}
          variant="p"
        >
          Recent Whale Buys
        </Index.Typography>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={5}>
          {data.map((item) => (
            <Index.Grid item xs={12} lg={2.4} md={5}>
              <StyledCard elevation={0}>
                <Index.Grid container spacing={0.5}>
                  <Index.Grid item xs={12}>
                    <Img src={item.src} />
                  </Index.Grid>
                  <Index.Grid container spacing={0.5}>
                    <Index.Grid item xs={10} md={9}>
                      <Index.Typography
                        variant="span"
                        sx={{ fontSize: "13px", fontWeight: "bold" }}
                      >
                        {item.title}
                      </Index.Typography>
                    </Index.Grid>
                    <Index.Grid item xs={10} md={3}>
                      <Index.Typography
                        variant="span"
                        sx={{ fontSize: "13px" }}
                      >
                        #27
                      </Index.Typography>
                    </Index.Grid>
                  </Index.Grid>
                  <Index.Grid container spacing={0.5}>
                    <Index.Grid item xs={10} md={9}></Index.Grid>
                    <Index.Grid item xs={10} md={3}>
                      <Index.Typography
                        variant="span"
                        sx={{ fontSize: "13px" }}
                      >
                        3.8
                      </Index.Typography>
                    </Index.Grid>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      items
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      owners
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      Floor
                    </Index.Typography>
                  </Index.Grid>

                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      5.6K
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      3.9K
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      3.9
                    </Index.Typography>
                  </Index.Grid>
                </Index.Grid>
              </StyledCard>
            </Index.Grid>
          ))}
        </Index.Grid>
      </Index.Container>
    </>
  );
};
export default Whales;
