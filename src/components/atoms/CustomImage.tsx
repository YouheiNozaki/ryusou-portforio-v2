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
  className?: string;
};

export const CustomImage: React.VFC<Props> = ({
  baseImageUrl,
  title,
  author,
  width = 1200,
  height = 630,
  className,
}) => {
  const blend = `https://assets.imgix.net/~text?txtsize=24&txt-color=009688&w=${
    width - 80
  }&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
    title,
  )}`;
  const mark = `${author.image.url}?w=30&h=30`;

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${baseImageUrl}?w=${width}&h=${height}}&txt64=${base64url(
          author.name,
        )}&txt-pad=56&txt-color=00695C&txt-size=16&txt-align=left,top&mark64=${base64url(
          mark,
        )}&mark-x=${20}&mark-y=${46}&blend64=${base64url(
          blend,
        )}&blend-mode=normal&blend-align=top,left&blend-x=40&blend-y=100`}
        alt={title}
      />
    </div>
  );
};
