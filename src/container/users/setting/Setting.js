import React from "react";
import Index from "../Index";

const Settings = () => {
  return (
    <>
      <Index.Box
        sx={{ backgroundColor: "#03070C" }}
        height="100vh"
        flexDirection="column"
        justifyContent="center"
      >
        <Index.Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Index.Grid item xs={3}>
            <Index.Box sx={{ width: "50px" }} component="img" src={Index.settingImg} />
          </Index.Grid>

          <br />
          <Index.Grid>
            <Index.Typography style={{ color: "#FFFFFF", letterSpacing: "3.8px" }}>
              CALCULATING PROFILE VALUE
            </Index.Typography>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
    </>
  );
};
export default Settings;
