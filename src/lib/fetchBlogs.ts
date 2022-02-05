import { createClient } from 'microcms-js-sdk';
import type { Blogs, BlogType } from '../types/blogs';

// Initialize Client SDK.
export const clientBlogs = createClient({
  serviceDomain: 'ryusou-mtkh',
  apiKey: process.env.BLOG_API_KEY,
});

export const getBlogList = async (offset?: number, limit?: number) => {
  const blogs = await clientBlogs.get<Blogs>({
    endpoint: 'posts',
    queries: {
      offset: offset ? (offset - 1) * 10 : 0,
      limit: limit || 10,
    },
  });

  return { blogs };
};

export const getBlog = async (id: string) => {
  const blog = await clientBlogs.get<BlogType>({
    endpoint: `posts/${id}`,
  });

  return blog;
};
