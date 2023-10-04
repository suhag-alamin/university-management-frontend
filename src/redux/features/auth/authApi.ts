import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
