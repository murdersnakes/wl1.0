import styles from "../styles/components/cards.module.scss";
import { FaMedal } from "react-icons/fa";
import Link from "next/link"
import { BsCheck } from "react-icons/bs";

export default function Cards() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.pricing}>
                        <span>€999</span>
                    </div>
                    <div className={styles.icon}>
                        <FaMedal size={40} color="#CD7F32"></FaMedal>
                    </div>
                    <div className={styles.title}>
                        <h1>5 day delivery</h1>
                        <h2>Basic</h2>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li><BsCheck size={40} color="purple" /> <span>Bespoke design</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>3 pages</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>React framework</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Contact form</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Photo gallery</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>10 stock images</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Social media integration</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Mobile responsive</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>SEO optimisation</span></li>
                        </ul>
                    </div>
                    <div className={styles.cta}>
                        <Link href="/Contact">
                            <a>Get started now</a>
                        </Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.pricing}>
                        <span>€1,499</span>
                    </div>
                    <div className={styles.icon}>
                        <FaMedal size={40} color="silver"></FaMedal>
                    </div>
                    <div className={styles.title}>
                        <h1>21 day delivery</h1>
                        <h2>Professional</h2>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li><BsCheck size={40} color="purple" /> <span>Bespoke design</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>10 pages</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>React framework</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Contact form</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Service booking functionality</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Photo gallery</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>25 stock images</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Social media integration</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Mobile responsive</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>SEO optimisation</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>After care plan</span></li>
                        </ul>
                    </div>
                    <div className={styles.cta}>
                        <Link href="/Contact">
                            <a>Get started now</a>
                        </Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.pricing}>
                        <span>€2,999</span>
                    </div>
                    <div className={styles.icon}>
                        <FaMedal size={40} color="gold"></FaMedal>
                    </div>
                    <div className={styles.title}>
                        <h1>6 week delivery</h1>
                        <h2>Enterprise</h2>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li><BsCheck size={40} color="purple" /> <span>Bespoke design</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Unlimited pages</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>React framework</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Contact forms</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Service booking functionality</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Newsletter signup</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Testimonials</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Google analytics</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Custom logo animation</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Photo gallery</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>100 stock images</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Social media integration</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>Mobile responsive</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>SEO optimisation</span></li>
                            <li><BsCheck size={40} color="purple" /> <span>After care plan</span></li>
                        </ul>
                    </div>
                    <div className={styles.cta}>
                        <Link href="/Contact">
                            <a>Get started now</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}