import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { NftCards } from '../../components'
import Loader from '../../components/Loader'
import styles from "../../styles/Nft.module.css"

export default function WalletNfts() {

    const [nfts, setNfts] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const router = useRouter();
    const { query: { walletNfts } } = router;
        useEffect(() => {
            walletNfts && SearchNfts();
    }, [walletNfts])
    

    const SearchNfts=()=>{
        fetch(`https://api.opensea.io/api/v1/assets?owner=${walletNfts}&limit=50`)
        .then((response) => response.json())
        .then((data) => {
          setNfts(data.assets);
          toast("Success in Fetching Data")
        })
        .catch((err) => {
        toast(err.toString);
      })
    }


    return (
        <div>
            <Head>
                <title>ALTURANFT | NFTLISTS for {walletNfts}</title>
                <meta name="description" content="Frontend_Engineer_Technical_Test | NFTLists" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {!loading && (<Loader />)}
                {loading && (<NftCards />)}
                <NftCards nfts={nfts} />
            </main>
        </div>
    )
}