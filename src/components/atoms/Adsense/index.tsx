import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export const Adsense = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [asPath]);

  return (
    <div key={asPath}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9745303021639681"
        data-ad-slot="2005904245"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
