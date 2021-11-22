import { getRandomQuote } from 'quotes';
import { useEffect, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

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
    <div className="text-gray-200">Loading a great quote...</div>
  );
};

export default Home;
