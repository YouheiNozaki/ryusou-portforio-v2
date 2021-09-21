import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { clientBlogs } from '../lib/fetchBlogs';
import type { Blogs } from '../types/blogs';

export const useGetBlogs = () => {
  const [blogCount, setBlogCount] = useState<number>(0);

  const fetchBlogs = async (pageParam: number) => {
    setBlogCount((prevBlogCount) => prevBlogCount + pageParam);

    const blogs = await clientBlogs.get<Blogs>({
      endpoint: 'posts',
      queries: {
        offset: blogCount + pageParam,
      },
    });

    return blogs;
  };

  return useInfiniteQuery(
    ['blogs'],
    ({ pageParam = 0 }) => fetchBlogs(pageParam),
    {
      staleTime: Infinity,
      getNextPageParam: (lastPage) => {
        const { contents, totalCount } = lastPage;

        return contents.length + blogCount < totalCount
          ? contents.length
          : undefined;
      },
    },
  );
};
