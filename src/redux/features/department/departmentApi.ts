import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const DEPARTMENT_URL = "/management-departments";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const { useCreateDepartmentMutation } = departmentApi;
