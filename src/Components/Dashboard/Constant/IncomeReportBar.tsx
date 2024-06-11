import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const IncomeReportBar: React.FC = () => {
  return (
    <BarChart sx={{backgroundColor:"white", }}
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B',] }]}
      series={[{ data: [4, 3,] }, { data: [1, 6,] }]}
    
      height={430}
    />
  );
}
 
export default IncomeReportBar;