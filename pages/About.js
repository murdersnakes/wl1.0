import Layout from '../components/Layout'
import styles from '../styles/about.module.scss'
import Link from 'next/dist/client/link'

export default function About() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.image}>

                </div>
                <div className={styles.info}>
                    <h1>Elevate your online presence</h1>
                    <p>Affordable, fully bespoke & modern website, designed and developed with your brand message at heart</p>
                    <div className={styles.cta}>
                        <Link href="/Contact">
                            <a>
                                Enquire
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}