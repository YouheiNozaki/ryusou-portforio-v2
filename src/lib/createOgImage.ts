import base64url from 'base64url';

type Author = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

export const createOgImage = (
  baseImageUrl: string,
  author: Author,
  title: string,
) => {
  const ogImageUrl = `${baseImageUrl}?w=1200&h=1200&blend64=${base64url(
    `https://assets.imgix.net/~text?txtsize=48&txt-color=009688&w=1120&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
      title,
    )}`,
  )}&blend-mode=normal&blend-align=top,left&blend-x=80&blend-y=180`;

  return { ogImageUrl };
};
