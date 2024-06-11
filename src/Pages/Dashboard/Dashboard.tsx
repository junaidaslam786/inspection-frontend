import { Box } from "@mui/material";
import React from "react";
import Reports from "../../Components/Dashboard/Reports";
import RecentClients from "../../Components/Dashboard/RecentClient";
import CashflowChart from "../../Components/Dashboard/CashFlowChart";
import PersistentDrawerLeft from "../../Components/Drawer/PersistentDrawerMenu";
import IncomeReport from "../../Components/Dashboard/IncomeReport";
import BalanceAlertTable from "../../Components/Dashboard/BalanceAlertTable";
import VoucherData from "../../Components/Dashboard/Constant/VoucherData";
import Voucher from "../../Components/Dashboard/Constant/voucher";
import PieChartReport from "../../Components/Dashboard/PieChartReport";
import User from "../../Components/Dashboard/User";

const Dashboard: React.FC = () => {
  return (
    <PersistentDrawerLeft>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "5vmin",
          width: "100%",
          mt: "5vmin",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5vmin",
            width: "65%",
          }}
        >
          <Reports />
          <Box sx={{ width: "100%" }}>
            <CashflowChart />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5vmin",
              width: "100%",
              mt: "5vmin",
            }}
          >
            <IncomeReport />
            <BalanceAlertTable />
          </Box>
          <Box sx={{ width: "100%" }}>
            <VoucherData clients={Voucher} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5vmin",
            width: "35%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "5vmin",
            }}
          >
            <RecentClients />
            <PieChartReport />
            <User />
          </Box>
        </Box>
      </Box>
    </PersistentDrawerLeft>
  );
};

export default Dashboard;
