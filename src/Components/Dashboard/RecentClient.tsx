import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ClientList from "./Constant/ClientList";
import clients from "./Constant/clients";

const RecentClients: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "white",
        mt:"6vmin",
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h6">Recent Clients</Typography>
        <Button sx={{display:"flex",marginLeft:"35vmin",alignItems:"end",}} variant="contained" color="secondary" size="small">
          List 5
        </Button>
      </Box>
      <ClientList clients={clients} />
    </Box>
  );
};

export default RecentClients;
