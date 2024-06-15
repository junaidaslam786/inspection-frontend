import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Company {
  id: string;
  name: string;
  address: string;
  industry: string;
}

interface CompanyState {
  company: Company | null;
}

const initialState: CompanyState = {
  company: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<Company>) => {
      state.company = action.payload;
    },
    clearCompany: (state) => {
      state.company = null;
    },
  },
});

export const { setCompany, clearCompany } = companySlice.actions;
export default companySlice.reducer;
