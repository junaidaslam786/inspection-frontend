import React from "react";
import ClientSignIn from "../../Components/Auth/ClientSignIn";
import { useLoginMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";

const ClientSignInPage: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login({ email, password }).unwrap();
      dispatch(setToken(result.token));
      dispatch(setUser(result.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <AuthLayout>
      <ClientSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
};

export default ClientSignInPage;
