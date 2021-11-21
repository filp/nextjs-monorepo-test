import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { IconContext } from 'react-icons';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const defaultIconStyle = {
  style: { display: 'inline-block' },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Quotly</title>
        <meta
          name="description"
          content="The best startup in town, for all your quote needs"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <IconContext.Provider value={defaultIconStyle}>
            <div className="h-screen">
              <main className="flex flex-col items-center justify-center h-5/6">
                <Component {...pageProps} />
              </main>

              <footer className="text-center p-2 text-sm text-gray-500">
                Quotes from{' '}
                <a
                  className="text-blue-400 font-semibold hover:text-blue-600"
                  href="https://github.com/lukePeavey/quotable"
                >
                  quotable.io
                </a>
              </footer>
            </div>
          </IconContext.Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
