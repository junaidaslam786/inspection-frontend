import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface CreatCustomerProps {
  selectMargin?: string;
}

const CreatCustomer: React.FC<CreatCustomerProps> = () => {
  const categories = ["Customer", "Supplier"];

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
          Creat Customer
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <TextField
            sx={{ mt: "3vmin" }}
            fullWidth
            id="name"
            name="name"
            label="Name"
          ></TextField>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            name="email"
            label="Email"
          />
          <TextField
            margin="normal"
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
          />
          <TextField
            select
            sx={{ mt: "3vmin" }}
            fullWidth
            id="usertype"
            name="usertype"
            label="UserType"
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

export default CreatCustomer;
