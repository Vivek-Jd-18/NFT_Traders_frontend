import React, { useState, useEffect } from "react";
import Index from "../Index";

const AboutUs = () => {
//#region States
  const AdminDetails = localStorage.getItem("userInfo");
  const token = JSON.parse(AdminDetails);
  const navigate = Index.useNavigate();
  const [aboutUs, setAboutUs] = useState("");
  const CMSId = JSON.parse(localStorage.getItem("CMS"));
// #endregion

//#region Methods
  const getCMSDetails = async () => {
    await Index.DataService
      .post(
        Index.Api.Admin.CMSById,
        {},
        {
          headers: {
            auth: token?.token,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 1) {
          setAboutUs(response.data.data[0]?.about_us);
        }
      });
  };

  useEffect(() => {
    getCMSDetails();
  }, []);

  // Form Submit handler
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    let urlencoded = new URLSearchParams();
    let message = "";
    if (CMSId && CMSId[0]?._id) {
      urlencoded.append("id", CMSId[0]?._id);
      message = "CMS Updated Successfully";
    } else {
      message = "CMS Created Successfully";
    }

    urlencoded.append("about_us", aboutUs);
    await Index.DataService
      .post(Index.Api.Admin.CreateUpdateCMS, urlencoded, {
        headers: {
          auth: token?.token,
        },
      })
      .then((response) => {
        if (response.data.status === "1") {
          localStorage.setItem("CMS", JSON.stringify(response.data.data));
          Index.toast.success(message, { theme: "dark" });
          navigate("/admin/aboutUs");
        }
      });
  };
// #endregion

  return (
    <>
      <Index.Container
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          my: 3,
          paddingBottom: 4,
        }}
      >
        <Index.Box sx={{ width: "50%" }}>
          <Index.Paper elevation={2}>
            <Index.Box sx={{ width: "100%" }}>
              <Index.Typography
                variant="h5"
                sx={{ textAlign: "left", fontWeight: "bold", p: 2 }}
              >
                <span style={{ color: "#0057AD" }}>About Us</span>
              </Index.Typography>
              <hr />

              <Index.Box
                sx={{ p: 2, display: "flex", flexDirection: "column" }}
              >
                <Index.CKEditor
                  editor={Index.ClassicEditor}
                  name="aboutUs"
                  data={aboutUs !== undefined && aboutUs !== "" ? aboutUs : ""}
                  onReady={(editor) => {
                    // console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setAboutUs(data);
                  }}
                  onBlur={(event, editor) => {}}
                  onFocus={(event, editor) => {}}
                />

                <Index.Box
                  sx={{
                    paddingTop: 3,
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  <Index.Button
                    sx={{ backgroundColor: "#39A6FE" }}
                    variant="contained"
                    onClick={handleUpdateSubmit}
                    type="submit"
                  >
                    Submit
                  </Index.Button>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Paper>
        </Index.Box>
        <Index.ToastContainer />
      </Index.Container>
    </>
  );
};

export default AboutUs;
