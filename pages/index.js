import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <h1>Let's build Airbnb</h1>   

    </div>
  )
}
