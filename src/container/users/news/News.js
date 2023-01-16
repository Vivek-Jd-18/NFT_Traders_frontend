import React from "react";
import Index from "../Index";

const News = () => {
  const Img1 = Index.styled("img")({
    display: "block",
    width: "100%",
    borderRadius: "6px",
  });
  const Img2 = Index.styled("img")({
    width: "100%",
  });
  const Img = Index.styled("img")({
    display: "block",
    width: "100%",
    borderRadius: "6px",
  });

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
                display: {
                  xs: "block",
                  lg: "inline-block",
                  md: "inline-block",
                },
                borderRight: { xs: 0, md: 1, lg: 1 },
              }}
              variant="h4"
            >
              NEWS
            </Index.Box>
            <Index.Box
              component="span"
              sx={{ color: "#6C6C6C", paddingLeft: { xs: 0, md: 1, lg: 1 } }}
            >
              Stay uptown date with the latest NFT news!
            </Index.Box>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container
        maxWidth="false"
        sx={{ background: "#F5F5F5", padding: "25px" }}
      >
        <Index.Grid container spacing={2}>
          <Index.Grid item md={8.5} lg={8.5} xs={12}>
            <Index.Typography
              component="p"
              sx={{ color: "#1F1F1F", fontWeight: "bold" }}
            >
              Top story
            </Index.Typography>
          </Index.Grid>
          <Index.Grid item md={3.5} lg={3.5} xs={12}>
            <Index.Typography align="left" component="p" sx={{ color: "#6C6C6C" }}>
              Gill Livingstone - Feburary 6, 2022
            </Index.Typography>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Img1 src={Index.png.crypto} />
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Typography sx={{ color: "#5A5A5A" }}>
          Yuga labs to buy Cryptopunks + Meebits
        </Index.Typography>
      </Index.Container>
      <br />
      <Index.Container
        maxWidth="false"
        sx={{ background: "#F5F5F5", padding: "20px" }}
      >
        <Index.Typography sx={{ color: "#6C6C6C", fontWeight: "bold" }} variant="p">
          Latest News
        </Index.Typography>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={4}>
          {Array.from(Array(5)).map((_, index) => (
            <Index.Grid item xs={6} md={2.4}>
              <Index.Card elevation={0}>
                <Img2 src={Index.png.appcoin} />
                <Index.Typography variant="h7" align="left">
                  Ape Coin Live!
                </Index.Typography>
              </Index.Card>
            </Index.Grid>
          ))}
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container
        maxWidth="false"
        sx={{ background: "#F5F5F5", padding: "20px" }}
      >
        <Index.Typography sx={{ color: "#6C6C6C", fontWeight: "bold" }} variant="p">
          Trending Articles
        </Index.Typography>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={4}>
          {Array.from(Array(4)).map((_, index) => (
            <Index.Grid item xs={6} md={2.4}>
              <Index.Card elevation={0}>
                <Img2 src={Index.png.appcoin} />
                <Index.Typography variant="h7" align="left">
                  Ape Coin Live!
                </Index.Typography>
              </Index.Card>
            </Index.Grid>
          ))}
        </Index.Grid>
      </Index.Container>
      <br />
      <br />
      <Index.Container
        maxWidth="false"
        sx={{ background: "#F5F5F5", padding: "20px" }}
      >
        <Index.Typography sx={{ color: "#6C6C6C", fontWeight: "bold" }} variant="p">
          Most Viewed
        </Index.Typography>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={4}>
          {Array.from(Array(4)).map((_, index) => (
            <Index.Grid item xs={6} md={2.4}>
              <Index.Card elevation={0}>
                <Img2 src={Index.png.appcoin} />
                <Index.Typography variant="h7" align="left">
                  Ape Coin Live!
                </Index.Typography>
              </Index.Card>
            </Index.Grid>
          ))}
        </Index.Grid>
      </Index.Container>
      <br />
    </>
  );
};
export default News;
