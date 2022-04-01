import styles from '../styles/components/webdev.module.scss'
import { BsCheck } from "react-icons/bs";
import Link from 'next/link';


export default function Webdev() {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <h2>Website development</h2>
                <ul>
                    <li><BsCheck size={40} color="purple" /> <span>Stand out - completly bespoke website design</span></li>
                    <li><BsCheck size={40} color="purple" /> <span>Speed up - optimised code for lightning speeds</span></li>
                    <li><BsCheck size={40} color="purple" /> <span>To the top - SEO overhaul for Google rankings</span></li>
                    <li><BsCheck size={40} color="purple" /> <span>Razzle dazzle - stunning visuals create brand value</span></li>
                    <li><BsCheck size={40} color="purple" /> <span>Easy to use - Professional UX/UI design</span></li>
                </ul>
                <div className={styles.cta}>
                    <Link href="/Contact">
                        <a>Get a free quote</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}