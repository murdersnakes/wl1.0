import styles from '../styles/components/testimonials.module.scss'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from 'react-icons/im'
import { FaStar, FaStarHalf } from 'react-icons/fa'


export default function Testimonials() {
    return (
        <section id="testimonials" className={styles.container}>
            <div className={styles.card}>
                <ImQuotesLeft size={35} color="purple" />
                <p>Working with Michael was a real pleasure. From our initial meeting in May 2021, my website was live in 5 days. I&apos;ve had bad experiences working with web developers in the past and I could not reccommend Weblift enough! 10/10.</p>

                <div className={styles.stars}>
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                </div>
                <h1>Tom Butler</h1>
                <h2>Tom Butler Tiling</h2>
            </div>
            <div className={styles.card}>
                <ImQuotesLeft size={35} color="purple" />
                <p>We commissioned Weblift for the re-branding and website development of our Polish branch. We are delighted with the outcome and have subsequently hired Michael to develop our Irish eCommerce platform coming soon. An absolute joy to work with. Professional, punctual and talanted.</p>

                <div className={styles.stars}>
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStarHalf color="purple" />
                </div>
                <h1>Thomas McDonald</h1>
                <h2>Business Development Manager - IPL Group</h2>
            </div>
            <div className={styles.card}>
                <ImQuotesLeft size={35} color="purple" />
                <p>I needed a simple website quickly and that is what I got. Michael had a rough draft to me in 24 hours and the site was finished in 3 days. Unbelievable service! will use for other projects in the future. </p>

                <div className={styles.stars}>
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                    <FaStar color="purple" />
                </div>
                <h1>Damien O&apos;Reilly</h1>
                <h2>MD - EDT Car Lessons</h2>
            </div>
        </section>
    )
}