import React from "react";
import Register from "../../Components/Auth/Register";
import { Box } from "@mui/material";

const RegisterPage: React.FC = () => {
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
      <Register />
    </Box>
  );
};

export default RegisterPage;
