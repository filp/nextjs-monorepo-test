import { getRandomQuote } from 'quotes';
import { useEffect, useState } from 'react';
import { Quote } from '../components/Quote';
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
    <div>
      <Quote quote={quote!} />
      <div className="p-4 text-center">
        <a
          className="text-blue-400 hover:text-blue-600 cursor-pointer"
          onClick={() => getSingleRandomQuote()}
        >
          Let's see another one
        </a>
      </div>
    </div>
  ) : (
    <div className="text-gray-200">Loading a great quote...</div>
  );
};

export default Home;
