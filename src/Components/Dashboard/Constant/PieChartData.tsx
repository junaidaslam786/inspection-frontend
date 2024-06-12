import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

const data = [
  { value: 5, label: "Income" },
  { value: 10, label: "Expense" },
];

const size = {
  height: 350,
};

const PieChartData: React.FC = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor:"white",borderRadius: "8px" }}>
        <Typography variant="h5" align="center" sx={{pt :"3vmin"}}>
          Chart
        </Typography>
        <PieChart
          sx={{ backgroundColor: "white" , }}
          series={[{ data, innerRadius: 80, outerRadius: 120 }]}
          {...size}
        />
      </Box>
    </Box>
  );
};

export default PieChartData;
