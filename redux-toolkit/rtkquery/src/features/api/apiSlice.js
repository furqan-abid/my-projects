import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:4000/api/v1'}),
    tagTypes:['blogs'],
    endpoints:(builder)=>({
        getBlogs:builder.query({
            query:()=>'/Blog',
            providesTags:['blogs']
        }),
        addBlogs:builder.mutation({
            query: (blog) => ({
                url: '/Blog/new',
                method: 'POST',
                body: blog
            }),
            invalidatesTags: ['blogs']
        }),
    })
})

export const{
    useGetBlogsQuery,
    useAddBlogsMutation
}=apiSlice;