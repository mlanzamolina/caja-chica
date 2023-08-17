import React, { useState, useEffect, useCallback } from "react";
import * as Realm from "realm-web";
import { useApp } from "./RealmApp";
import {
  Container,
  TextField,
  Button,
  IconButton,
  Card,
  Typography,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { MoreInfoDocsLink } from "./MoreInfo";
import { toggleBoolean } from "../utils";
import { useErrorAlert, useInfoAlert } from "../hooks/useErrorAlert";
import queryString from "query-string";
import Logo from "./../assets/logo.svg";
import LogoWithBuilding from "./../assets/logoWithBuilding.svg";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
//import fs from "fs";

const theme = createTheme();
export function WelcomePage() {
  const { currentUser } = useApp();
  const navigate = useNavigate();
  const app = useApp();
  if (currentUser) navigate("/admin");

  // Track whether the user is logging in or signing up for a new account
  const [isSignup, setIsSignup] = useState(false);
  const toggleIsSignup = () => {
    clearErrors();
    setIsSignup(toggleBoolean);
  };
  // Authentication errors
  const noErrors = {
    email: null,
    password: null,
    other: null,
  };
  const [error, setError] = useState(noErrors);
  const clearErrors = () => setError(noErrors);
  const NonAuthErrorAlert = useErrorAlert({
    error: error.other,
    clearError: () => {
      setError((prevError) => ({ ...prevError, other: null }));
    },
  });
  // Manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(toggleBoolean);

  const onFormSubmit = async ({ email, password }) => {
    console.log(`${email}@sanpedrosula.hn`);
    clearErrors();
    try {
      if (isSignup) {
        await app.emailPasswordAuth.registerUser({
          email: `${email}@sanpedrosula.hn`,
          password,
        });
        // inform the user that they need to verify their email address
        console.log("Sending email to verify account.");
      }
      await app.logIn(
        Realm.Credentials.emailPassword(`${email}@sanpedrosula.hn`, password),
      );
      // console.log("Logged in!"); route to /admin
      navigate("/admin");
    } catch (err) {
      handleAuthenticationError(err, setError);
    }
  };

  const urlParams = queryString.parse(window.location.search);
  const [token, setToken] = useState("");
  const [tokenId, setTokenId] = useState("");

  const handleConfirm = useCallback(async () => {
    try {
      const urlParams = await queryString.parse(window.location.search);
      if (urlParams.token && urlParams.tokenId) {
        // console.log(urlParams.token);
        // console.log(urlParams.tokenId);
        setToken(urlParams.token);
        setTokenId(urlParams.tokenId);
        await app.emailPasswordAuth.confirmUser(
          urlParams.token,
          urlParams.tokenId,
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [app.emailPasswordAuth, token, tokenId]);

  const initialProjectId = localStorage.getItem("REACT_APP_NAME")
    ? localStorage.getItem("REACT_APP_NAME")
    : window.env.REACT_APP_NAME;
  // console.log(initialProjectId);
  const [selectedProject, setSelectedProject] = useState(
    initialProjectId || window.env.REACT_APP_NAME,
  );
  // console.log(selectedProject);

  useEffect(() => {
    const project = window.env.REACT_APP_PROJECTS.find(
      (project) => project.id === selectedProject,
    );
    if (project) {
      window.env.REACT_APP_NAME = project.name;
      localStorage.setItem("REACT_APP_NAME", project.name);
      localStorage.setItem("REACT_APP_DB", project.db);
      localStorage.setItem("REACT_APP_COLLECTION", project.collection);
    }
  }, [selectedProject]);

  const handleProjectChange = (event) => {
    setSelectedProject(Number(event.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* height 100vh and hide scroll in sx */}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: "#003013",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <img
              src={LogoWithBuilding}
              alt="Example SVG"
              style={{ width: "75%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={10}
          square
        >
          <Box
            sx={{
              my: 1,
              mx: 13,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              <div>
                <img src={Logo} alt="Example SVG" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  style={{ width: "10%", height: "10%" }}
                >
                  <use xlinkHref={Logo} />
                </svg>
              </div>
              {/* drop downlist of projects if REACT_APP_PROJECTS is true */}

              {window.env.REACT_APP_PROJECT_LIST && (
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="project-select-label">Project</InputLabel>
                  <Select
                    labelId="project-select-label"
                    id="project-select"
                    value={selectedProject}
                    label="Project"
                    onChange={handleProjectChange}
                  >
                    {window.env.REACT_APP_PROJECTS.map((project) => (
                      <MenuItem key={project.id} value={project.id}>
                        {project.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Typography>
            <Container sx={{ width: "100%" }} className="main-container">
              <Card className="auth-card" variant="outlined">
                <form
                  className="auth-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const { email, password } = Object.fromEntries(
                      formData.entries(),
                    );
                    onFormSubmit({ email, password });
                  }}
                >
                  <Typography gutterBottom>
                    {isSignup
                      ? "Introduzca su correo sin @sanpedrosula.hn y una contraseña para crear una cuenta."
                      : "Introduzca su correo sin @sanpedrosula.hn y su contraseña para iniciar sesión."}
                  </Typography>
                  <NonAuthErrorAlert />
                  <div className="email-and-domain">
                    <TextField
                      id="input-email"
                      name="email"
                      label="Email Address"
                      variant="outlined"
                      error={Boolean(error.email)}
                      helperText={error.email ?? ""}
                    />
                    <Typography variant="caption" gutterBottom>
                      <br />
                      @sanpedrosula.hn
                    </Typography>
                  </div>
                  <TextField
                    id="input-password"
                    data-testid="input-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="Password"
                    variant="outlined"
                    error={Boolean(error.password)}
                    helperText={error.password ?? ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            onMouseDown={(e) => {
                              e.preventDefault();
                            }}
                            size="large"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    id="submit-button"
                    data-testid="submit-button"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {isSignup ? "Create Account" : "Log In"}
                  </Button>
                  <button
                    id="toggle-auth-type-button"
                    type="button"
                    className="link-button"
                    onClick={() => toggleIsSignup()}
                  >
                    {isSignup
                      ? "Already have an account? Log In"
                      : "Sign up for an account"}
                  </button>
                </form>
              </Card>
              {/* <MoreInfoDocsLink /> */}
            </Container>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

function handleAuthenticationError(err, setError) {
  const handleUnknownError = () => {
    setError((prevError) => ({
      ...prevError,
      other: "Verification email sent.",
    }));
    console.warn(
      "Something went wrong with a login or signup request. See the following error for details.",
    );
    console.error(err);
  };
  if (err instanceof Realm.MongoDBRealmError) {
    const { error, statusCode } = err;
    const errorType = error || statusCode;
    switch (errorType) {
      case "invalid username":
      case "email invalid":
        if (/[@]/.test(error.detail)) {
          setError((prevError) => ({
            ...prevError,
            email: "Email must not contain the @ symbol.",
          }));
        } else {
          setError((prevError) => ({
            ...prevError,
            email: "Invalid email address.",
          }));
        }
        break;
      case "invalid username/password":
      case "invalid password":
      case 401:
        setError((prevError) => ({
          ...prevError,
          password: "Incorrect password.",
        }));
        break;
      case "name already in use":
      case 409:
        setError((prevError) => ({
          ...prevError,
          email: "Email is already registered.",
        }));
        break;
      case "password must be between 6 and 128 characters":
      case 400:
        setError((prevError) => ({
          ...prevError,
          password: "Password must be between 6 and 128 characters.",
        }));
        break;
      default:
        handleUnknownError();
        break;
    }
  } else {
    handleUnknownError();
  }
  if (
    errorType === "name already in use" &&
    error.detail.endsWith("@sanpedrosula.hn")
  ) {
    // Send email to verify account
    console.log("Sending email to verify account.");
  }
}
