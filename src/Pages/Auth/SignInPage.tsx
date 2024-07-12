import React from "react";
import SignIn from "../../Components/Auth/SignIn";
import { useLoginMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
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
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <SignIn onSubmit={handleLogin} />
    </div>
  );
};

export default SignInPage;
