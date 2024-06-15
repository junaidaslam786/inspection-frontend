import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCookie, getCookie } from "typescript-cookie";

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers: Headers, {}: { getState: () => any }) => {
    const token = getCookie("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials: LoginRequest) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(
        _args: LoginRequest,
        { queryFulfilled }: { queryFulfilled: Promise<{ data: AuthResponse }> }
      ) {
        try {
          const { data } = await queryFulfilled;
          setCookie("token", data.token, { expires: 1 });
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (newUser: RegisterRequest) => ({
        url: "auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
