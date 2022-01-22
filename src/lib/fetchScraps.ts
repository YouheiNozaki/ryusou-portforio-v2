import { createClient } from 'microcms-js-sdk';
import type { Scraps, Scrap } from '../types/scraps';

// Initialize Client SDK.
export const clientScraps = createClient({
  serviceDomain: 'ryusou-portforio',
  apiKey: process.env.NEXT_PUBLIC__BLOG_API_KEY,
});

export const fetchScraps = async () => {
  const scraps = await clientScraps.getList<Scraps>({
    endpoint: 'scraps',
  });

  return scraps;
};

export const fetchScrap = async (id: string) => {
  const scrap = await clientScraps.get<Scrap>({
    endpoint: `scraps/${id}`,
  });

  return scrap;
};
