import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const years = [
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
];

const FranceGDPperCapita = [
  28128, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
  31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
  35495.465,43435,45464,42235,43335,45434
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
  30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426, 34865.78,
  35623.625,43435,45464,42235,43335,45434
];

const CashChart: React.FC = () => {
  return (
    <LineChart sx={{backgroundColor:"white",}}
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date: { getFullYear: () => { (): any; new(): any; toString: { (): any; new(): any; }; }; }) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          label: 'French GDP per capita',
          data: FranceGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'United Kingdom',
          label: 'UK GDP per capita',
          data: UKGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      
      height={400}
      margin={{ left: 70 }}
    />
  );
}
export default CashChart