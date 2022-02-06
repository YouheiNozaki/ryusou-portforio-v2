export type ContentRepeater = {
  fieldId: 'content' | 'amazonlink';
  content: string;
  // アマゾンリンク
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  url: string;
};

export type Tag = {
  slug: string;
};

export type BlogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  tags: Tag[];
  day: string;
  image: {
    url: string;
  };
  content: string;
  repeater: ContentRepeater[];
};

export type Blogs = {
  contents: BlogType[];
  totalCount: number;
  limit: number;
  offset: number;
};
