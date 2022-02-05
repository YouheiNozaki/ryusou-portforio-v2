export type Author = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

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

export type BlogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  tags: [
    {
      slug: string;
    },
  ];
  day: string;
  image: {
    url: string;
  };
  content: string;
  repeater: ContentRepeater[];
  author: Author[];
};

export type Blogs = {
  contents: BlogType[];
  totalCount: number;
  limit: number;
  offset: number;
};
