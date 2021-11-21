import type { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getQuote } from 'quotes';
import { Quote } from '../../components/Quote';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

type SingleQuotePageParams = {
  id: string;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<SingleQuotePageParams>
) => {
  const queryClient = new QueryClient();
  const { id } = context.params!;

  queryClient.setQueryData(`quote/${id}`, await getQuote({ id }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const SingleQuote = () => {
  const router = useRouter();
  const { id } = router.query as SingleQuotePageParams;

  const { data: quote } = useQuery(`quote/${id}`, async () => getQuote({ id }));

  return (
    <>
      <div className="mb-2">
        <Link href="/">
          <a className="text-blue-400 hover:text-blue-600 text-sm">
            Return to random quotes
          </a>
        </Link>
      </div>
      {quote && <Quote quote={quote} />}
    </>
  );
};

export default SingleQuote;
