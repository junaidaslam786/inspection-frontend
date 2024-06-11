import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { logout } from "../features/user/userSlice";
import { RootState } from "../store";

const baseUrl = `/`;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.token || localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

interface CustomError {
  message: string;
  [key: string]: any;
}

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    result.error?.status === 401 &&
    (result.error.data as CustomError)?.message === "You are not logged in"
  ) {
    const refreshResult = await baseQuery(
      { url: "superadmin/auth/refresh", method: "GET", credentials: "include" },
      api,
      extraOptions
    );

    if (refreshResult.data && (refreshResult.data as any).token) {
      const newToken = (refreshResult.data as any).token;
      localStorage.setItem("token", newToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      window.location.href = "/login";
    }
  }

  return result;
};

export default customFetchBase;
