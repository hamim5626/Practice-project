import { IUser } from "../../../types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query: (userInfo: any) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
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
                   console.log(error);
                }
            },
        }),
        // register
        register: builder.mutation({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transformResponse: (response: any) => response.data,
        }),
       
    }),
})

export const { useLoginMutation, useGetSingleUserQuery, useRegisterMutation} = authApi;
