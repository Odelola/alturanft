import Head from 'next/head'
import { PrimaryButton } from '../components/Buttons'
import styles from "../styles/404.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>PAGE NOT FOUND</title>
        <meta name="description" content="Frontend_Engineer_Technical_Test | Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>404</h1>
        <p>Sorry, it seems like that page does not exit :(</p>
        <PrimaryButton linkHref="/" linkText="Go Home"/>
      </main>
    </div>
  )
}
