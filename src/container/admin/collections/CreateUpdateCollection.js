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

const CreateUpdateCollection = () => {
//#region States
  const navigate = Index.useNavigate();
  const params = Index.useParams();
  const [open, setOpen] = useState(true);
  const [Url, setUrl] = useState("");
  const [Images, setImages] = useState();
  const [collection, setCollection] = useState({
    title: "",
    facebook: "",
    twitter: "",
    instagram: "",
    website: "",
    openseaLink: "",
  });
  const [collectionError, setCollectionError] = useState({
    titleError: "",
  });
  const [description, setDescription] = useState("");
// #endregion

//#region Methods
  const handleInputChange = (event) => {
    setCollection({
      ...collection,
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
      msg = "Collection updated successfully";
    } else {
      msg = "Collection created successfully";
    }
    formData.append("image", Images && Images[0] ? Images[0] : "");
    formData.append("fileurl", Url);
    formData.append("title", collection?.title.trim());
    formData.append("facebook",  collection?.facebook.trim());
    formData.append("twitter", collection?.twitter.trim());
    formData.append("instagram", collection.instagram.trim());
    formData.append("website", collection?.website.trim());
    formData.append("openseaLink", collection.openseaLink.trim());
    formData.append("description", description.trim());
    await Index.DataService
      .post(Index.Api.Admin.CollectionCreate, formData)
      .then((data) => {
        if (data.data.status === 1) {
          Index.toast.success(msg, { theme: "dark" });
          navigate("/admin/collections");
        }
      });
  };
  const Validation = (e) => {
    //console.log("validation");
    e.preventDefault();
    if (Index.validator.isEmpty(collection.title, { ignore_whitespace: true })) {
      setCollectionError((prevState) => ({
        titleError: "Please enter the title.",
      }));
    } else {
      setCollectionError((prevState) => ({
        ...prevState,
        titleError: "",
      }));
      SubmitHandler();
    }
  };
  const getCollection = async () => {
    if (params.id) {
      let urlencoded = new URLSearchParams();
      urlencoded.append("id", params.id);
      const list = await Index.DataService.post(Index.Api.Admin.CollectionById, urlencoded);
      setUrl(list.data.data.image);
      setCollection(list.data.data);
      setDescription(list.data.data.description);
    }
  };
  useEffect(() => {
    getCollection();
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
                  Collection
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
                            src={Url && Url !== "" ? Url : Index.png.newNoProfile}
                            alt=""
                            className="uploadImgShow mt-0"
                          ></img>
                        </div>
                      </div>
                    </div>{" "}
                    <p>Change image</p>
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
                  value={collection?.title}
                  onChange={handleInputChange}
                  label="Collection Title"
                  InputLabelProps={{ shrink: true }}
                />
                <span style={{color:'red'}}>{collectionError.titleError}</span>
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="facebook"
                  value={collection?.facebook}
                  onChange={handleInputChange}
                  label="Facebook"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="twitter"
                  value={collection?.twitter}
                  onChange={handleInputChange}
                  label="Twitter"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="instagram"
                  value={collection?.instagram}
                  onChange={handleInputChange}
                  label="Instagram"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="website"
                  value={collection?.website}
                  onChange={handleInputChange}
                  label="Website"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type="url"
                  className="text-size-input"
                  name="openseaLink"
                  value={collection?.openseaLink}
                  onChange={handleInputChange}
                  label="Opensea Link"
                  InputLabelProps={{ shrink: true }}
                />
              </Index.Grid>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6}>
                <Index.CKEditor
                  editor={Index.ClassicEditor}
                  name="description"
                  data={
                    description !== undefined && description !== ""
                      ? description
                      : ""
                  }
                  onReady={(editor) => {
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                  }}
                  onBlur={(event, editor) => {}}
                  onFocus={(event, editor) => {}}
                />
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
export default CreateUpdateCollection;
