import React from "react";
import Index from "../Index";

const cardName = [
  "Overall Market",
  "Blue Chip",
  "TOP 100",
  "Metaverse",
  "Play 2 Earn",
  "Utility",
  "Passes",
  "DAO",
  "PFP",
];

const NftMarketplace = () => {
  const Img = Index.styled("img")({
    padding: "31px",
    width: "100%",
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
              }}
              variant="h4"
            >
              NFT MARKET
            </Index.Box>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={3}>
          {Index.png.imageNftMarket.map((data, index) => (
            <Index.Grid item xs={6} sm={6} md={3} key={index}>
              <Index.Card
                sx={{ backgroundColor: "#DAEDFE" }}
                elevation={0}
                variant="outlined"
              >
                <Img src={data} />
                <Index.Typography
                  sx={{
                    padding: "0px 0px 12px 0px",
                    fontSize: {
                      md: "2.5vh",
                      sm: "3vh",
                      lg: "2.5vh",
                      xs: "3vh",
                    },
                  }}
                  variant="h5"
                  align="center"
                >
                  {cardName[index]}
                </Index.Typography>
              </Index.Card>
            </Index.Grid>
          ))}
        </Index.Grid>
      </Index.Container>
    </>
  );
};
export default NftMarketplace;
