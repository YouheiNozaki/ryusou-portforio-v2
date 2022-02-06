type Id = 'zenn' | 'note' | 'qiita' | 'speakerdeck' | string;

type Category = {
  id: Id;
  caregoryImage: {
    url: string;
    width: number;
    height: number;
  };
};

export type ArticleType = {
  id: string;
  url: string;
  title: string;
  publishArticleAt: string;
  category: Category[];
};

export type Articles = {
  contents: ArticleType[];
  totalCount: number;
  limit: number;
  offset: number;
};
