export type Article = {
  id: string;
  url: string;
  title: string;
  publishedAt: string;
  category: [
    {
      id: 'zenn' | 'note' | 'qiita' | 'speakerdeck';
      caregoryImage: {
        url: string;
      };
    },
  ];
};

export type Articles = {
  contents: Article[];
  totalCount: number;
  limit: number;
  offset: number;
};
