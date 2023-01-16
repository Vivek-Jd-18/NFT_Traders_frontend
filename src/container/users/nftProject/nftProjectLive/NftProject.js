import React from "react";
import Index from "../../Index";

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

const data = [
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
  },
  {
    src: "https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg",
    title: "Nanopass #2135",
    id: "#27",
    icon1: "i",
    time: "30 seconds ago",
    increment: "2.688",
    price: "$17,345",
    link: "0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad",
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
  width: "100%",
  height: "100%",
});

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
  margin: "8px",
}));

const StyledCard1 = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
  margin: "8px",
  border: "1px solid #EBEBEB",
  borderRadius: "5px",
}));

const StyledCard2 = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
  margin: "8px",
  border: "1px solid #EBEBEB",
  borderRadius: "5px",
}));

const NftProjectLive = () => {
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
                      sx={{ textTransform: "none", border: "none" }}
                      key="All"
                    >
                      Insights
                    </Index.Button>
                    <Index.Button
                      onClick={() => {
                        navigate("/users/nftprojectshowall");
                      }}
                      sx={{ textTransform: "none", border: "none" }}
                      key="15m"
                    >
                      Collection
                    </Index.Button>
                    <Index.Button
                      variant="contained"
                      sx={{ border: "none", textTransform: "none" }}
                      key="30m"
                    >
                      <Index.Badge color="success" variant="dot" invisible={false}>
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
              Live
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
        <Index.Grid container spacing={3}>
          {statList.map((item, ind) => (
            <Index.Grid item md={2} xs={6}>
              <StyledCard elevation={0} sx={{ backgroundColor: "#DAF1D2" }}>
                <Index.Avatar sx={{ margin: "0px 0px 6px 0px" }} src={Index.percentage} />
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
        <Index.Grid container spacing={2}>
          <Index.Grid item xs={12} lg={6}>
            <Index.Box component="h4" sx={{ color: "#6C6C6C" }}>
              Recent Sales
            </Index.Box>
            {data.map((element) => (
              <StyledCard1 elevation={0}>
                <Index.Grid container spacing={4}>
                  <Index.Grid item lg={2.5} xs={12}>
                    <Index.Badge
                      sx={{
                        "& .MuiBadge-badge": {
                          color: "#FFFFFF",
                          backgroundColor: "#2CBC20",
                          borderRadius: "0px",
                          transform: "inherit",
                        },
                      }}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      badgeContent={"Buy"}
                    >
                      <Img1 src="https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg" />
                    </Index.Badge>
                  </Index.Grid>
                  <Index.Grid item lg={9.5} xs={12}>
                    <Index.Grid item>
                      <Index.Grid container spacing={2}>
                        <Index.Grid item xs={4}>
                          <Index.Typography variant="p">Nanopass #213</Index.Typography>
                        </Index.Grid>
                        <Index.Grid item xs={2}>
                          #27
                        </Index.Grid>
                        <Index.Grid item xs={1.5}>
                          i
                        </Index.Grid>
                        <Index.Grid item xs={4.5}>
                          30 seconds ago
                        </Index.Grid>
                      </Index.Grid>
                    </Index.Grid>
                    <Index.Grid item>2.688</Index.Grid>
                    <Index.Grid item>$17,345</Index.Grid>
                    <Index.Grid item>
                      <Index.Box
                        component="div"
                        sx={{
                          textOverflow: "ellipsis",
                          maxWidth: { xs: "125px" },
                        }}
                      >
                        0x0DFFD1ADE317d4F2daD587515B3fc4A5758783Ad
                      </Index.Box>
                    </Index.Grid>
                  </Index.Grid>
                </Index.Grid>
              </StyledCard1>
            ))}
          </Index.Grid>

          <Index.Grid item xs={12} lg={6}>
            <Index.Box component="h4" sx={{ color: "#6C6C6C" }}>
              Recent Listings
            </Index.Box>
            {data.map((element) => (
              <StyledCard2 elevation={0}>
                <Index.Grid container spacing={4}>
                  <Index.Grid item lg={2.5} xs={12}>
                    <Index.Badge
                      sx={{
                        "& .MuiBadge-badge": {
                          color: "#FFFFFF",
                          backgroundColor: "#BA0711",
                          borderRadius: "0px",
                          transform: "inherit",
                        },
                      }}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      badgeContent={"Listed"}
                    >
                      <Img1 src="https://www.teahub.io/photos/full/112-1127646_nature-wallpaper-portrait-full-hd.jpg" />
                    </Index.Badge>
                  </Index.Grid>
                  <Index.Grid item xs={9.5}>
                    <Index.Grid item>
                      <Index.Grid container spacing={2}>
                        <Index.Grid item lg={4} xs={12}>
                          <Index.Typography variant="p">Nanopass #213</Index.Typography>
                        </Index.Grid>
                        <Index.Grid item lg={2} xs={12}>
                          #27
                        </Index.Grid>
                        <Index.Grid item lg={1.5} xs={12}>
                          i
                        </Index.Grid>
                        <Index.Grid item lg={4.5} xs={12}>
                          30 seconds ago
                        </Index.Grid>
                      </Index.Grid>
                    </Index.Grid>
                    <Index.Grid item lg={12} xs={12}>
                      2.688
                    </Index.Grid>
                    <Index.Grid item lg={12} xs={12}>
                      $17,345
                    </Index.Grid>
                    <Index.Grid item lg={12} xs={12}>
                      <Index.Button
                        sx={{
                          boxShadow: "none",
                          backgroundColor: "#3198F9",
                          minWidth: "150px",
                          textTransform: "none",
                        }}
                        variant="contained"
                      >
                        Quick Buy
                      </Index.Button>
                    </Index.Grid>
                  </Index.Grid>
                </Index.Grid>
              </StyledCard2>
            ))}
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
    </>
  );
};
export default NftProjectLive;