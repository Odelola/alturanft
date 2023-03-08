import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { NftCards, SearchForNfts } from '../components'
import styles from "../styles/Home.module.css"

export default function Home() {

  return (
    <div>
      <Head>
        <title>ALTURANFT | HOMEPAGE</title>
        <meta name="description" content="Frontend_Engineer_Technical_Test | Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchForNfts />
      </main>
    </div>
  )
}
