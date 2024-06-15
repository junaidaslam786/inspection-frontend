// src/redux/services/companyApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { getCookie } from "typescript-cookie";
import customFetchBase from "./customFetchBase";

interface Company {
  id: string;
  name: string;
  address: string;
  industry: string;
}

interface CompanyCreateRequest {
  name: string;
  address: string;
  industry: string;
}

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    createCompany: builder.mutation<Company, { userId: number; companyData: CompanyCreateRequest }>({
      query: ({ userId, companyData }) => {
        const token = getCookie("token");
        if (!token) {
          throw new Error("Token not found");
        }
        return {
          url: `company/${userId}`,
          method: "POST",
          body: companyData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useCreateCompanyMutation } = companyApi;
