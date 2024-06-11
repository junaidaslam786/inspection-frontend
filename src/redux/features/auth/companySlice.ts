import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { AxiosError } from "axios";
import { getUserId } from "../../../utils/utils";

interface CompanyRegistrationState {
  loading: boolean;
  error: string | null;
}

const initialState: CompanyRegistrationState = {
  loading: false,
  error: null,
};

function isAxiosError(error: any): error is AxiosError {
    return error.isAxiosError;
}

export const registerCompany = createAsyncThunk(
  "company/registerCompany",
  async (companyData: any, { rejectWithValue }) => {
    try {
      const userId = getUserId();
      const response = await api.post(`/company/${userId}`, companyData);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Company registration error:", error.response?.data);
        return rejectWithValue(error.response?.data);
      } else {
        console.error("An unexpected error occurred during company registration:", error);
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerCompany.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default companySlice.reducer;
