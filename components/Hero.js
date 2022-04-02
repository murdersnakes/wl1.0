import styles from "../styles/components/hero.module.scss";
import Link from 'next/link'
import { FaCode } from 'react-icons/fa'


export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <div className={styles.info}>
                <FaCode size={70} color="purple" />
                <h1>Elevate your online presence</h1>
                <p>Affordable, fully bespoke & modern website, designed and developed with your brand message at heart</p>
                <div className={styles.cta}>
                    <Link href="/Contact">
                        <a>
                            Get a free quote
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}