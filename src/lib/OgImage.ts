import base64url from 'base64url';

type Author = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

type ogImage = {
  baseImageUrl: string;
  title: string;
  author?: Author;
  width?: number;
  height?: number;
};

export const OgImage = ({
  baseImageUrl,
  title,
  author,
  width = 1200,
  height = 630,
}: ogImage) => {
  const blend = `https://assets.imgix.net/~text?txtsize=20&txt-color=880e4f&w=${
    width - 80
  }&txt-align=center,middle&txtfont=Hiragino%20Sans%20W6&txt64=${base64url(
    title,
  )}`;
  const mark = `${author.image.url}?w=40&h=40`;

  return `${baseImageUrl}?w=${width}&h=${height}}&txt64=${base64url(
    author.name,
  )}&txt-pad=60&mark64=${base64url(mark)}&mark-x=${width - 170}&mark-y=${
    height - 85
  }&blend64=${base64url(blend)}&blend-mode=normal`;
};
