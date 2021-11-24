import React, { useRef } from 'react';
import Link from 'next/link';
import { toBlob } from 'html-to-image';
import { AiOutlineLink, AiOutlineSnippets } from 'react-icons/ai';
import type { Quote as QuoteType } from 'quotes';
import copy from 'copy-to-clipboard';
import { useToaster } from './Toast';

type Props = {
  quote: QuoteType;
};

const QuoteAction = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <span className="cursor-pointer select-none hover:text-blue-400 mr-2 last:mr-0">
      {children}
    </span>
  );
};

export const Quote = ({ quote }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToaster();

  const onCopyText = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    copy(`${quote.content}\n- ${quote.author}`);

    showToast({ text: 'Copied this quote to your clipboard!' });
  };

  const onCopyImage = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const createImageBlob = async () => {
      const blob = await toBlob(containerRef.current!);

      if (blob) {
        navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          } as unknown as Record<string, ClipboardItemData>),
        ]);

        showToast({ text: 'Image copied to clipboard' });
      }
    };

    createImageBlob();
  };

  return (
    <div className="my-4 mx-4 md:mx-0">
      <div className="text-center p-8 max-w-prose rounded-2xl border border-gray-300 shadow-lg">
        <h1 className="text-xl md:text-3xl font-bold font-serif my-2">
          {quote.content}
        </h1>
        <p className="text-gray-500 mt-4">— {quote.author}</p>
      </div>

      <div className="absolute -top-full">
        <div
          style={{ width: 512, height: 512 }}
          className="p-8 bg-white text-center flex flex-col items-center justify-center border-4 border-blue-400"
          ref={containerRef}
        >
          <h1 className="text-3xl font-serif max-w-prose mb-8">
            {quote.content}
          </h1>
          <p className="text-blue-400 text-sm min-w-full">- {quote.author}</p>
        </div>
      </div>

      <div className="text-sm text-right text-gray-400 mt-4 px-4">
        <QuoteAction>
          <Link href={`/quotes/${quote._id}`}>
            <a>
              <AiOutlineLink /> Permalink
            </a>
          </Link>
        </QuoteAction>

        <QuoteAction>
          <a onClick={onCopyText}>
            <AiOutlineSnippets /> Copy quote
          </a>
        </QuoteAction>

        <QuoteAction>
          <a onClick={onCopyImage}>
            <AiOutlineSnippets /> Copy image
          </a>
        </QuoteAction>
      </div>
    </div>
  );
};
