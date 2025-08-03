import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { toast } from "sonner";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_API || "https://hamim-portfolio-backend.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // Get token from localStorage for client-side requests
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('accessToken');
    }
    
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

// token expired hola new refresh token generate code
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 404) {
    toast.error((result?.error?.data as any)?.message);
  }
  if (result?.error?.status === 403) {
    toast.error((result?.error?.data as any)?.message);
  }
  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://hamim-portfolio-backend.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      // Store the new token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', data.data.accessToken);
      }

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["admins", "users", "categories", "products", "cart", "orders", "blogs", "journey", "work"],
  endpoints: () => ({}),
});
