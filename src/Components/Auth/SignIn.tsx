import React, { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/authApi";
import { setUser } from "../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCookie } from "typescript-cookie";

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loginUser, { isLoading }] = useLoginMutation();
  const [error, setError] = useState<string | null>(null);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await loginUser(data).unwrap();
      console.log("User Signed In Successfully!");
      setCookie("token", response.token);
      dispatch(setUser(response.user));
      navigate("/dashboard");
    } catch (err: any) {
      setError("Login Error: " + err.message);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in to your account
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <FormControlLabel
              control={<Checkbox name="rememberMe" />}
              label="Remember me"
            />
            <Typography component="label" variant="body2">
              <Link href="forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Typography>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Sign in
          </Button>
          {error && (
            <Typography color="error" sx={{ marginBottom: "1vw" }}>
              {error}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography>Don't have an account?&nbsp;&nbsp;</Typography>
              <Link href="/register" variant="body2">
                Register
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
