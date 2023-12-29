import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getToken: builder.query({
            query: queryToken,
            transformResponse: transformTokenQuery,
        }),
        getUserInfos: builder.query({
            query: queryUserInfos,
            transformResponse: transformUserInfos,
        }),
        editUserInfos: builder.mutation({
            query: mutationEditUserInfos,
        }),
    }),
})

// queries and mutations

function queryToken(credentials) {
    return {
        url: '/user/login',
        method: 'POST',
        body: credentials,
    }
}
function queryUserInfos() {
    return {
        url: '/user/profile',
        method: 'POST',
    }
}
function mutationEditUserInfos(user) {
    return {
        url: '/user/profile',
        method: 'PUT',
        body: user,
    }
}

// transform response
function transformTokenQuery(response) {
    return response.body.token
}
function transformUserInfos(response) {
    return {
        firstName: response.body.firstName,
        lastName: response.body.lastName,
    }
}

export const {
    useGetTokenQuery,
    useLazyGetTokenQuery,
    useGetUserInfosQuery,
    useLazyGetUserInfosQuery,
    useEditUserInfosMutation,
} = apiSlice
