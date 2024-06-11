import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface TransactionFormProps {
  selectMargin?: string;
}

const TransactionForm: React.FC<TransactionFormProps> = () => {
  const category = ["Home", "Electricity", "Healthcare"];
  const categories = ["Debit", "Credit"];

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Transaction
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="date"
                name="date"
                label="Date"
                type="date"
                autoComplete="on"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="time"
                name="time"
                label="Time"
                type="time"
                autoComplete="on"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <TextField
            select
            sx={{ mt: "3vmin" }}
            fullWidth
            id="transactionType"
            name="transactionType"
            label="Transaction Type"
          >
            {category.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            fullWidth
            id="amount"
            name="amount"
            label="Amount"
          />
          <TextField
            select
            sx={{ mt: "3vmin" }}
            fullWidth
            id="paymentType"
            name="paymentType"
            label="Payment Type"
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{ borderRadius: "50px", px: 3 }}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              endIcon={<CheckCircleIcon />}
              sx={{ borderRadius: "50px", px: 3 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TransactionForm;
