import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../constants/apiURL";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
});
