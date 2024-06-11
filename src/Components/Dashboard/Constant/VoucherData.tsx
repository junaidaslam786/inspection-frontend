import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Client {
  date: string;
  customer: string;
  voucherNo: number; // Adjusted to number
  dueDate: string;
  mode: string;
  status: string;
  amount: number;
}

interface ClientListProps {
  clients: Client[];
}

const VoucherData: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="left">Voucher No</TableCell>
            <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Mode</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index}>
              <TableCell align="left">{client.date}</TableCell>
              <TableCell align="left">{client.customer}</TableCell>
              <TableCell align="left">{client.voucherNo}</TableCell>
              <TableCell align="left">{client.dueDate}</TableCell>
              <TableCell align="left">{client.mode}</TableCell>
              <TableCell align="left">{client.status}</TableCell>
              <TableCell align="left">{client.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VoucherData;
