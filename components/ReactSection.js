import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/react.module.scss'

export default function ReactSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.reactBanner}>
                <div className={styles.info}>
                    <div className={styles.react}>
                        <Image src="/React_logo.png" alt='React Logo' layout='fill' objectFit='contain' />
                    </div>
                    <h1>Sites built with the React Javascript Framework</h1>
                    <p>React JS was designed to provide high performance in mind. The core of the framework offers a virtual DOM program and server-side rendering, which makes complex apps run extremely fast.</p>
                </div>

                <div className={styles.cta}>
                    <h2>Get in touch for more info</h2>
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
                </div>
            </div>
        </div>
    )
}




