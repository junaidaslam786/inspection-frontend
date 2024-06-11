import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { registerCompany } from "../../redux/features/auth/companySlice";

const CompanyRegistration: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [companyData, setCompanyData] = useState({
    name: "",
    address: "",
    industry: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerCompany(companyData));
  };

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
          Company Registration
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Company Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={companyData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Company Address"
            name="address"
            autoComplete="address"
            value={companyData.address}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="industry"
            label="Company Industry"
            name="industry"
            autoComplete="industry"
            value={companyData.industry}
            onChange={handleInputChange}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
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

export default CompanyRegistration;
