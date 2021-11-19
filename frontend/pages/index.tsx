import type { InferGetServerSidePropsType } from 'next';
import { getRandomQuote } from 'quotes';
import { Quote } from '../components/Quote';

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
    <main className="flex flex-col items-center justify-center h-5/6">
      <Quote quote={quote} />
    </main>
  );
};

export default Home;
