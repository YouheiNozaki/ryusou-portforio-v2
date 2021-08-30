import { createClient } from 'microcms-js-sdk';
import type { Blogs } from '../types/blogs';

// Initialize Client SDK.
export const clientBlogs = createClient({
  serviceDomain: 'ryusou-mtkh',
  apiKey: process.env.NEXT_PUBLIC__BLOG_API_KEY,
});

export const fetchBlogs = async () => {
  const blogs = await clientBlogs.get<Blogs>({
    endpoint: 'posts',
  });

  return blogs;
};
