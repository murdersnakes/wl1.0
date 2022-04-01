import Link from 'next/link'
import styles from '../styles/components/idea.module.scss'

export default function Idea() {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.info}>
                <h1>Have an idea for a new project?</h1>
                <Link href="/Contact">
                    <a>Get a free quote</a>
                </Link>
            </div>

        </div>
    )
}