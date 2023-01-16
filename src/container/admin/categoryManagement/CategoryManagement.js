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

const CategoryManagement = () => {
//#region States
  const navigate = Index.useNavigate();
  const params = Index.useParams();
  const [open, setOpen] = useState(true);
  const [Url, setUrl] = useState("");
  const [Images, setImages] = useState();
  const [categoryManagement, setCategoryManagement] = useState({ title: "" });
  const [categoryManagementError, setCategoryManagementError] = useState({
    titleError: "",
  });
// #endregion

//#region Methods
  const handleInputChange = (event) => {
    setCategoryManagement({
      ...categoryManagement,
      [event.target.name]: event.target.value,
    });
  };
  const imageHandler = (e) => {
    let urllink = window.URL.createObjectURL(e[0]);
    setUrl(urllink);
  };
  const SubmitHandler = async () => {
    let formData = new FormData();
    let msg = "";
    if (params.id) {
      formData.append("id", params.id);
      msg = "Category updated successfully";
    } else {
      msg = "Category created successfully";
    }
    formData.append("image", Images && Images[0] ? Images[0] : "");
    formData.append("fileurl", Url);
    formData.append("title", categoryManagement.title);
    await Index.DataService
      .post(Index.Api.Admin.CategoryCreate, formData)
      .then((response, err) => {
        setCategoryManagement(response.data.data);
        Index.toast.success(msg, { theme: "dark" });
        navigate("/admin/categoryManagementList");
      });
  };
  const Validation = (e) => {
    console.log("validation");
    e.preventDefault();
    if (
      Index.validator.isEmpty(categoryManagement.title, {
        ignore_whitespace: true,
      })
    ) {
      setCategoryManagementError((prevState) => ({
        titleError: "Please enter the title.",
      }));
    } else {
      setCategoryManagementError((prevState) => ({
        ...prevState,
        titleError: "",
      }));
      SubmitHandler();
    }
  };
  const getCategoryList = async () => {
    if (params.id) {
      let urlencoded = new URLSearchParams();
      urlencoded.append("id", params.id);
      const list = await Index.DataService.post(
        Index.Api.Admin.CategoryById,
        urlencoded
      );
      console.log(list.data.data, "data::::");
      setUrl(list.data.data.image);
      setCategoryManagement(list.data.data);
    } else {
    }
  };
  useEffect(() => {
    getCategoryList();
  }, [params.id]);
  
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
              <Index.Grid item xs={12} md={12}>
                <Index.Typography variant="h5" noWrap component="div">
                  Catgeory Management
                </Index.Typography>
              </Index.Grid>
              <br />
              <br />
              <Index.Grid item xs={12} md={12}>
                <Index.Box className="land-logo-uplode">
                  <Index.Box>
                    <div className="mb-3 pos-img-select">
                      <div>
                        <input
                          type="file"
                          onChange={(e) => {
                            setImages(e.target.files);
                            imageHandler(e.target.files);
                          }}
                          className="kull-form-control"
                        />
                      </div>
                      <div>
                        <div>
                          <img
                            src={
                              Url && Url !== "" ? Url : Index.png.newNoProfile
                            }
                            alt=""
                            className="uploadImgShow mt-0"
                          ></img>
                        </div>
                      </div>
                    </div>{" "}
                    <p>Change profile</p>
                  </Index.Box>
                </Index.Box>
              </Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="text"
                  className="text-size-input"
                  name="title"
                  value={categoryManagement.title}
                  onChange={handleInputChange}
                  label="Title"
                  InputLabelProps={{ shrink: true }}
                />
                <span style={{ color: "red" }}>
                  {categoryManagementError.titleError}
                </span>
              </Index.Grid>
              <Index.Grid item xs={12} md={12} mt={3}>
                <Index.Button
                  variant="contained"
                  type="submit"
                  onClick={Validation}
                  sx={{ backgroundColor: "#39A6FE" }}
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
export default CategoryManagement;
