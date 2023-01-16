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

const CreateUpdateProject = () => {
//#region States
  const navigate = Index.useNavigate();
  const params = Index.useParams();
  const [open, setOpen] = useState(true);
  const [projectError, setProjectError] = useState("");
  const [slug, setSlug] = useState();
// #endregion

//#region Methods
  const SubmitHandler = async () => {
    let urlencoded = new URLSearchParams();
    let msg = "";
    if (params.id) {
      urlencoded.append("id", params.id);
      msg = "Project updated successfully";
    } else {
      msg = "Project created successfully";
    }
    urlencoded.append("slug", slug.trim());
    urlencoded.append("collectionId", params.collectionId);
    await Index.DataService
      .post(Index.Api.Admin.ProjectCreate, urlencoded)
      .then((data) => {
        if (data.data.status === 1) {
          Index.toast.success(msg, { theme: "dark" });
          navigate(`/admin/projects/${params.collectionId}`);
        }
      });
  };
  const Validation = (e) => {
    e.preventDefault();
    if (slug === "" || slug === undefined) {
      setProjectError("Please enter the slug.");
    } else {
      setProjectError("");
      SubmitHandler();
    }
  };
  const getProject = async () => {
    if (params.id) {
      let urlencoded = new URLSearchParams();
      urlencoded.append("id", params.id);
      const list = await Index.DataService.post(Index.Api.Admin.ProjectById, urlencoded);
      setSlug(list.data.data.slug);
    } 
  };
  useEffect(() => {
    getProject();
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
                  Project
                </Index.Typography>
              </Index.Grid>
              <br />
              <br />
              <br />
           
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="text"
                  className="text-size-input"
                  name="slug"
                  value={slug}
                  onChange={(e)=> {setSlug(e.target.value)}}
                  label="Project Slug"
                  InputLabelProps={{ shrink: true }}
                />
                <span style={{color:'red'}}>{projectError}</span>
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
export default CreateUpdateProject;
