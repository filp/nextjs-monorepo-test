import { getRandomQuote } from 'quotes';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters, AiOutlineReload } from 'react-icons/ai';

import { Quote } from '../components/Quote';
import { Button } from '../components/Button';

import type { Quote as QuoteType } from 'quotes';
import { Transition } from '@headlessui/react';

const Spinner = ({ text }: { text: string }) => (
  <div className="text-blue-500 animate-pulse">
    <span className="animate-spin inline-block mr-2">
      <AiOutlineLoading3Quarters />
    </span>
    {text}
  </div>
);

const Home = () => {
  const [quote, setQuote] = useState<QuoteType>();

  const getSingleRandomQuote = async () => {
    setQuote(await getRandomQuote());
  };

  useEffect(() => {
    getSingleRandomQuote();
  }, []);

  return (
    <>
      {!quote && <Spinner text="Loading a great quote..." />}
      <Transition
        show={!!quote}
        enter="transition-opacity ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        {quote && <Quote quote={quote} />}
        <div className="p-4 text-center">
          <Button onClick={() => getSingleRandomQuote()}>
            <AiOutlineReload /> Let{"'"}s see another one
          </Button>
        </div>
      </Transition>
    </>
  );
};

export default Home;
