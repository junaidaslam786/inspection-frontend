import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, removeCookie } from "typescript-cookie";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const cleanUserData = (user: User): Partial<User> => {
  const excludeFields = ["password", "rememberToken", "email"];
  return Object.keys(user)
    .filter((key) => !excludeFields.includes(key))
    .reduce((obj, key) => {
      obj[key as keyof User] = user[key as keyof User];
      return obj;
    }, {} as Partial<User>);
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userData");
      removeCookie("token");
    },
    setUser: (state, action: PayloadAction<User>) => {
      const cleanedUser = cleanUserData(action.payload);
      state.user = { ...cleanedUser, ...action.payload };
      localStorage.setItem("userData", JSON.stringify(cleanedUser));
      setCookie("token", "your_token_value_here", { expires: 7 });
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
