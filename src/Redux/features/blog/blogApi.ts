import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: (_) => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getSingleBlogById: builder.query({
      query: (id: string) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    createBlog: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (blogData: any) => ({
        url: "/blog",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["blogs"],
    }),
    updateBlog: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: ({ id, blogData }: { id: string; blogData: any }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: blogData,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi; 