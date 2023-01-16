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

const CreateUpdateNews = () => {
//#region States
  const params = Index.useParams();
  const navigate = Index.useNavigate();
  const [open, setOpen] = useState(true);
  const [Url, setUrl] = useState("");
  const [Images, setImages] = useState();
  const [ImagesError, SetimagesError] = useState("");
  const [updateNews, setUpdateNews] = useState([]);
  const [description, setDescription] = useState("");
  const [news, setNews] = useState({
    name: "",
    topStory: false,
  });
  const [newsError, setNewsError] = useState({
    nameError: "",
  });
// #endregion

//#region Methods
  const handleInputChange = (event) => {
    setNews({
      ...news,
      [event.target.name]: event.target.value,
    });
  };

  const imageHandler = (e) => {
    let urllink = window.URL.createObjectURL(e[0]);
    setUrl(urllink);
  };

  const Validation = (e) => {
    e.preventDefault();
    if (Index.validator.isEmpty(news?.name, { ignore_whitespace: true })) {
      setNewsError((prevState) => ({
        nameError: "Please enter the news name.",
      }));
    } else {
      setNewsError((prevState) => ({
        ...prevState,
        nameError: "",
      }));
      SubmitHandler();
    }
  };

  const SubmitHandler = async () => {
    let formData = new FormData();
    let msg = "";
    if (params.id) {
      formData.append("id", params.id);
      msg = "News updated successfully";
    } else {
      msg = "News created successfully";
    }
    formData.append("image", Images && Images[0] ? Images[0] :'');
    formData.append("fileurl",Url);
    formData.append("name", news?.name);
    formData.append("topStory", news?.topStory ? "1" : "0");
    formData.append("description", description);
    await Index.DataService
      .post(Index.Api.Admin.NewsCreateUpdate, formData)
      .then((response, err) => {
        Index.toast.success(msg, {theme: "dark"});
        navigate("/admin/newsList");
      });
  };

  const getNewsById = async () => {
    if (params.id) {
      let urlencoded = new URLSearchParams();
      urlencoded.append("id", params.id);
      const list = await Index.DataService.post(Index.Api.Admin.NewsById, urlencoded)
      setUrl(list.data.data[0].image);
      setUpdateNews(list.data.data[0]);
      setDescription(list.data.data[0].description);
    }
  };

  useEffect(() => {
    if(params.id){
      getNewsById();
    }
  }, [params.id]);

  useEffect(() => {
    if (updateNews) {
      setNews({
        name: updateNews?.name,
        topStory: updateNews?.topStory === "1" ? true : false,
      });
      setUrl(updateNews?.image);
      setDescription(updateNews.description);
    }
  }, [updateNews]);
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
                  News
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
                        <p style={{ color: "red" }}>{ImagesError}</p>
                      </div>
                      <div>
                        <div>
                          <img
                            src={Url && Url !== "" ? Url : Index.png.newNoProfile}
                            className="uploadImgShow mt-0"
                            alt=""
                          ></img>
                        </div>
                      </div>
                    </div>{" "}
                    <p>Upload News Image</p>
                  </Index.Box>
                </Index.Box>
              </Index.Grid>

              <Index.Grid item xs={12} md={12} mt={3}>
                <Index.FormControl component="fieldset">
                  <Index.FormLabel component="legend">Top Story</Index.FormLabel>
                  <Index.FormGroup aria-label="position">
                    <Index.FormControlLabel
                      value="end"
                      control={
                        <Index.Checkbox
                          name="topStory"
                          checked={news.topStory}
                          onChange={(e) => {
                            setNews((prev) => ({
                              ...prev,
                              topStory: !prev.topStory,
                            }));
                          }}
                          color="success"
                        />
                      }
                      label="Add to Top Story"
                      labelPlacement="end"
                    />
                  </Index.FormGroup>
                </Index.FormControl>
              </Index.Grid>

              <Index.Grid item xs={6} md={12} mt={3}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  type="text"
                  className="text-size-input"
                  name="name"
                  value={news.name}
                  onChange={handleInputChange}
                  placeholder="News Name"
                  label="Name"
                  InputLabelProps={{ shrink: true }}
                />
                <span style={{ color: "red" }}>{newsError.nameError}</span>
              </Index.Grid>

              <Index.Grid item xs={12} md={6} mt={3}>
                <Index.Typography noWrap component="div" mb={1}> News Description </Index.Typography>
                  <Index.CKEditor
                    editor={Index.ClassicEditor}
                    name="description"
                    data={description !== undefined && description !== '' ? description : ""}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        //console.log( 'Editor is ready to use!', editor );
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
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
export default CreateUpdateNews;
