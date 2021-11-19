import type { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getQuote } from 'quotes';
import { Quote } from '../../components/Quote';
import { useRouter } from 'next/dist/client/router';

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

  return quote && <Quote quote={quote} />;
};

export default SingleQuote;
