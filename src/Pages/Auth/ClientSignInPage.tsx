import React from "react";
import ClientSignIn from "../../Components/Auth/ClientSignIn";
import { useLoginClientMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setToken, setClient } from "../../redux/features/clientSlice";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";

const ClientSignInPage: React.FC = () => {
  const [loginClient] = useLoginClientMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await loginClient({ email, password }).unwrap();
      dispatch(setToken(result.token));
      if (result.client) {
        dispatch(setClient(result.client));
      }
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
