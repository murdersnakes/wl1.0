import Layout from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import styles from '../styles/contact.module.scss';
import { useState } from "react/cjs/react.development";

export default function Contact() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <Head>
                <title>Weblift | Contact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width lang=en" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <form>
                            <h1>Send us a message</h1>

                            <label htmlFor="fullname">Full name</label>
                            <input type="text" value={fullname}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                                name="fullname"
                            />


                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}></input>

                            <label htmlFor="company">Company</label>
                            <input
                                name="company"
                                value={company}
                                onChange={(e) => {
                                    setCompany(e.target.value);
                                }}
                            ></input>

                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>

                            <input type="submit" name="button">Submit</input>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}