import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";

interface Client {
  name: string;
  amount: number;
}

interface ClientListProps {
  clients: Client[];
}

const BalanceTable: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "white", borderRadius: "8px" }}>
        <Typography variant="h5" align="center" sx={{ pt: "3vmin" }}>
          Balance Table
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{client.name}</TableCell>
                  <TableCell align="left">{client.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BalanceTable;
