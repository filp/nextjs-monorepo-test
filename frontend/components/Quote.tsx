import Link from 'next/link';
import type { Quote as QuoteType } from 'quotes';

type Props = {
  quote: QuoteType;
};

export const Quote = ({ quote }: Props) => {
  return (
    <div className="text-center p-4 max-w-prose">
      <Link href={`/quotes/${quote._id}`}>
        <a className="text-xs text-blue-400 hover:text-blue-600">
          <span className="text-gray-500">#</span>
          {quote._id}
        </a>
      </Link>

      <h1 className="text-2xl font-bold">{quote.content}</h1>
      <p className="text-gray-500 mt-4">— {quote.author}</p>
    </div>
  );
};
