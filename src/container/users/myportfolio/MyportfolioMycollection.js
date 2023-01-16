import React from "react";
import Index from "../Index";

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

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "15px",
  border: "1px solid #EBEBEB",
  borderRadius: "5px",
  maxWidth: "150px",
}));

const Img = Index.styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "6px",
});

const MyportfolioCollection = () => {
  const navigate = Index.useNavigate();

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
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              MY PORTFOLIO
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                margin: "0px 15px 0px 0px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Daily
            </Index.Button>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                height: "28px",
                background: "#3198F9 0% 0% no-repeat padding-box",
              }}
            >
              Add Widget
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Box sx={{ color: "#4D4D4D" }} component="span">
              Overall
            </Index.Box>
          </Index.Grid>
          <Index.Grid>
            <Index.ButtonGroup
              size="small"
              sx={{ backgroundColor: "#F5F5F5", outline: "none", ml: 4 }}
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
              <Index.Button variant="contained" sx={{ border: "none" }} key="All">
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
            <Index.Grid item md={2} xs={6} sm={6}>
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
                navigate("/users/myportfolioinsights");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="15m"
            >
              Insights
            </Index.Button>
            <Index.Button
              variant="contained"
              sx={{ textTransform: "none" }}
              key="All"
            >
              My Collection
            </Index.Button>
            <Index.Button
              onClick={() => {
                navigate("/users/myportfolioprofitloss");
              }}
              sx={{ color: "#4D4D4D", border: "none", textTransform: "none" }}
              key="30m"
            >
              Profit/Loss
            </Index.Button>
          </Index.ButtonGroup>
        </Index.Box>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false" sx={{ padding: "25px" }}>
        <Index.Grid container spacing={1}>
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
              My Collection
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
              }}
            >
              Rarity - Highest to Lowest
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
      </Index.Container>
      <br />
      <Index.Container maxWidth="false">
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
export default MyportfolioCollection;
