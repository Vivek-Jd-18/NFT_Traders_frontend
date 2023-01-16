import React, { useState, useEffect } from "react";
import Index from "../Index";

const drawerWidth = 240;
const Main = Index.styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
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
}));

const Links = () => {
//#region States
  const [open, setOpen] = useState(true);
  const [links, setLinks] = useState({
    linkedIn: "",
    twitter: "",
    instagram: "",
    youtube: "",
    discord: "",
  });
// #endregion

//#region Methods
  const handleInputChange = (event) => {
    setLinks({
      ...links,
      [event.target.name]: event.target.value,
    });
  };

  const CustomToast = () => {
    Index.toast("Updated Successfully!", {
      toastId: "success1",
    });
  };

  const CustomToastError = () => {
    Index.toast("Please enter valid data", {
      toastId: "success1",
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function urlLocate() {
    let err = {};
    let errData = [];
    err.instagram = links?.instagram;
    err.linkedIn = links?.linkedIn;
    err.twitter = links?.twitter;
    err.discord = links?.discord;
    err.youtube = links?.youtube;
    var regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    for (let key in err) {
      if (!regexp.test(links[key])) {
        errData.push(key);
      }
    }
    if (errData.length) {
      CustomToastError();
    } else {
      CustomToast();
      updateData();
    }
  }

  const getList = async () => {
    const user = await Index.DataService.get(
      Index.Api.Admin.getSocialLinks,
      {}
    );
    setLinks(user.data.data[0]);
  };
  const updateData = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("discord", links?.discord.trim());
    urlencoded.append("instagram", links?.instagram.trim());
    urlencoded.append("linkedIn", links?.linkedIn.trim());
    urlencoded.append("twitter", links?.twitter.trim());
    urlencoded.append("youtube", links?.youtube.trim());
    urlencoded.append("id", links?._id.trim());
    await Index.DataService
      .post(Index.Api.Admin.updateWebsiteLinksList, urlencoded)
      .then((res) => {
        CustomToast();
        getList();
      });
  };

  useEffect(() => {
    getList();
  }, []);
// #endregion

  return (
    <>
      <Main open={open}>
        <Index.Container maxWidth="false">
          <Index.Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            display="flex"
          >
            <Index.Grid container spacing={2}>
              <Index.Grid item xs={12} md={6}>
                <Index.Typography variant="h5" noWrap component="div">
                  Social Links
                </Index.Typography>
              </Index.Grid>
              <br />
              <br />
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="linkedIn"
                  value={links?.linkedIn}
                  onChange={handleInputChange}
                  label="linkedIn"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="twitter"
                  value={links?.twitter}
                  onChange={handleInputChange}
                  label="twitter"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="instagram"
                  value={links?.instagram}
                  onChange={handleInputChange}
                  label="instagram"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="youtube"
                  value={links?.youtube}
                  onChange={handleInputChange}
                  label="youtube"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="discord"
                  value={links?.discord}
                  onChange={handleInputChange}
                  label="discord"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.Button
                  variant="contained"
                  sx={{ backgroundColor: "#39A6FE", m: 0.2 }}
                  onClick={urlLocate}
                >
                  Save
                </Index.Button>
              </Index.Grid>
            </Index.Grid>
          </Index.Grid>
        </Index.Container>
      </Main>
    </>
  );
};
export default Links;
