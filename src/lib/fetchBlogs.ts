import { createClient } from 'microcms-js-sdk';
import type { Blogs, Blog } from '../types/blogs';

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

export const fetchBlog = async (id: string) => {
  const blog = await clientBlogs.get<Blog>({
    endpoint: `posts/${id}`,
  });

  return blog;
};
