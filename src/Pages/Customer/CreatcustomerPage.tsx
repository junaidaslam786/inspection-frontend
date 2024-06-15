import React from "react";
import { Box } from "@mui/material";
import CreatCustomer from "../../Components/Customer/CreatCustomer";

const CreatCustomerPage: React.FC = () => {
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
      <CreatCustomer />
    </Box>
  );
};

export default CreatCustomerPage;
