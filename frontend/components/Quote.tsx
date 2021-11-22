import React from 'react';
import Link from 'next/link';
import { AiOutlineLink, AiOutlineSnippets } from 'react-icons/ai';
import type { Quote as QuoteType } from 'quotes';
import copy from 'copy-to-clipboard';
import { useToaster } from './Toast';

type Props = {
  quote: QuoteType;
};

export const Quote = ({ quote }: Props) => {
  const { showToast } = useToaster();

  const onCopyToClipboard = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    copy(`${quote.content}\n- ${quote.author}`);

    showToast({ text: 'Copied this quote to your clipboard!' });
  };

  return (
    <div className="my-4 mx-4 md:mx-0">
      <div className="text-center p-8 max-w-prose rounded-2xl border border-gray-300 shadow-lg">
        <Link href={`/quotes/${quote._id}`}>
          <a className="text-xs text-blue-400 hover:text-blue-600">
            <AiOutlineLink /> Permalink
          </a>
        </Link>

        <h1 className="text-xl md:text-2xl font-bold">{quote.content}</h1>
        <p className="text-gray-500 mt-4">— {quote.author}</p>
      </div>

      <div className="text-sm text-right text-gray-400 mt-4 px-4">
        <a
          className="cursor-pointer select-none hover:text-blue-400"
          onClick={onCopyToClipboard}
        >
          <AiOutlineSnippets /> Copy to clipboard
        </a>
      </div>
    </div>
  );
};
