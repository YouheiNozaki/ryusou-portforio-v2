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
  const ogImageUrl = `${baseImageUrl}?w=1200&h=1200&txt64=${base64url(
    author.name,
  )}&txt-pad=90&txt-color=00695C&txt-size=24&txt-align=left,top&mark64=${base64url(
    `${author.image.url}?w=40&h=40`,
  )}&mark-x=40&mark-y=80&blend64=${base64url(
    `https://assets.imgix.net/~text?txtsize=48&txt-color=009688&w=1120&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
      title,
    )}`,
  )}&blend-mode=normal&blend-align=top,left&blend-x=80&blend-y=180`;

  return { ogImageUrl };
};
