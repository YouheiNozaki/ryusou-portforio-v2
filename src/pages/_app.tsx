/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ArticleCountContextProvider } from '../hooks/useGetArticleCount';
import { BlogCountContextProvider } from '../hooks/useGetBlogCount';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ArticleCountContextProvider>
          <BlogCountContextProvider>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </BlogCountContextProvider>
        </ArticleCountContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
