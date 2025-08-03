import {
  useGetAllBlogsQuery,
  useGetSingleBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} from "../Redux/features/blog/blogApi";

// Hook for getting all blogs
export const useGetAllBlogs = () => {
  return useGetAllBlogsQuery({});
};

// Hook for getting a single blog by ID
export const useGetSingleBlogById = (id: string) => {
  return useGetSingleBlogByIdQuery(id);
};

// Hook for creating a blog
export const useCreateBlog = () => {
  return useCreateBlogMutation();
};

// Hook for updating a blog
export const useUpdateBlog = () => {
  return useUpdateBlogMutation();
};

// Hook for deleting a blog
export const useDeleteBlog = () => {
  return useDeleteBlogMutation();
};
