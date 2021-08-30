export type Blog = {
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
};

export type Blogs = {
  contents: Blog[];
  totalCount: number;
  limit: number;
  offset: number;
};
