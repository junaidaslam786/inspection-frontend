import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const Sales: React.FC = () => {
  // Sample data for sales summary, recent orders, and top-selling products
  const salesSummary = [
    { label: "Total Sales:", value: "$XXXXX" },
    { label: "Total Customers:", value: "XXX" },
    { label: "Average Order Value:", value: "$XXXX.XX" },
  ];

  const recentOrders = [
    { orderId: "1001", customer: "John Doe", amount: "$500" },
    { orderId: "1002", customer: "Jane Smith", amount: "$300" },
    { orderId: "1003", customer: "Alice Lee", amount: "$700" },
    { orderId: "1004", customer: "Bob Johnson", amount: "$200" },
  ];

  const topSellingProducts = [
    { product: "Product A", totalSales: "$XXXX" },
    { product: "Product B", totalSales: "$XXXX" },
    { product: "Product C", totalSales: "$XXXX" },
    { product: "Product D", totalSales: "$XXXX" },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" align="center">
            Sales Summary
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {salesSummary.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.label}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" align="center">
            Recent Orders
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.orderId}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" align="center">
            Top Selling Products
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Total Sales</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topSellingProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.product}</TableCell>
                    <TableCell>{product.totalSales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Sales;
