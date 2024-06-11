import React from "react";
import SignIn from "../../Components/Auth/SignIn";
import { Box } from "@mui/material";

const SignInPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignIn />
    </Box>
  );
};

export default SignInPage;
