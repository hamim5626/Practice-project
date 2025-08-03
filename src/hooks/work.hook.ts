import {
  useGetAllWorkQuery,
  useGetWorkByIdQuery,
  useCreateWorkMutation,
  useUpdateWorkMutation,
  useDeleteWorkMutation,
} from "../Redux/features/work/workApi";

// Hook for getting all work items
export const useGetAllWork = () => {
  return useGetAllWorkQuery({});
};

// Hook for getting a single work item by ID
export const useGetWorkById = (id: string) => {
  return useGetWorkByIdQuery(id);
};

// Hook for creating work
export const useCreateWork = () => {
  return useCreateWorkMutation();
};

// Hook for updating work
export const useUpdateWork = () => {
  return useUpdateWorkMutation();
};

// Hook for deleting work
export const useDeleteWork = () => {
  return useDeleteWorkMutation();
};