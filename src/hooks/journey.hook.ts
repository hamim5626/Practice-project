import {
  useGetAllJourneyQuery,
  useGetSingleJourneyByIdQuery,
  useCreateExperienceMutation,
  useCreateEducationMutation,
  useCreateSkillMutation,
  useUpdateJourneyMutation,
  useDeleteJourneyMutation,
} from "../Redux/features/journey/journeyApi";

// Hook for getting all journey items
export const useGetAllJourney = () => {
  return useGetAllJourneyQuery({});
};

// Hook for getting a single journey item by ID
export const useGetSingleJourneyById = (id: string) => {
  return useGetSingleJourneyByIdQuery(id);
};

// Hook for creating experience
export const useCreateExperience = () => {
  return useCreateExperienceMutation();
};

// Hook for creating education
export const useCreateEducation = () => {
  return useCreateEducationMutation();
};

// Hook for creating skill
export const useCreateSkill = () => {
  return useCreateSkillMutation();
};

// Hook for updating journey
export const useUpdateJourney = () => {
  return useUpdateJourneyMutation();
};

// Hook for deleting journey
export const useDeleteJourney = () => {
  return useDeleteJourneyMutation();
};
