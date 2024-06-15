import React from "react";
import { Box, Typography, Link } from "@mui/material";
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
      <Link href="/transaction-form">page link</Link>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
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
