import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";
import { IAdmin, IMeta } from "@/types";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdminWithFormData: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    getAdmins: builder.query({
      query: (arg: Record<string, any>) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
    getAdminById: builder.query({
      query: (id: string) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.admin],
    }),
    updateAdmin: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data?.body,
      }),

      invalidatesTags: [tagTypes.admin],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useCreateAdminWithFormDataMutation,
  useGetAdminsQuery,
  useGetAdminByIdQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
