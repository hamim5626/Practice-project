import { baseApi } from "../../api/baseApi";

const journeyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJourney: builder.query({
      query: () => ({
        url: "/journey",
        method: "GET",
      }),
      providesTags: ["journey"],
    }),
    getSingleJourneyById: builder.query({
      query: (id: string) => ({
        url: `/journey/${id}`,
        method: "GET",
      }),
      providesTags: ["journey"],
    }),
    createExperience: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (experienceData: any) => ({
        url: "/journey/experience",
        method: "POST",
        body: experienceData,
      }),
      invalidatesTags: ["journey"],
    }),
    createEducation: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (educationData: any) => ({
        url: "/journey/education",
        method: "POST",
        body: educationData,
      }),
      invalidatesTags: ["journey"],
    }),
    createSkill: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (skillData: any) => ({
        url: "/journey/skill",
        method: "POST",
        body: skillData,
      }),
      invalidatesTags: ["journey"],
    }),
    updateJourney: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: ({ id, journeyData }: { id: string; journeyData: any }) => ({
        url: `/journey/${id}`,
        method: "PUT",
        body: journeyData,
      }),
      invalidatesTags: ["journey"],
    }),
    deleteJourney: builder.mutation({
      query: (id: string) => ({
        url: `/journey/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["journey"],
    }),
  }),
});

export const {
  useGetAllJourneyQuery,
  useGetSingleJourneyByIdQuery,
  useCreateExperienceMutation,
  useCreateEducationMutation,
  useCreateSkillMutation,
  useUpdateJourneyMutation,
  useDeleteJourneyMutation,
} = journeyApi; 