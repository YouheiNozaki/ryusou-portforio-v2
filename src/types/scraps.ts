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
  fieldId: 'tech' | 'hobby';
  title: string;
  body: Body[];
};

export type Scrap = {
  id: string;
  title: string;
  topic: Topic[];
  createdAt: string;
};

export type Scraps = {
  contents: Scrap[];
};
