import Link from "next/link"
import styles from "./Buttons.module.css"

export function PrimaryButton({ linkHref, linkText, target }) {
  return (
    <Link href={linkHref}>
      <a target={target} className={styles.primaryButton}>
        {linkText}
      </a>
    </Link>
  )
}
