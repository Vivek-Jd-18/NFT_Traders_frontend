import React, { useState, useEffect } from "react";
import Index from "../Index";

const drawerWidth = 240;
const Main = Index.styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
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
  })
);

const ProjectCategoryManagement = () => {
//#region States
  const navigate = Index.useNavigate();
  const params = Index.useParams();
  const [open, setOpen] = React.useState(true);
  const [options, setOptions] = useState([]);
  const [value, setValue] = React.useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [valueError, setValueError] = useState([]);
  const [projectCategoryManagement, setProjectCategoryManagement] = useState({
    Slug: "",
  });
  const [
    projectCategoryManagementError,
    setProjectCategoryManagementError,
  ] = useState({
    slugError: "",
  });
// #endregion

//#region Methods
  const handleInputChange = (event) => {
    setProjectCategoryManagement({
      ...projectCategoryManagement,
      [event.target.name]: event.target.value,
    });
  };

  const getCategoryList = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("perPage", perPage);
    urlencoded.append("page", page);
    const list = await Index.DataService.post(
      Index.Api.Admin.CategoryManagementList,
      urlencoded
    );

    if (list.data.status === 1) {
      setCount(list.data.count);
      let array = [{ label: "", value: "" }];
      list.data.data.map((element, index) => {
        array.push({ label: element.title, value: element._id });
        setOptions(array);
      });
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    getCategoryList();
  }, [page]);

  const SubmitHandler = async () => {
    let urlencoded = new URLSearchParams();
    let msg = "";
    if (params.id) {
      urlencoded.append("id", params.id);
      msg = "Project category updated successfully";
    } else {
      msg = "Project category created successfully";
    }
    urlencoded.append("categoryId", value.value);
    urlencoded.append("slug", projectCategoryManagement.Slug);
    await Index.DataService
      .post(Index.Api.Admin.ProjectCategoryCreate, urlencoded)
      .then((response, err) => {
        console.log(response, "resp");
        setProjectCategoryManagement(response.data.data);
        Index.toast.success(msg, {theme: "dark"});
        navigate("/admin/projectCategoryManagementList");
      });
  };
  const Validation = (e) => {
    console.log("validation");
    e.preventDefault();
    if (
      Index.validator.isEmpty(projectCategoryManagement.Slug, {
        ignore_whitespace: true,
      })
    ) {
      setProjectCategoryManagementError((prevState) => ({
        slugError: "Please enter the title.",
      }));
    } else {
      setProjectCategoryManagementError((prevState) => ({
        ...prevState,
        slugError: "",
      }));
      SubmitHandler();
    }
  };

  const getProjectCategory = async () => {
    if (params.id) {
      let urlencoded = new URLSearchParams();
      urlencoded.append("id", params.id);
      const list = await Index.DataService.post(
        Index.Api.Admin.ProjectCategoryById,
        urlencoded
      );
      setValue({
        label: list.data.data.categoryId.title,
        value: list.data.data.categoryId._id,
      });
      setProjectCategoryManagement({ Slug: list.data.data.slug });
    } else {
    }
  };

  useEffect(() => {
    getProjectCategory();
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
                  Project Management
                </Index.Typography>
              </Index.Grid>
              <br />
              <br />
              <Index.Grid item xs={12} md={6}>
                <Index.Autocomplete
                  value={value.label ? value.label : ""}
                  onChange={(event, newValue) => {
                    console.log(newValue, "newValue:::::");
                    setValue(newValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  renderInput={(params) => (
                    <Index.TextField {...params} label="Controllable" />
                  )}
                />
                <span>{valueError}</span>
              </Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ height: "60px" }}
                  fullWidth
                  type="text"
                  className="text-size-input add-height"
                  name="Slug"
                  value={projectCategoryManagement?.Slug}
                  onChange={handleInputChange}
                  label="Slug"
                  InputLabelProps={{ shrink: true }}
                  size="Normal"
                />
                <span>{projectCategoryManagementError.slugError}</span>
              </Index.Grid>
              <Index.Grid item xs={12} md={12} mt={2}>
                <Index.Button
                  type="submit"
                  onClick={Validation}
                  variant="contained"
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
export default ProjectCategoryManagement;
