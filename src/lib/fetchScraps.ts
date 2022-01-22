import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
export const clientScraps = createClient({
  serviceDomain: 'ryusou-portforio',
  apiKey: process.env.NEXT_PUBLIC__BLOG_API_KEY,
});

// export const fetchBlogs = async () => {
//   const scraps = await clientScraps.get<Scraps>({
//     endpoint: 'scraps',
//   });

//   return scraps;
// };

// export const fetchBlog = async (id: string) => {
//   const scrap = await clientScraps.get<Scrap>({
//     endpoint: `scraps/${id}`,
//   });

//   return scrap;
// };
