import type { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getRandomQuote } from 'quotes';

export const getServerSideProps = async () => {
  return {
    props: {
      quote: await getRandomQuote(),
    },
  };
};

const Home = ({
  quote,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="p-4">
      <Head>
        <title>Quotly</title>
        <meta
          name="description"
          content="The best startup in town, for all your quote needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen">
        <div className="text-center p-4 max-w-prose">
          <h1 className="text-2xl font-bold">{quote.content}</h1>
          <p className="text-gray-500 mt-4 italic">— {quote.author}</p>
        </div>
      </main>
      <footer className="text-center p-2 border-t">
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
};

export default Home;
