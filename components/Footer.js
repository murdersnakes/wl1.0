import styles from "../styles/components/footer.module.scss";
import Link from 'next/link'
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>weblift</a>
                </Link>
            </div>

            <div className={styles.ethos}>
                <h3>Our mission is to convert your message to an easily understood visual experience, utalising the latest technology to deliver bespoke solutions, so your business can stand out from the rest.</h3>
            </div>


            <div className={styles.socials}>
                <p>Follow us</p>

                <FaFacebook size={30} color="purple" />
                <FaLinkedin size={30} color="purple" />

            </div>

            <div className={styles.copy}>
                <p>Copyright weblift&copy; 2022. All Rights Reserved.</p>
            </div>

        </footer>
    )
}