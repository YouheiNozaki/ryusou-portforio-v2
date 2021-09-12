import base64url from 'base64url';

type Author = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

type Props = {
  baseImageUrl: string;
  title: string;
  author?: Author;
  width?: number;
  height?: number;
};

export const OgImage: React.VFC<Props> = ({
  baseImageUrl,
  title,
  author,
  width = 1200,
  height = 630,
}) => {
  const blend = `https://assets.imgix.net/~text?txtsize=20&w=${
    width - 80
  }&txt-align=center,middle&txtfont=Hiragino%20Sans%20W6&txt64=${base64url(
    title,
  )}`;
  const mark = `https://assets.imgix.net/~text?txtsize=16&txt-align=center,middle&txtfont=Hiragino%20Sans%20W6&txt64=${base64url(
    author.name,
  )}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${baseImageUrl}?w=${width}&h=${height}}&mark64=${base64url(
        mark,
      )}&mark-x=${width - 180}&mark-y=${height - 90}&blend64=${base64url(
        blend,
      )}&blend-mode=normal`}
      alt={title}
    />
  );
};
