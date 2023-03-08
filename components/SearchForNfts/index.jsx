import { useRouter } from "next/router";
import { useState } from "react"
import { SearchIcon } from "../SvgImages"
import styles from "./SearchForNfts.module.css"


function SearchForNfts() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState(null);
  const SubmitAddress =(event)=>{
    event.preventDefault();
    if(!walletAddress.trim()) {
      setError(true);
      return false;
    };
    router.push(`/nfts/${walletAddress.trim()}`);
    setError(false);
  }
  function onEnterSearch (event) {
    if(event.key == "Enter"){
      return SubmitAddress(event);
    }
  }
  
  return (
    <section id={styles.nftSearchContainer}>
      <div className={styles.nftSearchContainerInner}>
        <div className={styles.nftSearchContainerText}>
          <h3>Enter your Wallet address <br /> to display its NFTs</h3>
        </div>
        <form className={styles.nftSearchContainerForm}>
          <div className={styles.nftSearchContainerForm_inputText}>
            <input type="text" name="Wallet" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} className={styles.nftSearchContainerForm_input} id="nftSearchContainerForm_input" placeholder="Enter Wallet Address" onKeyPress={(e) => 
              onEnterSearch(e)} />
            <div>

            <SearchIcon onSubmit={(e) =>SubmitAddress(e)} />
            </div>
            {/* <div className={styles.nftSearchContainerForm_submit}>
            </div>  */}
          </div>
              {error && (<small style={{ color: "red"}}>This Field cannot be Empty</small>)}
        </form>
      </div>
    </section>
  )
}

export default SearchForNfts