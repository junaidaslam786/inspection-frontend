import React from "react";
import { useRegisterClientMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setToken, setClient } from "../../redux/features/clientSlice";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";
import ClientRegistration from "../../Components/Auth/ClientRegistration";

const ClientRegistrationPage: React.FC = () => {
  const [registerClient] = useRegisterClientMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistration = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    billingAddress: string,
    paymentMethod: string,
    type: string,
    status: string,
    nextBillDate: string
  ) => {
    try {
      const result = await registerClient({
        name,
        email,
        password,
        phone,
        address,
        billing_address: billingAddress,
        payment_method: paymentMethod,
        type,
        status,
        next_bill_date: nextBillDate,
      }).unwrap();
      dispatch(setToken(result.token));
      if (result.client) {
        dispatch(setClient(result.client));
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <AuthLayout>
      <ClientRegistration onSubmit={handleRegistration} />
    </AuthLayout>
  );
};

export default ClientRegistrationPage;
