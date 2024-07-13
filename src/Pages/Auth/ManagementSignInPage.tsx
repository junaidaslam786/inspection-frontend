import React from "react";
import ManagementSignIn from "../../Components/Auth/ManagementSignIn";
import { useLoginMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";

const ManagementSignInPage: React.FC = () => {
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
      <ManagementSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
};

export default ManagementSignInPage;
