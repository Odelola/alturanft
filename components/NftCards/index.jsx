import Loader from "../Loader"
import NftCard from "../NftCard"
import styles from "./NftCards.module.css"
import { useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "../Modal";


function NftCards({ nfts }) {
  const [showModal, setShowModal] = useState(null)

  const router = useRouter();
  return (
    <section id={styles.nftCards}>
      <div className={styles.nftCardsInner}>
        {nfts?.map((item) => (
          <NftCard key={item.name} item={item} onClick={() => setShowModal(item)} />
        ))}

        {showModal ? (<Modal item={showModal} onClick={() => setShowModal(null)} />) : null}
      </div>
    </section>
  )

}

export default NftCards