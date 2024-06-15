import React from "react";
import { Box } from "@mui/material";
import BalanceTable from "./Constant/BalanceTable";
import client from "./Constant/balance";

const BalanceAlertTable: React.FC = () => {
  return (
    <Box sx={{width:"100%",}}>
      <BalanceTable
      clients={client}
      />
    </Box>
  );
};

export default BalanceAlertTable;
