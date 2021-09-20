import Head from 'next/head';

export type HeadType = {
  pagetitle?: string;
  pagedescription?: string;
  pagepath?: string;
  pageimg?: string;
  postimg?: string;
  pageimgw?: string;
  pageimgh?: string;
  keyword?: string;
};

export const HeadTemplate: React.FC<HeadType> = ({
  pagetitle,
  pagedescription,
  pagepath,
  pageimg,
  postimg,
  pageimgw,
  pageimgh,
  keyword,
}) => {
  const title = pagetitle
    ? `${pagetitle} | ${process.env.NEXT_PUBLIC_TITLE}`
    : `${process.env.NEXT_PUBLIC_TITLE}`;
  const description =
    pagedescription || `${process.env.NEXT_PUBLIC_DESCRIPTION}`;
  const url = pagepath
    ? `${process.env.NEXT_PUBLIC_URL}${pagepath}`
    : `${process.env.NEXT_PUBLIC_URL}`;
  const imgurl = pageimg
    ? `${process.env.NEXT_PUBLIC_URL}${pageimg}`
    : postimg || `${process.env.NEXT_PUBLIC_URL}banner.png`;
  const imgw = pageimgw || '1200px';
  const imgh = pageimgh || '630px';
  const fbAppId = `${process.env.FB_APP_ID}`;

  return (
    <Head>
      <html lang="ja" />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword || title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="fb:app_id" content={fbAppId} />
      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={imgurl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgurl} />
      <link rel="canonical" href={url} />
    </Head>
  );
};
