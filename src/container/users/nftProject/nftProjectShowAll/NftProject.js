import React from "react";
import Index from "../../Index";

const data = [
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
  },
];

const Img = Index.styled("img")({
  width: "100%",
  maxHeight: "261px",
  borderRadius: "6px",
  objectFit: "contain",
});

const Img1 = Index.styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  opacity: 1,
});

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
  border: "1px solid #EBEBEB",
  borderRadius: "5px",
  maxWidth: "150px",
}));

const NftProjectShowAll = () => {
  const navigate = Index.useNavigate();
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
                    key="15m"
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
                    key="15m"
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
                      onClick={() => {
                        navigate("/users/nftprojectsales");
                      }}
                      sx={{
                        textTransform: "none",
                        border: "none",
                        color: "#4D4D4D",
                      }}
                      key="All"
                    >
                      Insights
                    </Index.Button>
                    <Index.Button
                      variant="contained"
                      sx={{ border: "none", textTransform: "none" }}
                      key="15m"
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
                      key="30m"
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
      <Index.Container maxWidth="false" sx={{ padding: "25px" }}>
        <Index.Grid container spacing={3}>
          <Index.Grid item xs={12} lg={6.5}>
            <Index.Box
              component="span"
              sx={{
                color: "#6C6C6C",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              Collections
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} lg={2}>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                margin: "0px 15px 0px 0px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              <Index.FilterAltIcon />
              Filter{" "}
            </Index.Button>
          </Index.Grid>
          <Index.Grid item xs={12} lg={3.5}>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Rarity - Highest To Lowest
            </Index.Button>
          </Index.Grid>
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
              onClick={() => {
                navigate("/users/nftprojectsales");
              }}
              sx={{ color: "#FFFFFF", border: "none", textTransform: "none" }}
              variant="contained"
              key="15m"
            >
              Show All
            </Index.Button>
            <Index.Button
              sx={{ border: "none", textTransform: "none" }}
              key="All"
            >
              Buy Now Only
            </Index.Button>
          </Index.ButtonGroup>
        </Index.Box>
      </Index.Container>
      <br />
      <br />
      <Index.Container maxWidth="false" sx={{ mb: 3 }}>
        <Index.Grid container spacing={5}>
          {data.map((item) => (
            <Index.Grid item xs={6} lg={2.4} md={5}>
              <StyledCard elevation={0}>
                <Index.Grid container spacing={0.5}>
                  <Index.Grid item xs={12}>
                    <Img src={item.src} />
                  </Index.Grid>
                  <Index.Grid item xs={12}>
                    <Index.Typography
                      variant="span"
                      sx={{ fontSize: "13px", fontWeight: "bold" }}
                    >
                      {item.title}
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      Rarity
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      Last
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      Price
                    </Index.Typography>
                  </Index.Grid>

                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      1
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      3
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      7
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
export default NftProjectShowAll;
