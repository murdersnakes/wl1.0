import Link from "next/link"
import styles from "../styles/components/navbar.module.scss"

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <a>weblift</a>
                </Link>
            </div>

            <div className={styles.buttons}>
                <div className={styles.button1}>
                    <Link href="tel:00353896083228">
                        <a>089 608 3228</a>
                    </Link>
                </div>
                <div className={styles.button2}>
                    <Link href="/Contact">
                        <a>Contact Us</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}