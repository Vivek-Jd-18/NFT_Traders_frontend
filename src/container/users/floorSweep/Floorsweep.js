import * as React from "react";
import Index from "../Index";

const data = [
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
  {
    src: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "Nanopass #2135",
  },
];

const Img = Index.styled("img")({
  display: "block",
  width: "100%",
  maxHeight: "122px",
  borderRadius: "6px",
});

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
}));

const FloorSweeps = () => {
//#region Methods
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
          <Index.Grid item xs={12} md={7.5}>
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
              FLOOR SWEEPS
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
              whales are buying and selling{" "}
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3.5}>
            <Index.TextField
              fullWidth
              size="small"
              placeholder="Search By Project Name"
              sx={{
                padding: { xs: "0px 0px 0px 0px", md: "0px 0px 0px 12px" },
                background: "#FFFFFF",
              }}
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
                <Index.TableCell align="right">Username</Index.TableCell>
                <Index.TableCell align="right">Purchase</Index.TableCell>
                <Index.TableCell align="right">Price</Index.TableCell>
                <Index.TableCell align="right">Amount</Index.TableCell>
                <Index.TableCell align="right">Date</Index.TableCell>
                <Index.TableCell align="right">Time</Index.TableCell>
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
                  <Index.TableCell align="right">{row.protein}</Index.TableCell>
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
export default FloorSweeps;
