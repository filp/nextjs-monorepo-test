import { getRandomQuote } from 'quotes';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters, AiOutlineReload } from 'react-icons/ai';

import { Quote } from '../components/Quote';
import { Button } from '../components/Button';

import type { Quote as QuoteType } from 'quotes';

const Home = () => {
  const [quote, setQuote] = useState<QuoteType>();

  const getSingleRandomQuote = async () => {
    setQuote(await getRandomQuote());
  };

  useEffect(() => {
    getSingleRandomQuote();
  }, []);

  return quote ? (
    <>
      <Quote quote={quote!} />
      <div className="p-4 text-center">
        <Button onClick={() => getSingleRandomQuote()}>
          <AiOutlineReload /> Let{"'"}s see another one
        </Button>
      </div>
    </>
  ) : (
    <div className="text-blue-500 animate-pulse">
      <span className="animate-spin inline-block mr-2">
        <AiOutlineLoading3Quarters />
      </span>
      Loading a great quote..
    </div>
  );
};

export default Home;
