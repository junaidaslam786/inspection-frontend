import { Box } from "@mui/material";
import React from "react";
import IncomeReportBar from "./Constant/IncomeReportBar";

const IncomeReport: React.FC = () => {
  return (
    <Box sx={{width:"100%",}}>
      <h1>IncomeReport</h1>
      <IncomeReportBar />
    </Box>
  );
};

export default IncomeReport;
