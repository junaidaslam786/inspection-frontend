import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../redux/api/authApi"; // Assume this is the API call
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [error, setError] = useState<string | null>(null);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password
      }).unwrap();

      if (response) {
        navigate("/sign-in");
      }
    } catch (err: any) {
      setError("Registration Error: " + err.message);
    }
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
          Create a new account
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            autoComplete="name"
            {...register("name", { required: "Full Name is required" })}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="New Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="new-password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            autoComplete="current-password"
            {...register("confirmPassword", { required: "Please confirm your password" })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword && errors.confirmPassword.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Sign Up
          </Button>
          {error && <Typography color="error">{error}</Typography>}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography>Already have an account?&nbsp;&nbsp;</Typography>
              <Link href="/sign-in" variant="body2">
                Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
