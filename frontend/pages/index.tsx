import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getRandomQuote } from 'quotes';

export const getServerSideProps = async () => {
  return {
    props: {
      quote: await getRandomQuote(),
    },
  };
};

const Home = ({
  quote,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quotly</title>
        <meta
          name="description"
          content="The best startup in town, for all your quote needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{quote.content}</h1>
          <p className={styles.author}>{quote.author}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        Quotes from{' '}
        <a
          className={styles.attribution}
          href="https://github.com/lukePeavey/quotable"
        >
          quotable.io
        </a>
      </footer>
    </div>
  );
};

export default Home;
