import Link from 'next/link';
import type { Quote as QuoteType } from 'quotes';

type Props = {
  quote: QuoteType;
};

export const Quote = ({ quote }: Props) => {
  return (
    <div className="text-center p-8 md:min-w-full md:max-w-prose rounded-2xl border border-gray-300 shadow-lg my-4 mx-4 md:mx-0">
      <Link href={`/quotes/${quote._id}`}>
        <a className="text-xs text-blue-400 hover:text-blue-600">Permalink</a>
      </Link>

      <h1 className="text-xl md:text-2xl font-bold">{quote.content}</h1>
      <p className="text-gray-500 mt-4">— {quote.author}</p>
    </div>
  );
};
