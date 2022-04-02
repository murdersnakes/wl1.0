import Layout from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import styles from '../styles/contact.module.scss';

export default function Contact() {

    return (
        <>
            <Head>
                <title>Weblift | Contact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width lang=en" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <div className={styles.card}>


                    </div>
                </div>
            </Layout>
        </>
    )
}