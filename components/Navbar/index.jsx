import { useContext } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { ThemeContext } from "../../utils/contexts/ThemeContext";

function Navbar({ onClick }) {
  const { theme, giveLightTheme, giveDarkTheme } = useContext(ThemeContext);
  return (
    <nav id={styles.navigation}>
      <div className={styles.navInner}>
        <div className={styles.navLogo}>
          <Link href={`/`}>

            <h1>ALTURANFT</h1>
          </Link>
        </div>
      </div>
    </nav >
  )
}

export default Navbar