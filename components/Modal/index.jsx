import { useRouter } from "next/router";
import {  useRef } from "react";
import { PrimaryButton } from "../Buttons";
import styles from "./Modal.module.css"

export function Modal({ item, onClick }) {
  const modalRef = useRef()
  const router = useRouter();
  return (
    <div className={styles.modalContainer} ref={modalRef} onClick={() =>
     { onClick()
    modalRef.current.style.display = "none"}}>
          <div className={styles.modalContainerInner}>
            <div className={styles.modalContainerInner_imageContainer}>
              <img src={item?.image_url} alt={item?.decsription}  />
            </div>
            <div className={styles.modalContainerInner_detailsContainer}>
              <h2>{item?.name}</h2>
              {/* <h3>Created At: {actualDate}</h3> */}
              <p>{item?.description}</p>
              <h3>Owner: {router.query.walletNfts}</h3>
              <div className={styles.modalContainerInner_buttonContainer}>
                <PrimaryButton target="_blank" linkHref={item?.permalink} linkText="Buy On Opensea" />
              </div>
            </div>
          </div>
    </div>
  )
}
