import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Typography } from "@mui/material";

const IncomeReportBar: React.FC = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "white", borderRadius: "8px" }}>
        <Typography  variant="h5" align="center" sx={{ pt: "3vmin" }}>
          Your Chart Heading
        </Typography>
        <BarChart
          sx={{ backgroundColor: "white" }}
          xAxis={[{ scaleType: "band", data: ["group A", "group B"] }]}
          series={[{ data: [4, 3] }, { data: [1, 6] }]}
          height={430}
        />
      </Box>
    </Box>
  );
};

export default IncomeReportBar;
