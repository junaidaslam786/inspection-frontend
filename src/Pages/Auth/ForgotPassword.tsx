import React from "react";
import { Box } from "@mui/material";
import ForgotPassword from "../../Components/Auth/ForgotPassword";

const ForgotPasswordPage: React.FC = () => {
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
      <ForgotPassword />
    </Box>
  );
};

export default ForgotPasswordPage;
