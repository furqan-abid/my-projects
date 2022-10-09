import { apiSlice } from "./api/apiSlice";

export const blogSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/Blog",
      providesTags: (result,error,arg) =>[
                { type: 'Blog', id: 'LIST' },
              ...result.blog.map(({ _id }) => ({ type: 'Blog', _id })),
            ]
    }),
    addBlogs: builder.mutation({
      query: (blog) => ({
        url: "/BLog/new",
        method: "POST",
        body: blog,
      }),
      invalidatesTags:(result,error,arg)=> [{ type: 'Blog', id: 'LIST' }],
    }),
  }),
});

export const { useGetBlogsQuery, useAddBlogsMutation } = blogSLice;
