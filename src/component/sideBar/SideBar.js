import React, { useState, useEffect } from "react";
import { styled, useTheme, createTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import image from "../../assets/images/icon-N.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../../assets/css/style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AdminLogOutAction } from "../../redux/admin/action";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 280;
const menuId = "primary-search-account-menu";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const THEME = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px 0px 0px 5px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function SideBar(props) {
 //#region States 
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:650px)");
  let dispatch = useDispatch();
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(matches);
  const [address, SetAddress] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
// #endregion

//#region Methods
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMenuLogout = () => {
    dispatch(AdminLogOutAction());
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(matches);
  };
  const handleDrawerCloseButton = () => {
    setOpen(false);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>`${address}`</MenuItem>
      <MenuItem onClick={handleMenuLogout}>Logout</MenuItem>
    </Menu>
  );
  useEffect(() => {
    SetAddress(localStorage.getItem("Address"));
    setOpen(matches);
  }, [matches]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="app-bar">
          <Toolbar sx={{ backgroundColor: "#000000" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search projects, accounts & people"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button
              sx={{
                background:
                  "transparent linear-gradient(90deg, #2992F5 0%, #3CA0FF 100%) 0% 0% no-repeat padding-box",
                borderRadius: "0px 5px 5px 0px",
                textTransform: "none",
                padding: "7.5px 22px",
              }}
              variant="contained"
            >
              Search
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ color: "#FFFFFF", textTransform: "none" }}
                variant="text"
              >
                ${address}
              </Button>
              <Button
                onClick={handleMenuLogout}
                sx={{ color: "#FFFFFF", textTransform: "none" }}
                variant="text"
              >
                Logout
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#000000",
              overflow: "hidden",
            },
            "& .MuiDrawer-paper:hover": {
              overflowY: "auto",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <IconButton onClick={handleDrawerCloseButton}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon
                sx={{ color: "#fff", margin: "19px 0px -10px 236px" }}
              />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>

          <Box
            ccomponent="img"
            sx={{
              height: 60,
              width: 218,
              margin: "-38px 0px 26px 17px",
            }}
            alt="The house from the offer."
            src={image}
          />
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/dashboard" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/dashboard" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/dashboard" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/dashboard"}
              className={
                location.pathname == "/users/dashboard"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Dashboard
            </Link>
          </Box>

          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/nftprojectsales" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/nftprojectsales" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/nftprojectsales" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/nftprojectsales"}
              className={
                location.pathname == "/users/nftprojectsales"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              NFT Project
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/nftmarket" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/nftmarket" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/nftmarket" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/nftmarket"}
              className={
                location.pathname == "/users/nftmarket"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              NFT Market
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            variant="p"
            noWrap
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/news" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/news" ? "solid" : "",
              borderLeftWidth: location.pathname == "/users/news" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/news"}
              className={
                location.pathname == "/users/news"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              News
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/watching" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/watching" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/watching" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/watching"}
              className={
                location.pathname == "/users/watching"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Watching
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/alerts" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/alerts" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/alerts" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/alerts"}
              className={
                location.pathname == "/users/alerts"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Alerts
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/compare" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/compare" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/compare" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/compare"}
              className={
                location.pathname == "/users/compare"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Compare
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/discovery" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/discovery" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/discovery" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/discovery"}
              className={
                location.pathname == "/users/discovery"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Discovery
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            variant="p"
            noWrap
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/myportfoliocollection" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/myportfoliocollection" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/myportfoliocollection" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/myportfoliocollection"}
              className={
                location.pathname == "/users/myportfoliocollection"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              My Portfolio
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            variant="p"
            noWrap
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/trending" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/trending" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/trending" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/trending"}
              className={
                location.pathname == "/users/trending"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Trending
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/collections" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/collections" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/collections" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/collections"}
              className={
                location.pathname == "/users/collections"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Collections
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/whale" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/whale" ? "solid" : "",
              borderLeftWidth: location.pathname == "/users/whale" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/whale"}
              className={
                location.pathname == "/users/whale"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Whale
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            variant="p"
            noWrap
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/minting" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/minting" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/minting" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/minting"}
              className={
                location.pathname == "/users/minting"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Minting
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/calendar" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/calendar" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/calendar" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/calendar"}
              className={
                location.pathname == "/users/calendar"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Calendar
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            noWrap
            variant="p"
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/floorsweeps" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/floorsweeps" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/floorsweeps" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/floorsweeps"}
              className={
                location.pathname == "/users/floorsweeps"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Floor Sweeps
            </Link>
          </Box>
          <Box
            onClick={handleDrawerClose}
            variant="p"
            noWrap
            sx={{
              margin: "0px 0px 15px 45px",
              borderLeftColor:
                location.pathname == "/users/settingpage" ? "#32BEF1" : "",
              borderLeftStyle:
                location.pathname == "/users/settingpage" ? "solid" : "",
              borderLeftWidth:
                location.pathname == "/users/settingpage" ? "2px" : "",
            }}
          >
            <Link
              to={"/users/settingpage"}
              className={
                location.pathname == "/users/settingpage"
                  ? "side-bar-link-selected"
                  : "side-bar-link"
              }
            >
              Settings
            </Link>
          </Box>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Box
            sx={{
              background:
                "transparent linear-gradient(90deg, #1D4395 0%, #546EB3 51%, #167BD3 87%, #007FDE 100%) 0% 0% no-repeat padding-box",
              padding: "10px",
              color: "#FFFFFF",
            }}
          >
            <marquee style={{ color: "#FFFFFF" }}>
              LIVE UPDATES Ethereum $2560USD BAYC Acquired by Larva Labs
              (pointupindex) (pointupindex)
            </marquee>
          </Box>
          <Outlet />
          {/* {location.pathname == '/users/watching' ? <Watching /> : ''}
          {location.pathname == '/users/dashboard' ? <Dashboard /> : ''}
          {location.pathname == '/users/nftmarket' ? <NftMarketplace /> : ''}
          {location.pathname == '/users/news' ? <News /> : ''}
          {location.pathname == '/users/alerts' ? <Alerts /> : ''}
          {location.pathname == '/users/compare' ? <Compare /> : ''}
          {location.pathname == '/users/discovery' ? <Discovery /> : ''}
          {location.pathname == '/users/myportfoliocollection' ? <MyportfolioCollection /> : ''}
          {location.pathname == '/users/myportfolioprofitloss' ? <MyportfolioProfitLoss /> : ''}
          {location.pathname == '/users/myportfolioinsights' ? <MyportfolioInsights /> : ''}
          {location.pathname == '/users/trending' ? <Trending /> : ''}
          {location.pathname == '/users/whale' ? <Whale /> : ''}
          {location.pathname == '/users/calendar' ? <Calander /> : ''}
          {location.pathname == '/users/nfttv' ? <NftTv /> : ''}
          {location.pathname == '/users/top100' ? <Top100 /> : ''}
          {location.pathname == '/users/bluechip' ? <BlueChip /> : ''}
          {location.pathname == '/users/minting' ? <Minting /> : ''}
          {location.pathname == '/users/collections' ? <Collections /> : ''}
          {location.pathname == '/users/collectionsindividual' ? <CollectionsIndividual /> : ''}
          {location.pathname == '/users/floorsweeps' ? <FloorSweeps /> : ''}
          {location.pathname == '/users/settingpage' ? <SettingPage /> : ''}
          {location.pathname == '/users/nftprojectsales' ? <NftProjectSale /> : ''}
          {location.pathname == '/users/nftprojectlisting' ? <NftProjectListing /> : ''}
          {location.pathname == '/users/nftprojectowners' ? <NftProjectOwners /> : ''}
          {location.pathname == '/users/nftprojectshowall' ? <NftProjectShowAll /> : ''}
          {location.pathname == '/users/nftprojectlive' ? <NftProjectLive /> : ''}
          {location.pathname == '/users/nftprojectsocial' ? <NftProjectSocial /> : ''}
          {location.pathname == '/users/j1mmyethcollection' ? <Jmmyethcollection /> : ''}
          {location.pathname == '/users/j1mmyethprofitloss' ? <Jmmyethprofitloss /> : ''}
          {location.pathname == '/users/j1mmyethinsights' ? <Jmmyethinsights /> : ''} */}
        </Main>
      </Box>
    </>
  );
}
