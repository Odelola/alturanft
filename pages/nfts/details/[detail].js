import { useRouter } from "next/router"
import styles from "../../../styles/NftDetails.module.css"


//This was meant to be theh page to show details when not on modal mode

export default function WalletNftsDetail() {
    const router = useRouter();
    const { query } = router;
    const date = Date.parse(query.created_date);
    const actualDate = new Date(date).toString().split(' ').slice(0, 3).join(" ");

    return (
        <>
            <title>ALTURANFT | NFTLISTS for {query.name}</title>
            <meta name="description" content="Frontend_Engineer_Technical_Test | NFTListsDetails" />
            <link rel="icon" href="/favicon.ico" />
            <main className={styles.main}>
                    <div className={styles.nftDetailsContainer}>
                        <div className={styles.nftDetailsContainerInner}>
                            <div className={styles.nftDetailsContainerInner_imageContainer}>
                                <img src={query.image_url} alt={query.decsription} />
                            </div>
                            <div className={styles.nftDetailsContainerInner_detailsContainer}>
                                <h2>{query.name}</h2>
                                <h3>Created At: {actualDate}</h3>
                                <p>{query.description}</p>
                                <div>

                                    <table>
                                        <tr>
                                            <th>Properties</th>
                                            <th>Info</th>
                                        </tr>
                                        <tr>

                                            <td>Payout Address</td>
                                            <td>{query.payout_address}</td>
                                        </tr>
                                        {query.discord_url ? (<tr>
                                            <td>Discord Url</td>
                                            <td>{query.discord_url}</td>
                                        </tr>) : (<tr>
                                            <td>Discord Url</td>
                                            <td>None</td>
                                        </tr>)}
                                        <tr>
                                            <td>NSFW:</td>
                                            <td>{query.is_nsfw}</td>
                                        </tr>
                                        <tr>
                                            <td>Detail:</td>
                                            <td>{query.detail}</td>
                                        </tr>
                                        <tr>
                                            <td>Email Required</td>
                                            <td>{query.require_email}</td>
                                        </tr>
                                    </table>
                                    {/* <PimaryButton linkPath={query.} */}
                                </div>
                            </div>
                        </div>
                    </div>

            </main>
        </>
    )
}
