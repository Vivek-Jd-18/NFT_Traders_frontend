import {
  Card,
  Grid,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
// import useAuth from "app/hooks/useAuth";
import { Box, styled, useTheme } from "@mui/system";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import { Paragraph, Span } from "app/components/Typography";
import DataService from "../../../../config/DataService";
import { Api } from "../../../../config/Api";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { AdminLoginFetch } from "../../../../redux/admin/action";
import logo from "../../../../assets/images/icon-N.png";
import { useNavigate } from "react-router-dom";
const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: "center",
}));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)",
}));

const IMG = styled("img")(() => ({
  width: "100%",
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 800,
    borderRadius: 12,
    margin: "1rem",
  },
}));

const StyledProgress = styled(CircularProgress)(() => ({
  position: "absolute",
  top: "6px",
  left: "25px",
}));

const Login = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  // const { login } = useAuth();

  const CustomToast = () => {
    toast("Please enter valid data", {
      toastId: "success1",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    let temp = { ...userInfo };
    temp[name] = value;
    setUserInfo(temp);
  };
  const { palette } = useTheme();
  // const textError = palette.error.main;
  // const textPrimary = palette.primary.main;

  const getUser = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", userInfo.email?.trim());
    urlencoded.append("password", userInfo.password?.trim());
    await DataService.post(Api.Admin.Login, urlencoded).then((data, err) => {
      if (data.data.status === 1) {
        setLoading(true);
        dispatch(AdminLoginFetch(data.data.data[0]));
        localStorage.setItem("userInfo", JSON.stringify(data.data.data[0]));
        navigate("/admin/userlist");
      } else {
        setLoading(false);
        CustomToast();
      }
    });
  };

  const handleFormSubmit = async (event) => {
    setLoading(true);
    try {
      getUser();
    } catch (e) {
      setMessage(e.message);
      setLoading(false);
    }
  };

  return (
    <JWTRoot className="login-section" p={3} sx={{ bgcolor: "#e2e2e2" }}>
      <Card className="login-card">
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ bgcolor: "#000000" }}>
            <JustifyBox
              p={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <IMG className="login-logo" src={logo} alt="" />
            </JustifyBox>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ContentBox>
              <Typography variant="h5" sx={{ mb: 2 }} noWrap component="div">
               Admin Login
              </Typography>
              <ValidatorForm onSubmit={handleFormSubmit}>
                <TextValidator
                  sx={{ mb: 3, width: "100%", color: "black" }}
                  variant="outlined"
                  size="small"
                  label="Email"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={userInfo.email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "Please enter Email",
                    "Please enter valid Email",
                  ]}
                />
                <TextValidator
                  sx={{ mb: 3, width: "100%" }}
                  label="Password"
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={userInfo.password}
                  validators={["required"]}
                  errorMessages={["Please enter Password"]}
                />

                <FlexBox flexWrap="wrap">
                  <Box position="relative">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#3198F9" }}
                      disabled={loading}
                      type="submit"
                    >
                      Sign in
                    </Button>
                    {loading && (
                      <StyledProgress size={24} className="buttonProgress" />
                    )}
                  </Box>
                </FlexBox>
              </ValidatorForm>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default Login;
