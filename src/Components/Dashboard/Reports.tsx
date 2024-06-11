import React from "react";
import { Box, Typography } from "@mui/material";
import reports from "./Constant/report";
import BalanceCard from "./Constant/BalanceCard";

const Reports: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "5vmin",
        borderRadius: "2vmin",
        mt: "6vmin",
      }}
    >
      <Box sx={{ width: "100%", height: "5vh" }}>
        <Typography variant="h6">Reports</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 column for extra-small screens
            sm: "repeat(2, 1fr)", // 2 columns for small screens
            md: "repeat(3, 1fr)", // 3 columns for medium screens and above
          },
          gap: "3vmin",
          width: "100%",
        }}
      >
        {reports.map((data, index) => (
          <BalanceCard
            key={index}
            balance={data.balance}
            percentageChange={data.percentageChange}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Reports;
