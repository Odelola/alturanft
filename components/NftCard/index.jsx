import styles from "./NftCard.module.css"

function NftCard({ item, onClick }) {
  return (
      <article className={styles.nftCard} onClick={onClick}>
        <div className={styles.nftCardImage}>
          <img src={item.image_url} alt="Nft Image" className={styles.nftCardImage_image} />
        </div>
        <div className={styles.nftCardDetails}>
          <div className={styles.nftCardDetails_text}>
            <div style={{ flexBasis: "60%" }}>
              <h1>{item.name}</h1>
              <p>Token ID: {item.token_id}</p>
            </div>
          </div>
        </div>
      </article>
  )
}

export default NftCard
