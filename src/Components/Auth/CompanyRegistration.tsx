import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useCreateCompanyMutation } from "../../redux/api/companyApi";
import { getCookie } from "typescript-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface DecodedToken {
  id: number;
  name: string;
  email: string;
}

const CompanyRegistration: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [industry, setIndustry] = useState("");
  const [createCompany] = useCreateCompanyMutation();
  const navigate = useNavigate();

  const companyDto = {
    name,
    address,
    industry,
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = getCookie("token");
      if (!token) {
        throw new Error("Missing token in cookie");
      }

      const decodedToken = jwtDecode<DecodedToken>(token);
      const userId = decodedToken.id;

      await createCompany({ userId, companyData: companyDto }).unwrap();
      alert("Company registered successfully!");
      navigate('/dashboard');
    } catch (error) {
      console.error("Failed to register company:", error);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h1" variant="h5">
          Company Registration
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "100%" }}
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Company Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Company Address"
            name="address"
            autoComplete="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="industry"
            label="Company Industry"
            name="industry"
            autoComplete="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
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
