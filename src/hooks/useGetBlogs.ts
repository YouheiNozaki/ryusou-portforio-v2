import { useContext } from 'react';
import { useInfiniteQuery } from 'react-query';
import { BlogCountContext, BlogCountUpdateContext } from 'context/BlogContext';
import { clientBlogs } from '../lib/fetchBlogs';
import type { Blogs } from '../types/blogs';

const useGetBlogCount = () => {
  const { blogCount } = useContext(BlogCountContext);
  const { setBlogCount } = useContext(BlogCountUpdateContext);

  return { blogCount, setBlogCount };
};

export const useGetBlogs = () => {
  const { blogCount, setBlogCount } = useGetBlogCount();

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
