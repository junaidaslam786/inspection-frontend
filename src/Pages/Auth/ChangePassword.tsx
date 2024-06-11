import React from "react";
import { Box } from "@mui/material";
import ChangePassword from "../../Components/Auth/ChangePassword";


const ChangePasswordPage: React.FC = () => {
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
      <ChangePassword />
    </Box>
  );
};

export default ChangePasswordPage;
