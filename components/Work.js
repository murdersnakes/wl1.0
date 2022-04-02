import styles from '../styles/components/work.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Layout from './Layout'

export default function Work() {
    return (
        <div className={styles.container}>
            <h1>Most recent projects</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <Link href="http://www.iplgroup.pl/" passHref>
                            <Image src="/IPL-Poland.png" alt="IPL poland website landing page" objectFit='cover' layout='fill' />
                        </Link>
                    </div>
                    <h2>IPL Group Poland</h2>
                    <Link href="http://www.iplgroup.pl/" passHref>
                        <a>visit site</a>
                    </Link>
                </div>

                <div className={styles.card}>
                    <div className={styles.image}>
                        <Link href="https://www.edtcarlessons.ie/" passHref>
                            <Image src="/EDT-Website.png" alt="EDT Car Lessons website landing page" objectFit='cover' layout='fill' />
                        </Link>
                    </div>
                    <h2>EDT Car Lessons</h2>
                    <Link href="https://www.edtcarlessons.ie/" passHref>
                        <a>visit site</a>
                    </Link>
                </div>


                <div className={styles.card}>
                    <div className={styles.image}>
                        <Link href="http://www.tombutlertiling.ie/" passHref>
                            <Image src="/TBT-Website.png" alt="Tom Butler Tiling website landing page" objectFit='cover' layout='fill' />
                        </Link>
                    </div>
                    <h2>Tom Butler Tiling</h2>
                    <Link href="http://www.tombutlertiling.ie/" passHref>
                        <a>visit site</a>
                    </Link>
                </div>
            </div>
        </div >
    )
}