import { Box } from "@mui/material";
import React from "react";
import StackedAreas from "./Constant/CashChart";



const CashFlowChart: React.FC = () => {
  return (
    <Box>
      <h1>Cashflow</h1>
     <StackedAreas />
    </Box>
  );
};

export default CashFlowChart;
