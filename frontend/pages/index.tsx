import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import sample from 'lodash.sample'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getQuotes } from 'quotes'
import { useMemo } from 'react'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      quotes: await getQuotes()
    }
  }
}


const Home = ({ quotes }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const quote = useMemo(() => sample(quotes), []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            {quote.text}
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
