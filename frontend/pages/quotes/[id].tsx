import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getQuote } from 'quotes';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Quote } from '../../components/Quote';

import type { GetServerSidePropsContext } from 'next';

type SingleQuotePageParams = {
  id: string;
};

const getQuoteAsync =
  (...params: Parameters<typeof getQuote>) =>
  async () =>
    getQuote.apply(null, params);

export const getServerSideProps = async (
  context: GetServerSidePropsContext<SingleQuotePageParams>
) => {
  const queryClient = new QueryClient();
  const { id } = context.params!;

  queryClient.prefetchQuery(`quote/${id}`, getQuoteAsync({ id }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const SingleQuote = () => {
  const router = useRouter();
  const { id } = router.query as SingleQuotePageParams;

  const { data: quote } = useQuery(`quote/${id}`, getQuoteAsync({ id }));

  return (
    <>
      <div className="mb-2">
        <Link href="/">
          <a className="text-blue-400 hover:text-blue-600 text-sm">
            <AiOutlineArrowLeft /> Return to random quotes
          </a>
        </Link>
      </div>
      {quote && <Quote quote={quote} />}
    </>
  );
};

export default SingleQuote;
