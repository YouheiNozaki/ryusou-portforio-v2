export type Article = {
  id: string;
  url: string;
  title: string;
  publishArticleAt: string;
  category: [
    {
      id: 'zenn' | 'note' | 'qiita' | 'speakerdeck';
      caregoryImage: {
        url: string;
        width: number;
        height: number;
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
