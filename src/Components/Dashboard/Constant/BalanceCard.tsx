import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

interface BalanceCardProps {
  balance: number;
  percentageChange: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  percentageChange,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "1vmin",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Box
          sx={{
            mt:"3vmin",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            mb: "2px",
            width: "100%",
          }}
        >
          <AccountBalanceWalletIcon
            sx={{ fontSize: "8vmin", color: "#7b79ff", }}
          />
          <Typography variant="h5" component="div">
            ${balance.toLocaleString()}
          </Typography>
        </Box>
        <Typography color="text.secondary">Opening Balance</Typography>
        <Box
          mt={"2vmin"}
          p={"1vmin"}
          mb={"4vmin"}
          bgcolor="#fff"
          borderRadius={"1vmin"}
          display="inline-block"
        >
          <Typography
            variant="body2"
            color={percentageChange > 0 ? "success.main" : "error.main"}
          >
            {percentageChange > 0
              ? `+${percentageChange}%`
              : `${percentageChange}%`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
