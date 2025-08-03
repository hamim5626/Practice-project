import { IUser } from "../../../types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo: any) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.success) {
                        // Store tokens in cookies
                        if (typeof window !== 'undefined') {
                            // Client-side token storage
                            localStorage.setItem('accessToken', data?.data?.accessToken);
                            localStorage.setItem('refreshToken', data?.data?.refreshToken);
                        }
                    }
                } catch (error) {
                    // Handle error
                }
            },
        }),
        // register
        register: builder.mutation({
            query: (userInfo: any) => ({
                url: '/users/create-user',
                method: 'POST',
                body: userInfo,
            }),
        }),
        getSingleUser: builder.query<IUser, string>({
            query: (id: string) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: any) => response.data,
        }),
       
    }),
})

export const { useLoginMutation, useGetSingleUserQuery, useRegisterMutation} = authApi;
