import { baseApi } from "../../api/baseApi";

const workApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWork: builder.query({
      query: (_) => ({
        url: "/work",
        method: "GET",
      }),
      providesTags: ["work"],
    }),
    getWorkById: builder.query({
      query: (id: string) => ({
        url: `/work/${id}`,
        method: "GET",
      }),
      providesTags: ["work"],
    }),
    createWork: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (workData: any) => ({
        url: "/work",
        method: "POST",
        body: workData,
      }),
      invalidatesTags: ["work"],
    }),
    updateWork: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: ({ id, workData }: { id: string; workData: any }) => ({
        url: `/work/${id}`,
        method: "PUT",
        body: workData,
      }),
      invalidatesTags: ["work"],
    }),
    deleteWork: builder.mutation({
      query: (id: string) => ({
        url: `/work/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["work"],
    }),
  }),
});

export const {
  useGetAllWorkQuery,
  useGetWorkByIdQuery,
  useCreateWorkMutation,
  useUpdateWorkMutation,
  useDeleteWorkMutation,
} = workApi; 