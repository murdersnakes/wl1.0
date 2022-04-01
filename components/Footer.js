import styles from "../styles/components/footer.module.scss";
import Link from 'next/link'
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>weblift</a>
                </Link>
            </div>

            <div className={styles.ethos}>
                <h3>Our mission is to convert your message to an easily understood visual experience, utalising the latest technology to deliver bespoke solutions, so your business can stand out from the rest.</h3>
            </div>
            <div className={styles.links}>
                <p>Links</p>
                <ul>
                <li>
                    <Link href="/Home">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Services">
                        <a>Services</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Recent Projects">
                        <a>Recent Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Testimonials">
                        <a>Testimonials</a>
                    </Link>
                </li>
                </ul>
            </div>
            <div className={styles.map}>
                <p>Need help?</p>
                <ul>
                    <li>
                        <Link href="/Contact">
                            <a>Customer care</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/FAQ">
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <a>Report a bug</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Sitemap">
                            <a>Sitemap</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.socials}>
                <p>Follow us</p>
                <ul>
                    <FaFacebook size={30} color="purple"/>
                    <FaLinkedin size={30} color="purple"/>
                </ul>
            </div>

            <div className={styles.copy}>
                <p>Copyright weblift&copy; 2022. All Rights Reserved.</p>
            </div>

        </footer>
    )
}