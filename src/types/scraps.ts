type Body = {
  fieldId: 'richlink' | 'markdown' | 'richeditor';
  // richeditor
  richText: string;
  // richlink
  title: string;
  url: string;
  image: {
    url: string;
    height: string;
    width: string;
  };
  // markdown
  markdownText: string;
};

type Topic = {
  fieldId: 'topic';
  body: Body;
};

export type Scrap = {
  title: string;
  imgage: {
    url: string;
    width: string;
    height: string;
  };
  body: Topic[];
};

export type Scraps = {
  contents: Scrap[];
};
