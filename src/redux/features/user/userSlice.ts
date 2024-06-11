import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

// Define the user type
interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  // Add other fields as necessary
}

// Define the initial state type
interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

// Utility function to clean up the user object
const cleanUserData = (user: User): Partial<User> => {
  const excludeFields = ['password', 'rememberToken', 'otpCode', 'otpExpiry'];
  return Object.keys(user)
    .filter(key => !excludeFields.includes(key))
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
      Cookies.remove("token");
    },
    setUser: (state, action: PayloadAction<User>) => {
      const cleanedUser = cleanUserData(action.payload);
      state.user = { ...cleanedUser, ...action.payload };
      localStorage.setItem("userData", JSON.stringify(cleanedUser));
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.profileImage = action.payload;
      }
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser, updateProfileImage } = userSlice.actions;
