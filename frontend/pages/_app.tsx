import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { IconContext } from 'react-icons';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ToasterProvider } from '../components/Toast';

const defaultIconStyle = {
  style: { display: 'inline-block' },
};

const Quotly = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  const layout = (
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
  );

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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&amp;family=Rubik:wght@400;600&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ToasterProvider>
            <IconContext.Provider value={defaultIconStyle}>
              {layout}
            </IconContext.Provider>
          </ToasterProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default Quotly;
