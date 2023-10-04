import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseURL } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseURL() }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});
