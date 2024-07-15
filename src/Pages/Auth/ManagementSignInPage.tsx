import React from "react";
import ManagementSignIn from "../../Components/Auth/ManagementSignIn";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";

const ManagementSignInPage: React.FC = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await loginUser({ email, password }).unwrap();
      dispatch(setToken(result.token));
      if (result.user) {
        dispatch(setUser(result.user));
      }
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
