import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ArticleCountContextProvider } from '../context/ArticleContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ArticleCountContextProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ArticleCountContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
