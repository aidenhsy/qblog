import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Q博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎来的<span style={{ color: 'orange' }}>Q</span>博客
        </h1>
      </main>

      <footer className={styles.footer}>
        <a>Powered by Aiden Yang</a>
      </footer>
    </div>
  );
}
