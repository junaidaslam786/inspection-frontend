import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
const data = [
  { value: 5, label: "Income" },
  { value: 10, label: "Expense" },
];

const size = {
 
  height: 400,
};

const PieChartData: React.FC = () => {
  return (
    <PieChart sx={{backgroundColor:"white",}}
      series={[{ data, innerRadius: 80, outerRadius: 120 }]}
      {...size}
    />
  );
};
export default PieChartData;
